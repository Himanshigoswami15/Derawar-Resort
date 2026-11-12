import pg from 'pg';
const { Pool } = pg;

let pool;
export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });
  }
  return pool;
}

export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'derawar2024';

export function checkAuth(req) {
  const authHeader = req.headers.authorization;
  return authHeader === `Bearer ${ADMIN_PASSWORD}`;
}

