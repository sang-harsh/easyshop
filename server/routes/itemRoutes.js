const express = require('express');
const fs = require('fs');
const path = require('path');
const config = require('../config');
const mongoose = require('mongoose');
const ItemModel = require('../models/Item');

const router = express.Router();


if (!config.useJSON) {
  // Connect to MongoDB if using Mongoose
  mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
}

// Helper functions for JSON file operations
const jsonFilePath = path.resolve(__dirname, '..', config.jsonFilePath);
const readJSON = () => JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
const writeJSON = (data) => fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

// CREATE
router.post('/items', async (req, res) => {
  try {
    if (config.useJSON) {
      const items = readJSON();
      const newItem = { id: Date.now().toString(), ...req.body };
      items.push(newItem);
      writeJSON(items);
      return res.status(201).json(newItem);
    } else {
      const newItem = new ItemModel(req.body);
      const savedItem = await newItem.save();
      return res.status(201).json(savedItem);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ALL
router.get('/items', async (req, res) => {
  try {
    if (config.useJSON) {
      const items = readJSON();
      return res.status(200).json(items);
    } else {
      const items = await ItemModel.find();
      return res.status(200).json(items);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE
router.get('/items/:id', async (req, res) => {
  try {
    if (config.useJSON) {
      const items = readJSON();
      const item = items.find((item) => item.id === req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });
      return res.status(200).json(item);
    } else {
      const item = await ItemModel.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item not found' });
      return res.status(200).json(item);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/items/:id', async (req, res) => {
  try {
    if (config.useJSON) {
      const items = readJSON();
      const index = items.findIndex((item) => item.id === req.params.id);
      if (index === -1) return res.status(404).json({ message: 'Item not found' });
      items[index] = { ...items[index], ...req.body };
      writeJSON(items);
      return res.status(200).json(items[index]);
    } else {
      const updatedItem = await ItemModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
      return res.status(200).json(updatedItem);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/items/:id', async (req, res) => {
  try {
    if (config.useJSON) {
      const items = readJSON();
      const filteredItems = items.filter((item) => item.id !== req.params.id);
      if (filteredItems.length === items.length) return res.status(404).json({ message: 'Item not found' });
      writeJSON(filteredItems);
      return res.status(200).json({ message: 'Item deleted' });
    } else {
      const deletedItem = await ItemModel.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
      return res.status(200).json({ message: 'Item deleted', item: deletedItem });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
