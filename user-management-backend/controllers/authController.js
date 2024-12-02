const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { getUserByEmail, addUser } = require('../models/userModel');
require('dotenv').config();
// -------------------------------------


// Access to variables
const JWT_SECRET = process.env.SECRET_KEY;

// User registration
const signup = async (req, res) => {
  const { name, email, password, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  addUser({ name, email, password: hashedPassword, phone }, (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email already exists' });
      }
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
};

// User login
const login = (req, res) => {
  const { email, password } = req.body;

  getUserByEmail(email, async (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(400).json({ message: 'Invalid email or password' });

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  });
};

module.exports = { signup, login };
