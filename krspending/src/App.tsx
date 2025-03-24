// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import Transactions from './pages/Transactions';
// import AdminPanel from './pages/AdminPanel';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/transactions" element={<Transactions />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;







// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AuthPage from './pages/AuthPage';  // Replaces Login & Signup
// import Dashboard from './pages/Dashboard';
// import Transactions from './pages/Transactions';
// import AdminPanel from './pages/AdminPanel';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Transactions />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/auth" element={<AuthPage />} />  {/* Unified Auth Page */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AuthPage from './pages/AuthPage';
// import Dashboard from './pages/Dashboard';
// import Transactions from './pages/Transactions';
// import AdminPanel from './pages/AdminPanel';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="fixed top-0 left-0 w-64 h-full  z-50">
//         <Sidebar />
// </div>
//       <Routes>
//         <Route path="/" element={<Transactions />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/auth" element={<AuthPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AdminPanel from "./pages/AdminPanel";
import Sidebar from "./components/Sidebar";
import Avatar from "./components/Avatar";

function App() {
  return (
    <BrowserRouter>
      {/* Sidebar with high z-index */}
      <div className="fixed top-0 left-0 w-64 h-full z-50">
        <Sidebar />
      </div>

      {/* Navbar with Avatar */}
      <div className="fixed top-0 right-0 p-4 z-50">
        <Avatar />
      </div>

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
