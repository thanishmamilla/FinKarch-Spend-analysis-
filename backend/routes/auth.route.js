const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {auth,adminOnly} = require('../middleware/authmiddleware');


router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed });
  await user.save();
  res.status(201).send('User created');
});
router.get('/salary', auth, async (req, res) => {
  try {
      const user = await User.findById(req.user.id);
      res.json({ salary: user.salary || 0 });
  } catch (error) {
      res.status(500).send('Error fetching salary');
  }
});
router.delete('/users/:id', auth, adminOnly, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});
router.get('/users', auth, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude passwords
    res.json(users.map(user => ({
      _id: user._id,
      username: user.username,
      role: user.role,
      spending: user.spending || 0
    })));
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});


router.put('/salary', auth, async (req, res) => {
  const { salary } = req.body;
  if (!salary) return res.status(400).send('Salary is required');
  
  try {
      const user = await User.findById(req.user.id);
      user.salary = salary;
      await user.save();
      res.send({ message: 'Salary updated successfully', salary: user.salary });
  } catch (error) {
      res.status(500).send('Error updating salary');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.status(400).send('User not found');
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

  res.json({
    token,
    user: { id: user._id, username: user.username, role: user.role }
  });
});
// Update spending limits
router.put('/limits', auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    user.spendingLimits = req.body; // { Food: 500, Travel: 300 }
    await user.save();
    res.send('Limits updated');
  });
  

  router.get('/users', auth, adminOnly, async (req, res) => {
    try {
      const users = await User.find().select('-password'); // Exclude passwords
      res.json(users);
    } catch (error) {
      res.status(500).send('Error fetching users');
    }
  });

module.exports = router;
