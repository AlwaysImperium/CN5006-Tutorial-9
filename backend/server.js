
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb://127.0.0.1:27017/CN5006_Tutorial9';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('CN5006 Tutorial 9 Employee API is running');
});

app.get('/api/employees/count', async (req, res) => {
  try {
    const count = await Employee.countDocuments();

    res.status(200).json({
      success: true,
      totalEmployees: count
    });
  } catch (error) {
    console.error('Error counting employees:', error);

    res.status(500).json({
      success: false,
      message: 'Unable to retrieve employee count'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
