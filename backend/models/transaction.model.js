const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  subcategory: { type: String }, // Optional
  description: { type: String },
  paymentMethod: { type: String, required: true }, // Added Payment Method
  date: { type: Date, default: Date.now }, // Auto Timestamp
});

module.exports = mongoose.model('Transaction', TransactionSchema);
