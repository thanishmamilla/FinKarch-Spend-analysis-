const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth.route');
const transRoutes = require('./routes/transaction.route');
const adminRoutes = require('./routes/admin.route');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/transactions', transRoutes);




app.get('/', (req, res) => res.send('API is running'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Backend running on port 5000')))
  .catch(err => console.log(err));