import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import { pa, FaTimes } from 'react-icons/fa';
import { PanelRightClose,PanelRightOpen } from 'lucide-react';

export default function Sidebar() {
  const { isLoggedIn, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="p-4 fixed z-50">
        {isOpen ? <PanelRightOpen size={35}/>: <PanelRightClose size={35}/>}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-300  w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <br/> 
        <br/>  
        <div className="p-4 text-lg font-bold">My App</div>
        <ul className="p-4 space-y-4">
          <li><Link to="/dashboard" className="block hover:underline">Dashboard</Link></li>
          <li><Link to="/" className="block hover:underline">Transactions</Link></li>
          <li><Link to="/admin" className="block hover:underline">Admin</Link></li>
        </ul>
        <div className="p-4">
          {!isLoggedIn ? (
            <Link to="/auth" className="block hover:underline">Login / Sign Up</Link>
          ) : (
            <button onClick={logout} className="hover:underline">Logout</button>
          )}
        </div>
      </div>
    </div>
  );
}
