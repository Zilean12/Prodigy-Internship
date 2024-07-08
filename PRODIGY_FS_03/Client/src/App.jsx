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

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import Navbar from './components/Navbar';
// import Profile from './components/Profile';
// import Home from './components/Home';
// import Footer from './components/Footer/Footer';
// import CategoryPage from './components/CategoryPage/CategoryPage'; // Import CategoryPage
// import SearchResultsPage from './components/Search/SearchResultsPage';
// import ProductDetail from './components/ProductDetail/ProductDetail';
// import Cart from './components/Cart/Cart';


// const App = () => {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);

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

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <Router>
//       <Navbar user={user} setUser={setUser} cart={cart} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/profile" element={<Profile user={user} />} />
//         <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} />} />
//         <Route path="/category/:category" element={<CategoryPage />} /> {/* Add CategoryPage route */}
//         <Route path="/search" element={<SearchResultsPage />} />


//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import Navbar from './components/Navbar';
// import Profile from './components/Profile';
// import Home from './components/Home';
// import Footer from './components/Footer/Footer';
// import CategoryPage from './components/CategoryPage/CategoryPage';
// import SearchResultsPage from './components/Search/SearchResultsPage';
// import ProductDetail from './components/ProductDetail/ProductDetail';
// import Cart from './components/Cart/Cart';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);

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

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <Router>
//       <Navbar user={user} setUser={setUser} cart={cart} />
//       <Routes>
//         <Route path="/" element={<Home addToCart={addToCart} />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/profile" element={<Profile user={user} />} />
//         <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} />} />
//         <Route path="/category/:category" element={<CategoryPage addToCart={addToCart} />} />
//         <Route path="/search" element={<SearchResultsPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import Navbar from './components/Navbar';
// import Profile from './components/Profile';
// import Home from './components/Home';
// import Footer from './components/Footer/Footer';
// import CategoryPage from './components/CategoryPage/CategoryPage';
// import SearchResultsPage from './components/Search/SearchResultsPage';
// import ProductDetail from './components/ProductDetail/ProductDetail';
// import Cart from './components/Cart/Cart';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);

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

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <Router>
//       <Navbar user={user} setUser={setUser} cart={cart} />
//       <Routes>
//         <Route path="/" element={<Home addToCart={addToCart} />} /> {/* Pass addToCart to Home */}
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/profile" element={<Profile user={user} />} />
//         <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} />} />
//         <Route path="/category/:category" element={<CategoryPage addToCart={addToCart} />} />
//         <Route path="/search" element={<SearchResultsPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import Navbar from './components/Navbar';
// import Profile from './components/Profile';
// import Home from './components/Home';
// import Footer from './components/Footer/Footer';
// import CategoryPage from './components/CategoryPage/CategoryPage';
// import SearchResultsPage from './components/Search/SearchResultsPage';
// import ProductDetail from './components/ProductDetail/ProductDetail';
// import Cart from './components/Cart/Cart';
// import SupportTicket from './components/SupportTicket/SupportTicket';
// import CheckTicketStatus from './components/SupportTicket/CheckTicketStatus';
// import AdminDashboard from './Admin/Dashboard/AdminDashboard';
// import EditProduct from './Admin/Product/EditProduct';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);

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

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <Router>
//       <Navbar user={user} setUser={setUser} cart={cart} />
//       <Routes>

// {/* Clide Side */}

//         <Route path="/" element={<Home addToCart={addToCart} />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/profile" element={<Profile user={user} />} />
//         <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} />} />
//         <Route path="/category/:category" element={<CategoryPage addToCart={addToCart} />} />
//         <Route path="/search" element={<SearchResultsPage addToCart={addToCart} />} />
//         <Route path="/support" element={<SupportTicket />} />
//         <Route path="/check-ticket-status" element={<CheckTicketStatus />} />

// {/* ADMIN SIDE */}

//         {/* <Route path="/admin-dashboard/*" element={<AdminDashboard />} /> */}
//         <Route path="/admin-dashboard/*" element={<AdminDashboard user={user} />} />
//         <Route path="/admin-dashboard/edit-product/:id" element={<EditProduct />} />

//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import Navbar from './components/Navbar';
// import Profile from './components/Profile';
// import Home from './components/Home';
// import Footer from './components/Footer/Footer';
// import CategoryPage from './components/CategoryPage/CategoryPage';
// import SearchResultsPage from './components/Search/SearchResultsPage';
// import ProductDetail from './components/ProductDetail/ProductDetail';
// import Cart from './components/Cart/Cart';
// import SupportTicket from './components/SupportTicket/SupportTicket';
// import CheckTicketStatus from './components/SupportTicket/CheckTicketStatus';
// import AdminDashboard from './Admin/Dashboard/AdminDashboard';
// import EditProduct from './Admin/Product/EditProduct';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);

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

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <Router>
//       <Navbar user={user} setUser={setUser} cart={cart} />
//       <Routes>

//         {/* Client Side */}
//         <Route path="/" element={<Home addToCart={addToCart} />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/profile" element={<Profile user={user} />} />
//         <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} />} />
//         <Route path="/category/:category" element={<CategoryPage addToCart={addToCart} />} />
//         <Route path="/search" element={<SearchResultsPage addToCart={addToCart} />} />
//         <Route path="/support" element={<SupportTicket />} />
//         <Route path="/check-ticket-status" element={<CheckTicketStatus />} />

//         {/* Admin Side */}
//         <Route path="/admin-dashboard/*" element={<AdminDashboard user={user} />} />
//         <Route path="/admin-dashboard/edit-product/:id" element={<EditProduct />} />

//       </Routes>
//       {user?.role !== 'admin' && <Footer />}
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import CategoryPage from './components/CategoryPage/CategoryPage';
import SearchResultsPage from './components/Search/SearchResultsPage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import SupportTicket from './components/SupportTicket/SupportTicket';
import CheckTicketStatus from './components/SupportTicket/CheckTicketStatus';
import AdminDashboard from './Admin/Dashboard/AdminDashboard';
import EditProduct from './Admin/Product/EditProduct';
import OrderHistory from './components/Order/OrderHistory';


const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

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

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Navbar user={user} setUser={setUser} cart={cart} />
      <Routes>
        {/* Client Side */}
        <Route path="/" element={user ? <Home addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {user && <Route path="/profile" element={<Profile user={user} />} />}
        <Route path="/products/:id" element={user ? <ProductDetail addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart cart={cart} /> : <Navigate to="/login" />} />
        <Route path="/category/:category" element={user ? <CategoryPage addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/search" element={user ? <SearchResultsPage addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/support" element={user ? <SupportTicket /> : <Navigate to="/login" />} />
        <Route path="/check-ticket-status" element={user ? <CheckTicketStatus /> : <Navigate to="/login" />} />
        <Route path="/order-history" element={<OrderHistory />} />

        {/* Admin Side */}
        {user?.role === 'admin' && (
          <>
            <Route path="/admin-dashboard/*" element={<AdminDashboard user={user} />} />
            <Route path="/admin-dashboard/edit-product/:id" element={<EditProduct />} />
          </>
        )}
      </Routes>
      {user?.role !== 'admin' && <Footer />}
    </Router>
  );
};

export default App;
