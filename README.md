# FinKarch - Expense Tracking App

## Overview
Finkarch is a full-stack expense tracking application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to track their expenses, manage spending limits, and view insightful analytics. Admin users can manage users, view transaction data, and export reports.

## Features
- ✅ **User Authentication** (Signup, Login, JWT-based auth)
- ✅ **Expense Tracking** (CRUD operations for transactions)
- ✅ **Spending Categories & Limits**
- ✅ **Admin Panel** (Manage users, delete accounts, export data)
- ✅ **Data Visualization** (Charts for user spending analysis)
- ✅ **CSV Export** for admin reports
- ✅ **Responsive UI** with a sidebar and responsive

## Tech Stack
- **Frontend**: React (Vite), React Router, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: JWT-based authentication
- **Charts & Graphs**: Recharts (for visualizing spending trends)
- **Deployment**: Hosted on VPS (Hostinger), managed with PM2

## Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/spendanalysis.git
cd spendanalysis
```
Frontend is called --- krspending

### 2️⃣ Install Dependencies
#### Install frontend dependencies:
```bash
cd krspending
npm install
```
#### Install backend dependencies:
```bash
cd backend
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the **server** directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Application
#### Start Backend:
```bash
cd backend
nodemon server.js
```
#### Start Frontend:
```bash
cd krspending
npm run dev
```

The application will be available at **`http://localhost:5173`**.

## API Endpoints
### **Authentication Routes**
- `POST /api/auth/signup` → Register a new user
- `POST /api/auth/login` → User login

### **Transaction Routes**
- `GET /api/transactions` → Get all transactions
- `POST /api/transactions` → Add a new transaction
- `DELETE /api/transactions/:id` → Delete a transaction

### **Admin Routes**
- `GET /api/admin/users` → Fetch all users (Admin only)
- `DELETE /api/admin/users/:id` → Delete a user (Admin only)
- `GET /api/admin/export` → Export data as CSV (Admin only)

## Folder Structure
```
/spendanalysis
│── /client           # Frontend (React)
│   ├── /src
│   │   ├── /components  # Reusable components
│   │   ├── /pages       # Pages (Dashboard, Admin, Transactions, etc.)
│   │   ├── /context     # Auth context
│   │   ├── /api         # API calls
│── /server          # Backend (Node.js, Express)
│   ├── /models      # Mongoose Schemas (User, Transaction)
│   ├── /routes      # API Routes
│   ├── /middleware  # Authentication & Authorization
│── .env            # Environment variables
│── package.json    # Dependencies
│── README.md       # Documentation
```





---
🔗 **Developed by [Thanishmamilla](https://github.com/thanishmamilla)**

