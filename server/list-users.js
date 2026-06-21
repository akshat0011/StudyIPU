require("dotenv").config();
const db = require("./db");

// One-off helper: prints every user (no passwords). Run: node list-users.js
(async () => {
  const result = await db.query(
    "SELECT id, name, email, role, created_at FROM users ORDER BY id"
  );
  console.table(result.rows);
  await db.end(); // close the pool so the script exits
})();
