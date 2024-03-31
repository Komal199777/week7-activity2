const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  targetDate: { type: Date, required: true },
  achieved: { type: Boolean },
});

module.exports = mongoose.model('Message', messageSchema);