// const express = require('express');
// const router = express.Router();
// const Transaction = require('../models/transaction.model');
// const jwt = require('jsonwebtoken');

// // Middleware to protect routes
// const auth = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) return res.sendStatus(401);
//   try {
//     const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.sendStatus(403);
//   }
// };

// // Add this to your existing routes
// router.delete('/:id', auth, async (req, res) => {
//   const { id } = req.params;
//   try {
//     const transaction = await Transaction.findOneAndDelete({ _id: id, userId: req.user.id });
//     if (!transaction) return res.sendStatus(404); // Not found
//     res.sendStatus(204); // Successfully deleted, no content
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500); // Internal Server Error
//   }
// });


// // Add Transaction
// router.post('/', auth, async (req, res) => {
//   const transaction = new Transaction({ ...req.body, userId: req.user.id });
//   await transaction.save();
//   res.status(201).json(transaction);
// });

// // Get Transactions
// router.get('/', auth, async (req, res) => {
//   const transactions = await Transaction.find({ userId: req.user.id });
//   res.json(transactions);
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction.model');
const jwt = require('jsonwebtoken');

// Middleware to protect routes
const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.sendStatus(403);
  }
};

// Add Transaction
router.post('/', auth, async (req, res) => {
  try {
    const transaction = new Transaction({
      userId: req.user.id,
      amount: req.body.amount,
      category: req.body.category,
      subcategory: req.body.subcategory || null,
      description: req.body.description,
      paymentMethod: req.body.paymentMethod,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Get Transactions
router.get('/', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id })
      .select('amount category subcategory description paymentMethod date');

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Delete Transaction
router.delete('/:id', auth, async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!transaction) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
