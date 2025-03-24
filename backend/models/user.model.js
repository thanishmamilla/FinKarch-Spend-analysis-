const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  spendingLimits: {
    type: Map,
    of: Number, // category: limitAmount
    default: {}
  },
  salary:{
    type: Number,
    default: 0
  },
});

// Use existing model if available, otherwise create a new one
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
