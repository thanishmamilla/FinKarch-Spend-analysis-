const router = require('express').Router();
const { auth, adminOnly } = require('../middleware/authmiddleware');
const User = require('../models/user.model');
const Transaction = require('../models/transaction.model');
const exportToCSV = require('../utils/csvExports');

// Get all users
router.get('/users', auth, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Fetch users without password

    // Calculate spending for each user
    const usersWithSpending = await Promise.all(users.map(async (user) => {
      const totalSpending = await Transaction.aggregate([
        { $match: { userId: user._id } }, // Find transactions for user
        { $group: { _id: null, total: { $sum: '$amount' } } } // Sum up transactions
      ]);

      return {
        _id: user._id,
        username: user.username,
        role: user.role,
        spending: totalSpending.length ? totalSpending[0].total : 0, // Default to 0 if no transactions
      };
    }));

    res.json(usersWithSpending);
  } catch (error) {
    res.status(500).send('Error fetching users and spending');
  }
});

// Delete user
router.delete('/users/:id', auth, adminOnly, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  await Transaction.deleteMany({ userId: req.params.id });
  res.send('User deleted');
});

// Export all transactions as CSV
router.get('/export', auth, adminOnly, async (req, res) => {
  const transactions = await Transaction.find();
  const csv = exportToCSV(transactions);
  res.header('Content-Type', 'text/csv');
  res.attachment('transactions.csv');
  res.send(csv);
});

module.exports = router;
