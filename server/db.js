require("dotenv").config();
const { Pool } = require("pg");


const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: { rejectUnauthorized: false },         // Neon only accepts encrypted (SSL) connections
});


async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'student',
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS materials (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      subject TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'notes',
      url TEXT NOT NULL,
      uploaded_by INTEGER,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS jobs (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      company TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'fulltime',
      description TEXT,
      location TEXT,
      salary TEXT,
      url TEXT,
      tags TEXT,
      posted_by INTEGER,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  console.log("Database ready — users, materials, and jobs tables are set up.");
}

pool.initDb = initDb; // the server calls this on startup (see index.js)

module.exports = pool;