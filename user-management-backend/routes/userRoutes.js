const express = require('express');
const { addUser, getUsers,getUser, updateUser, deleteUser } = require('../controllers/userController');
// const authenticateToken = require('../middleware/authMiddleware');


const router = express.Router();

// router.get('/', authenticateToken, getUsers);

// Route for Get All users
router.get('/', getUsers);

// Route for Get All users
router.get('/getUser/:id', getUser);

// Route for Add New User
router.post('/add-user', addUser);

// Route for updating a user
router.put('/:id', updateUser);

// Route for deleting a user
router.delete('/:id', deleteUser);

module.exports = router;
