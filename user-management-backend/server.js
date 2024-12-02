const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
// app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
