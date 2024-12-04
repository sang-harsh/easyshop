const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config'); // Import the config file
const path = require('path');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 5000;
const itemRoutes = require('./routes/itemRoutes');

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Conditional MongoDB Connection
if (!config.useJSON) {
  const mongoose = require('mongoose');
  mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.log('Using JSON file as the database');
}
// Might need to serve frontend static files
//app.use(express.static(path.join(__dirname, '../easyshop/dist')));

// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Use API Routes
app.use('/api', itemRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
