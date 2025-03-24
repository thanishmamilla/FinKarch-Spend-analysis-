import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/dashboard" className="mr-4 hover:underline">Dashboard</Link>
        <Link to="/" className="mr-4 hover:underline">Transactions</Link>
        <Link to="/admin" className="mr-4 hover:underline">Admin</Link>
      </div>
      <div>
        {!isLoggedIn ? (
          <Link to="/auth" className="hover:underline">Login / Sign Up</Link>
        ) : (
          <button onClick={handleLogout} className="hover:underline">Logout</button>
        )}
      </div>
    </nav>
  );
}
