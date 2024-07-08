// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://prodigy-internship-fs03.onrender.com/api/auth/login', formData);
//       navigate('/');
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <div className="flex justify-between items-center mt-4">
//           <Link to="/forgot-password" className="text-blue-500 hover:underline">
//             Forgot Password?
//           </Link>
//           <p className="text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-blue-500 hover:underline">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = ({ setUser }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://prodigy-internship-fs03.onrender.com/api/auth/login', formData);
//       const { token } = response.data;
//       const userResponse = await axios.get('https://prodigy-internship-fs03.onrender.com/api/auth/me', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const user = userResponse.data;
//       localStorage.setItem('user', JSON.stringify(user));
//       setUser(user);
//       navigate('/');
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <div className="flex justify-between items-center mt-4">
//           <Link to="/forgot-password" className="text-blue-500 hover:underline">
//             Forgot Password?
//           </Link>
//           <p className="text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-blue-500 hover:underline">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = ({ setUser }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://prodigy-internship-fs03.onrender.com/api/auth/login', formData);
//       const { token } = response.data;

//       // Save token in localStorage
//       localStorage.setItem('token', token);

//       const userResponse = await axios.get('https://prodigy-internship-fs03.onrender.com/api/auth/me', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const user = userResponse.data;

//       // Save user information in localStorage
//       localStorage.setItem('user', JSON.stringify(user));

//       setUser(user);
//       navigate('/');
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <div className="flex justify-between items-center mt-4">
//           <Link to="/forgot-password" className="text-blue-500 hover:underline">
//             Forgot Password?
//           </Link>
//           <p className="text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-blue-500 hover:underline">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://prodigy-internship-fs03.onrender.com/api/auth/login', formData);
      const { token } = response.data;

      // Save token in localStorage
      localStorage.setItem('token', token);

      const userResponse = await axios.get('https://prodigy-internship-fs03.onrender.com/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = userResponse.data;

      // Save user information in localStorage
      localStorage.setItem('user', JSON.stringify(user));

      setUser(user);

      // Redirect based on user role
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
