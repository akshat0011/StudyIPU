require("dotenv").config();
const db = require("./db");

const email = process.argv[2]; // the email you type after the filename
if (!email) {
  console.log("Usage: node make-admin.js <email>");
  process.exit(1);
}

(async () => {
  const result = await db.query(
    "UPDATE users SET role = 'admin' WHERE email = $1",
    [email]
  );
  if (result.rowCount === 0) {
    console.log(`No user found with email: ${email}`);
  } else {
    console.log(`${email} is now an admin. Log out and back in to refresh your access.`);
  }
  await db.end(); // close the pool so the script actually exits
})();