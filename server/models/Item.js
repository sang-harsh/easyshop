const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  description: { type: String }
});

module.exports = mongoose.model('Item', itemSchema);
