import { getPool, checkAuth } from '../../_db.js';

export default async function handler(req, res) {
  if (!checkAuth(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const pool = getPool();
  const { id } = req.query;

  if (req.method === 'PUT') {
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
        [name, price, description, image, is_active, category_id, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await pool.query('DELETE FROM menu_items WHERE id = $1', [id]);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
