const mysql = require("mysql2");

// Database connection settings
const db = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "example-password",
  database: "UserManagementSystemDB",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection errpr", err);
    return;
  }
  console.log("Connected to MySQL Database");
});


module.exports = db;