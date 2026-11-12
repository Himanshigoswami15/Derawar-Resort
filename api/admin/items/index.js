import { getPool, checkAuth } from '../_db.js';

export default async function handler(req, res) {
  if (!checkAuth(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const pool = getPool();

  if (req.method === 'GET') {
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
  } else if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
