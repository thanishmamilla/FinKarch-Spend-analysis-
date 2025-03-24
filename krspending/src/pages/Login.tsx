// import { useState } from 'react';
// import API from '../../api';
// import { setToken } from '../../auth';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await API.post('/auth/login', { username, password });
//       setToken(res.data.token);
//       navigate('/');
//     } catch {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <input className="border w-full p-2 mb-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
//       <input className="border w-full p-2 mb-4" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//       <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
//     </div>
//   );
// }


import { useState } from 'react';
import API from '../../api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', { username, password });
      login(res.data.token);
      navigate('/');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input className="border w-full p-2 mb-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input className="border w-full p-2 mb-4" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
    </div>
  );
}
