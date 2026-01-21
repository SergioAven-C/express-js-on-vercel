import pkg from 'pg';
const { Pool } = pkg;

import 'dotenv/config'; 

export const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false }
});