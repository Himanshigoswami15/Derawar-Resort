const express = require('express');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Serve static files from dist (built frontend)
app.use(express.static(path.join(__dirname, 'dist')));

// ─── PUBLIC API ────────────────────────────────────────────────

// Get all menu data (for the public menu page)
app.get('/api/menu', async (req, res) => {
  try {
    const categories = await pool.query(
      'SELECT * FROM categories ORDER BY sort_order ASC'
    );
    const items = await pool.query(
      'SELECT * FROM menu_items WHERE is_active = true ORDER BY sort_order ASC'
    );
    
    const menuData = categories.rows.map(cat => ({
      category: cat.name,
      items: items.rows
        .filter(item => item.category_id === cat.id)
        .map(item => ({
          id: item.id,
          name: item.name,
          price: `₹${item.price}`,
          description: item.description,
          image: item.image
        }))
    }));
    
    res.json(menuData);
  } catch (err) {
    console.error('Error fetching menu:', err);
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
});

// ─── ADMIN AUTH ────────────────────────────────────────────────

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'derawar2024';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// Admin login verification
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, token: ADMIN_PASSWORD });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

// ─── ADMIN API: CATEGORIES ────────────────────────────────────

// Get all categories
app.get('/api/admin/categories', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories ORDER BY sort_order ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a category
app.post('/api/admin/categories', authMiddleware, async (req, res) => {
  const { name } = req.body;
  try {
    const maxOrder = await pool.query('SELECT COALESCE(MAX(sort_order), -1) + 1 as next_order FROM categories');
    const result = await pool.query(
      'INSERT INTO categories (name, sort_order) VALUES ($1, $2) RETURNING *',
      [name, maxOrder.rows[0].next_order]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a category
app.delete('/api/admin/categories/:id', authMiddleware, async (req, res) => {
  try {
    await pool.query('DELETE FROM categories WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── ADMIN API: MENU ITEMS ───────────────────────────────────

// Get all items (including inactive)
app.get('/api/admin/items', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT mi.*, c.name as category_name 
      FROM menu_items mi 
      JOIN categories c ON mi.category_id = c.id 
      ORDER BY c.sort_order ASC, mi.sort_order ASC
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get items by category
app.get('/api/admin/items/category/:categoryId', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM menu_items WHERE category_id = $1 ORDER BY sort_order ASC',
      [req.params.categoryId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a menu item
app.post('/api/admin/items', authMiddleware, async (req, res) => {
  const { category_id, name, price, description, image } = req.body;
  try {
    const maxOrder = await pool.query(
      'SELECT COALESCE(MAX(sort_order), -1) + 1 as next_order FROM menu_items WHERE category_id = $1',
      [category_id]
    );
    const result = await pool.query(
      'INSERT INTO menu_items (category_id, name, price, description, image, sort_order) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [category_id, name, price, description || '', image || '', maxOrder.rows[0].next_order]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a menu item
app.put('/api/admin/items/:id', authMiddleware, async (req, res) => {
  const { name, price, description, image, is_active, category_id } = req.body;
  try {
    const result = await pool.query(
      `UPDATE menu_items SET 
        name = COALESCE($1, name), 
        price = COALESCE($2, price), 
        description = COALESCE($3, description), 
        image = COALESCE($4, image), 
        is_active = COALESCE($5, is_active),
        category_id = COALESCE($6, category_id),
        updated_at = NOW()
      WHERE id = $7 RETURNING *`,
      [name, price, description, image, is_active, category_id, req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a menu item
app.delete('/api/admin/items/:id', authMiddleware, async (req, res) => {
  try {
    await pool.query('DELETE FROM menu_items WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve React app for all other routes (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🏰 Derawar Resort Server running on port ${PORT}`);
  console.log(`📋 Menu API: http://localhost:${PORT}/api/menu`);
  console.log(`🔐 Admin Panel: http://localhost:${PORT}/admin`);
});
