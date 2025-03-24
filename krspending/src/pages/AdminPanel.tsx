// // // import { useEffect, useState } from 'react';
// // // import API from '../../api';

// // // export default function AdminPanel() {
// // //   const [users, setUsers] = useState([]);

// // //   useEffect(() => {
// // //     API.get('/admin/users').then(res => setUsers(res.data));
// // //   }, []);

// // //   return (
// // //     <div className="p-4">
// // //       <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
// // //       <ul>
// // //         {users.map((u: any) => (
// // //           <li key={u._id} className="border-b py-2">{u.username} - Role: {u.role}</li>
// // //         ))}
// // //       </ul>
// // //       <a href="http://localhost:5000/api/admin/export" className="bg-blue-500 text-white px-3 py-2 rounded mt-4 inline-block">Export CSV</a>
// // //     </div>
// // //   );
// // // }



// // import { useEffect, useState } from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import { useNavigate } from 'react-router-dom';
// // import API from '../../api';

// // export default function AdminPanel() {
// //   const [users, setUsers] = useState([]);
// //   const { user } = useAuth();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (user?.role !== 'admin') {
// //       console.log(user)
// //       alert('Only admins are allowed on this page!');
// //       navigate('/'); // Redirect to home if not an admin
// //       return;
// //     }

// //     API.get('/admin/users')
// //       .then(res => setUsers(res.data))
// //       .catch(err => console.error('Error fetching users:', err));
// //   }, [user, navigate]);

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
// //       <ul>
// //         {users.map((u) => (
// //           <li key={u._id} className="border-b py-2">{u.username} - Role: {u.role}</li>
// //         ))}
// //       </ul>
// //       <a href="http://localhost:5000/api/admin/export" className="bg-blue-500 text-white px-3 py-2 rounded mt-4 inline-block">
// //         Export CSV
// //       </a>
// //     </div>
// //   );
// // }



// // import { useEffect, useState } from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import { useNavigate } from 'react-router-dom';
// // import API from '../../api';

// // export default function AdminPanel() {
// //   const [users, setUsers] = useState([]);
// //   const { user } = useAuth();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!user) return; // Ensure user is loaded before checking role

// //     if (user?.role !== 'admin') {
// //       alert('Only admins are allowed on this page!');
// //       navigate('/');
// //       return;
// //     }

// //     API.get('/admin/users')
// //       .then(res => setUsers(res.data))
// //       .catch(err => console.error('Error fetching users:', err));
// //   }, [user, navigate]);

// //   if (!user) return <p>Loading...</p>; // Avoids undefined user issue

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
// //       <ul>
// //         {users.map((u) => (
// //           <li key={u._id} className="border-b py-2">{u.username} - Role: {u.role}</li>
// //         ))}
// //       </ul>
// //       <a href="http://localhost:5000/api/admin/export" className="bg-blue-500 text-white px-3 py-2 rounded mt-4 inline-block">
// //         Export CSV
// //       </a>
// //     </div>
// //   );
// // }



// // import { useEffect, useState } from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import { useNavigate } from 'react-router-dom';
// // import API from '../../api';

// // export default function AdminPanel() {
// //   const [users, setUsers] = useState([]);
// //   const { user } = useAuth();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!user) return; // Ensure user is loaded before checking role

// //     if (user?.role !== 'admin') {
// //       alert('Only admins are allowed on this page!');
// //       navigate('/');
// //       return;
// //     }

// //     API.get('/admin/users')
// //       .then(res => setUsers(res.data))
// //       .catch(err => console.error('Error fetching users:', err));
// //   }, [user, navigate]);

// //   if (!user) return <p className="text-gray-600">Loading...</p>; // Avoids undefined user issue

// //   return (
// //     <div className="p-6 bg-gray-100 rounded-lg shadow-md">
// //       <br/>
// //       <br/>
// //       <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Panel</h1>

