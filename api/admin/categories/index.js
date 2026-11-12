import { getPool, checkAuth } from '../../_db.js';

export default async function handler(req, res) {
  if (!checkAuth(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const pool = getPool();

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM categories ORDER BY sort_order ASC');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
