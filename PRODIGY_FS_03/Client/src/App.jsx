// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import ForgotPassword from './components/ForgotPassword';
// // import ResetPassword from './components/ResetPassword';
// // import HomePage from './components/Homepage';

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //       <Route exact path="/" element={<HomePage/>} />

// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //         {/* <Route path="/reset-password/:token" component={ResetPassword} /> */}
// //         <Route path="/reset-password/:token" element={<ResetPassword />} />


// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import ForgotPassword from './components/ForgotPassword';
// // import ResetPassword from './components/ResetPassword';
// // import Navbar from './components/Navbar';

// // const App = () => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem('user');
// //     if (storedUser) {
// //       try {
// //         setUser(JSON.parse(storedUser));
// //       } catch (error) {
// //         console.error('Error parsing user from localStorage:', error);
// //       }
// //     }
// //   }, []);

// //   return (
// //     <Router>
// //       <Navbar user={user} setUser={setUser} />
// //       <Routes>
// //         <Route path="/login" element={<Login setUser={setUser} />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //         <Route path="/reset-password/:token" element={<ResetPassword />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import Navbar from './components/Navbar';
// import Profile from './components/Profile';
// import Home from './components/Home';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error('Error parsing user from localStorage:', error);
//       }
//     }
//   }, []);

//   return (
//     <Router>
//       <Navbar user={user} setUser={setUser} />
//       <Routes>
//       <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/profile" element={<Profile user={user} />} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
      }
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