// //       <div className="bg-white p-4 rounded shadow">
// //         <h2 className="text-lg font-semibold text-gray-700 mb-2">User List</h2>
// //         <ul className="divide-y divide-gray-300">
// //           {users.map((u) => (
// //             <li key={u._id} className="py-3 text-gray-700">
// //               <span className="font-medium">{u.username}</span> - Role: {u.role}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <a
// //         href="http://localhost:5000/api/admin/export"
// //         className="mt-4 inline-block bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
// //       >
// //         Export CSV
// //       </a>
// //     </div>
// //   );
// // }



// import { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import API from '../../api';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// export default function AdminPanel() {
//   const [users, setUsers] = useState([]);
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) return;

//     if (user?.role !== 'admin') {
//       alert('Only admins are allowed on this page!');
//       navigate('/');
//       return;
//     }

//     fetchUsers();
//   }, [user, navigate]);

//   const fetchUsers = async () => {
//     try {
//       const res = await API.get('/admin/users');
//       setUsers(res.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     if (!window.confirm('Are you sure you want to delete this user?')) return;

//     try {
//       await API.delete(`/admin/users/${userId}`);
//       setUsers(users.filter((u) => u._id !== userId));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       alert('Failed to delete user');
//     }
//   };

//   const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#ff6384', '#36a2eb'];

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <br/>
//       <br/>
//       <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Panel</h1>

//       {/* User List */}
//       <div className="bg-gray-100 p-4 rounded shadow mb-6">
//         <h2 className="text-lg font-semibold text-gray-700 mb-2">User List</h2>
//         <ul className="divide-y divide-gray-300">
//           {users.map((u) => (
//             <li key={u._id} className="py-3 flex justify-between items-center text-gray-700">
//               <span>
//                 <strong>{u.username}</strong> - Role: {u.role} - Spending: ${u.spending || 0}
//               </span>
//               <button
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//                 onClick={() => handleDeleteUser(u._id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Bar Chart for User Spending */}
//       <div className="bg-gray-100 p-4 rounded shadow mb-6">
//         <h2 className="text-lg font-semibold text-gray-700 mb-2">User Spending Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={users}>
//             <XAxis dataKey="username" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="spending" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Pie Chart for Spending Distribution */}
//       <div className="bg-gray-100 p-4 rounded shadow">
//         <h2 className="text-lg font-semibold text-gray-700 mb-2">Spending Distribution</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={users}
//               dataKey="spending"
//               nameKey="username"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               fill="#8884d8"
//               label
//             >
//               {users.map((_, index) => (
//                 <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       <a
//         href="http://localhost:5000/api/admin/export"
//         className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//       >
//         Export CSV
//       </a>
//     </div>
//   );
// }



import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {UserX, X} from 'lucide-react'
import API from '../../api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    if (user?.role !== 'admin') {
      alert('Only admins are allowed on this page!');
      navigate('/');
      return;
    }

    fetchUsers();
  }, [user, navigate]);

  const fetchUsers = async () => {
    try {
      const res = await API.get('/admin/users');
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      await API.delete(`/admin/users/${userId}`);
      setUsers(users.filter((u) => u._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <br/>
      <br/>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Panel</h1>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">User List</h2>
        <ul className="divide-y divide-gray-300">
          {users.map((u) => (
            <li key={u._id} className="py-3 flex justify-between items-center text-gray-700">
              <span>
                <strong>{u.username}</strong> - Role: {u.role} - Spending: ${u.spending || 0}
              </span>
              <button
                className="bg-500  px-3 py-1 rounded hover:bg-600 transition"
                onClick={() => handleDeleteUser(u._id)}
              >
                <UserX sixe={20}/>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mt-6">User Spending Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={users}>
          <XAxis dataKey="username" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="spending" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>

      <a
        href="http://localhost:5000/api/admin/export"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Export CSV
      </a>
    </div>
  );
}
