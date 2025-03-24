// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../../api';
// import { useAuth } from '../context/AuthContext';

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleAuth = async () => {
//     try {
//       const endpoint = isLogin ? '/auth/login' : '/auth/signup';
//       const res = await API.post(endpoint, { username, password });

//       login(res.data.token, res.data.user);
//       navigate('/');
//     } catch {
//       alert(isLogin ? 'Login failed' : 'Signup failed');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>

//       <input
//         className="border w-full p-2 mb-2 rounded"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         className="border w-full p-2 mb-4 rounded"
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button
//         className={`w-full py-2 text-white rounded ${
//           isLogin ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
//         } transition duration-300`}
//         onClick={handleAuth}
//       >
//         {isLogin ? 'Login' : 'Sign Up'}
//       </button>

//       <p className="text-center mt-4 text-gray-600">
//         {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//         <button className="text-blue-500 underline" onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? 'Sign Up' : 'Login'}
//         </button>
//       </p>
//     </div>
//   );
// }


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/signup';
      const res = await API.post(endpoint, { username, password });

      login(res.data.token, res.data.user);
      navigate('/');
    } catch {
      alert(isLogin ? 'Login failed' : 'Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-md w-full bg-white p-8 shadow-xl rounded-lg transform transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          {isLogin ? 'Welcome Back!' : 'Join Us'}
        </h2>

        <div className="flex flex-col space-y-4">
          <input
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className={`w-full py-3 rounded-lg text-white font-semibold tracking-wide shadow-md transition duration-300 ${
              isLogin ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
            }`}
            onClick={handleAuth}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="text-blue-500 font-medium underline transition hover:text-blue-700"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
