const db = require("../config/db");

// Get all users
const getAllUsers = (callback) => {
  const sql = "SELECT * FROM users";
  db.query(sql, callback);
};

// Add new user
const addNewUser = (user, callback) => {
  const sql =
    "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)";
  db.query(sql, [user.name, user.email, user.hashedPassword, user.phone], callback);
};

// Search user based on email
const getUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], callback);
};

// Search user based on id
const getUserById = (id, callback) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [id], callback);
};

// Update user by ID
const updateUserById = (id, user, callback) => {
  const sql =
    "UPDATE users SET name = ?, email = ?, password = ?, phone = ? WHERE id = ?";
  db.query(sql, [user.name, user.email, user.password, user.phone, id], callback);
};

// Delete user by ID
const deleteUserById = (id, callback) => {
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], callback);
};

module.exports = {
  getAllUsers,
  addNewUser,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  getUserById
};
