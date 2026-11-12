const { getPool } = require('./_db');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const pool = getPool();
    const categories = await pool.query('SELECT * FROM categories ORDER BY sort_order ASC');
    const items = await pool.query('SELECT * FROM menu_items WHERE is_active = true ORDER BY sort_order ASC');

    const menuData = categories.rows.map(cat => ({
      category: cat.name,
      items: items.rows
        .filter(item => item.category_id === cat.id)
        .map(item => ({
          id: item.id,
          name: item.name,
          price: `₹${item.price}`,
          description: item.description,
          image: item.image,
        })),
    }));

    res.json(menuData);
  } catch (err) {
    console.error('Error fetching menu:', err);
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
};
