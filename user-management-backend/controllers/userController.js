const {
  getAllUsers,
  addNewUser,
  updateUserById,
  deleteUserById,
  getUserById,
} = require("../models/userModel");
const bcrypt = require("bcryptjs");

// POST: Add User
const addUser = async (req, res) => {
  const { name, email, password, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  addNewUser({ name, email, hashedPassword, phone }, (err) => {
    if (err) {
      console.error(err);
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Email already exists" });
      }

      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
};

// GET: Get users
const getUsers = (req, res) => {
  getAllUsers((err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
};

// GET: Get User by id
const getUser = (req, res) => {
  const userId = req.params.id;
  getUserById(userId,(err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results[0]);
  });
};

// PUT: Update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email, password, phone } = req.body;

  updateUserById(userId, { name, email, password, phone }, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error updating user", error: err });
    }
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
};

// DELETE: Delete user
const deleteUser = (req, res) => {
  const userId = req.params.id;

  deleteUserById(userId, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting user", error: err });
    }
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
};

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
