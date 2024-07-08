// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { Menu } from '@headlessui/react';

// // const Navbar = ({ user, onLogout }) => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     onLogout();
// //     navigate('/login');
// //   };

// //   return (
// //     <nav className="bg-gray-800 p-4">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <Link to="/" className="text-white text-lg font-bold">
// //           ZUShop
// //         </Link>
// //         <div className="flex items-center">
// //           {user ? (
// //             <Menu as="div" className="relative inline-block text-left">
// //               <div>
// //                 <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
// //                   {user.username}
// //                 </Menu.Button>
// //               </div>
// //               <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
// //                 <div className="py-1">
// //                   <Menu.Item>
// //                     {({ active }) => (
// //                       <Link
// //                         to="/profile"
// //                         className={`${
// //                           active ? 'bg-gray-100' : ''
// //                         } block px-4 py-2 text-sm text-gray-700`}
// //                       >
// //                         Profile
// //                       </Link>
// //                     )}
// //                   </Menu.Item>
// //                   <Menu.Item>
// //                     {({ active }) => (
// //                       <button
// //                         onClick={handleLogout}
// //                         className={`${
// //                           active ? 'bg-gray-100' : ''
// //                         } block w-full text-left px-4 py-2 text-sm text-gray-700`}
// //                       >
// //                         Logout
// //                       </button>
// //                     )}
// //                   </Menu.Item>
// //                 </div>
// //               </Menu.Items>
// //             </Menu>
// //           ) : (
// //             <>
// //               <Link
// //                 to="/login"
// //                 className="text-white px-3 py-2 rounded-md text-sm font-medium"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/register"
// //                 className="text-white px-3 py-2 rounded-md text-sm font-medium"
// //               >
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = ({ user, setUser }) => {
// //   const navigate = useNavigate();
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/login');
// //   };

// //   const handleMouseEnter = () => {
// //     setIsDropdownOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsDropdownOpen(false);
// //   };

// //   return (
// //     <nav className="bg-gray-800 p-4 text-white">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-xl font-bold">
// //           <Link to="/">ZUShop</Link>
// //         </div>
// //         <div>
// //           {user ? (
// //             <div
// //               className="relative"
// //               onMouseEnter={handleMouseEnter}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               <button className="bg-gray-700 px-4 py-2 rounded">
// //                 {user.username}
// //               </button>
// //               {isDropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                   <Link
// //                     to="/profile"
// //                     className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
// //                   >
// //                     User Profile
// //                   </Link>
// //                   <button
// //                     onClick={handleLogout}
// //                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <>
// //               <Link to="/login" className="px-4 py-2">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="px-4 py-2">
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// // // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = ({ user, setUser }) => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/login');
// //   };

// //   return (
// //     <nav className="bg-gray-800 p-4 text-white">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-xl font-bold">
// //           <Link to="/">ZUShop</Link>
// //         </div>
// //         <div>
// //           {user ? (
// //             <div className="relative">
// //               <button className="bg-gray-700 px-4 py-2 rounded">
// //                 {user.username}
// //               </button>
// //               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                 <Link
// //                   to="/profile"
// //                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
// //                 >
// //                   User Profile
// //                 </Link>
// //                 <button
// //                   onClick={handleLogout}
// //                   className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
// //                 >
// //                   Logout
// //                 </button>
// //               </div>
// //             </div>
// //           ) : (
// //             <>
// //               <Link to="/login" className="px-4 py-2">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="px-4 py-2">
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = ({ user, setUser }) => {
// //   const navigate = useNavigate();
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/login');
// //   };

// //   const handleMouseEnter = () => {
// //     setIsDropdownOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsDropdownOpen(false);
// //   };

// //   const handleCategoryMouseEnter = () => {
// //     setIsCategoryOpen(true);
// //   };

// //   const handleCategoryMouseLeave = () => {
// //     setIsCategoryOpen(false);
// //   };

// //   return (
// //     <nav className="bg-gray-800 p-4 text-white">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-xl font-bold">
// //           <Link to="/">ZUShop</Link>
// //         </div>
// //         <div className="flex items-center">
// //           <div
// //             className="relative"
// //             onMouseEnter={handleCategoryMouseEnter}
// //             onMouseLeave={handleCategoryMouseLeave}
// //           >
// //             <button className="bg-gray-700 px-4 py-2 rounded">
// //               Categories
// //             </button>
// //             {isCategoryOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                 <Link to="/category/shoes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Shoes
// //                 </Link>
// //                 <Link to="/category/bags" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Bags
// //                 </Link>
// //                 <Link to="/category/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Clothing
// //                 </Link>
// //                 <Link to="/category/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Accessories
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //           {user ? (
// //             <div
// //               className="relative"
// //               onMouseEnter={handleMouseEnter}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               <button className="bg-gray-700 px-4 py-2 rounded">
// //                 {user.username}
// //               </button>
// //               {isDropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                   <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                     User Profile
// //                   </Link>
// //                   <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <>
// //               <Link to="/login" className="px-4 py-2">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="px-4 py-2">
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = ({ user, setUser }) => {
// //   const navigate = useNavigate();
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/login');
// //   };

// //   const handleMouseEnter = () => {
// //     setIsDropdownOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsDropdownOpen(false);
// //   };

// //   const handleCategoryMouseEnter = () => {
// //     setIsCategoryOpen(true);
// //   };

// //   const handleCategoryMouseLeave = () => {
// //     setIsCategoryOpen(false);
// //   };

// //   return (
// //     <nav className="bg-gray-900 p-4 shadow-lg text-white">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-2xl font-bold tracking-wide">
// //           <Link to="/" className="hover:text-gray-400">ZUShop</Link>
// //         </div>
// //         <div className="flex items-center space-x-4">
// //           <div
// //             className="relative"
// //             onMouseEnter={handleCategoryMouseEnter}
// //             onMouseLeave={handleCategoryMouseLeave}
// //           >
// //             <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
// //               Categories
// //             </button>
// //             {isCategoryOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                 <Link to="/category/shoes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Shoes
// //                 </Link>
// //                 <Link to="/category/bags" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Bags
// //                 </Link>
// //                 <Link to="/category/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Clothing
// //                 </Link>
// //                 <Link to="/category/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Accessories
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //           {user ? (
// //             <div
// //               className="relative"
// //               onMouseEnter={handleMouseEnter}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
// //                 {user.username}
// //               </button>
// //               {isDropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                   <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                     User Profile
// //                   </Link>
// //                   <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <div className="flex space-x-2">
// //               <Link to="/login" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 transition duration-300">
// //                 Register
// //               </Link>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = ({ user, setUser }) => {
// //   const navigate = useNavigate();
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/login');
// //   };

// //   const handleMouseEnter = () => {
// //     setIsDropdownOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsDropdownOpen(false);
// //   };

// //   const handleCategoryMouseEnter = () => {
// //     setIsCategoryOpen(true);
// //   };

// //   const handleCategoryMouseLeave = () => {
// //     setIsCategoryOpen(false);
// //   };

// //   const handleSearchChange = (e) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   const handleSearchSubmit = (e) => {
// //     e.preventDefault();
// //     navigate(`/search?query=${searchQuery}`);
// //   };

// //   return (
// //     <nav className="bg-gray-900 p-4 shadow-lg text-white">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-2xl font-bold tracking-wide">
// //           <Link to="/" className="hover:text-gray-400">ZUShop</Link>
// //         </div>
// //         <div className="flex items-center space-x-4">
// //           <form onSubmit={handleSearchSubmit} className="relative">
// //             <input
// //               type="text"
// //               value={searchQuery}
// //               onChange={handleSearchChange}
// //               placeholder="Search products..."
// //               className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <button
// //               type="submit"
// //               className="absolute right-0 top-0 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300"
// //             >
// //               Search
// //             </button>
// //           </form>
// //           <div
// //             className="relative"
// //             onMouseEnter={handleCategoryMouseEnter}
// //             onMouseLeave={handleCategoryMouseLeave}
// //           >
// //             <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
// //               Categories
// //             </button>
// //             {isCategoryOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                 <Link to="/category/shoes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Shoes
// //                 </Link>
// //                 <Link to="/category/bags" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Bags
// //                 </Link>
// //                 <Link to="/category/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Clothing
// //                 </Link>
// //                 <Link to="/category/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Accessories
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //           {user ? (
// //             <div
// //               className="relative"
// //               onMouseEnter={handleMouseEnter}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
// //                 {user.username}
// //               </button>
// //               {isDropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                   <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                     User Profile
// //                   </Link>
// //                   <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <div className="flex space-x-2">
// //               <Link to="/login" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 transition duration-300">
// //                 Register
// //               </Link>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // // Navbar.jsx
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = ({ user, setUser, cart }) => {
// //   const navigate = useNavigate();
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/login');
// //   };

// //   const handleMouseEnter = () => {
// //     setIsDropdownOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsDropdownOpen(false);
// //   };

// //   const handleCategoryMouseEnter = () => {
// //     setIsCategoryOpen(true);
// //   };

// //   const handleCategoryMouseLeave = () => {
// //     setIsCategoryOpen(false);
// //   };

// //   const handleSearchChange = (e) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   const handleSearchSubmit = (e) => {
// //     e.preventDefault();
// //     navigate(`/search?query=${searchQuery}`);
// //   };

// //   return (
// //     <nav className="bg-gray-900 p-4 shadow-lg text-white">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-2xl font-bold tracking-wide">
// //           <Link to="/" className="hover:text-gray-400">ZUShop</Link>
// //         </div>
// //         <div className="flex items-center space-x-4">
// //           <form onSubmit={handleSearchSubmit} className="relative">
// //             <input
// //               type="text"
// //               value={searchQuery}
// //               onChange={handleSearchChange}
// //               placeholder="Search products..."
// //               className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <button
// //               type="submit"
// //               className="absolute right-0 top-0 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300"
// //             >
// //               Search
// //             </button>
// //           </form>
// //           <div
// //             className="relative"
// //             onMouseEnter={handleCategoryMouseEnter}
// //             onMouseLeave={handleCategoryMouseLeave}
// //           >
// //             <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
// //               Categories
// //             </button>
// //             {isCategoryOpen && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                 <Link to="/category/shoes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Shoes
// //                 </Link>
// //                 <Link to="/category/bags" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Bags
// //                 </Link>
// //                 <Link to="/category/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Clothing
// //                 </Link>
// //                 <Link to="/category/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                   Accessories
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //           <Link to="/cart" className="relative px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition duration-300">
// //             Cart ({cart.length})
// //           </Link>
// //           {user ? (
// //             <div
// //               className="relative"
// //               onMouseEnter={handleMouseEnter}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
// //                 {user.username}
// //               </button>
// //               {isDropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
// //                   <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                     User Profile
// //                   </Link>
// //                   <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           ) : (
// //             <div className="flex space-x-2">
// //               <Link to="/login" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 transition duration-300">
// //                 Register
// //               </Link>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = ({ user, setUser, cart }) => {
//   const navigate = useNavigate();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/login');
//   };

//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleCategoryMouseEnter = () => {
//     setIsCategoryOpen(true);
//   };

//   const handleCategoryMouseLeave = () => {
//     setIsCategoryOpen(false);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search?query=${searchQuery}`);
//   };

//   return (
//     <nav className="bg-gray-900 p-4 shadow-lg text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold tracking-wide">
//           <Link to="/" className="hover:text-gray-400">ZUShop</Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <form onSubmit={handleSearchSubmit} className="relative">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder="Search products..."
//               className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="absolute right-0 top-0 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300"
//             >
//               Search
//             </button>
//           </form>
//           <div
//             className="relative"
//             onMouseEnter={handleCategoryMouseEnter}
//             onMouseLeave={handleCategoryMouseLeave}
//           >
//             <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
//               Categories
//             </button>
//             {isCategoryOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
//                 <Link to="/category/shoes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                   Shoes
//                 </Link>
//                 <Link to="/category/bags" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                   Bags
//                 </Link>
//                 <Link to="/category/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                   Clothing
//                 </Link>
//                 <Link to="/category/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                   Accessories
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link to="/cart" className="relative px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition duration-300">
//             Cart ({cart.length})
//           </Link>
//           {user ? (
//             <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//               <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
//                 {user.username}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
//                   {user.role === 'admin' && (
//                     <Link to="/admin-dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                       Admin Dashboard
//                     </Link>
//                   )}
//                   <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                     User Profile
//                   </Link>
//                   <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="flex space-x-2">
//               <Link to="/login" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300">
//                 Login
//               </Link>
//               <Link to="/register" className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 transition duration-300">
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser, cart }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // Also remove the token
    setUser(null);
    navigate('/login');
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleCategoryMouseEnter = () => {
    setIsCategoryOpen(true);
  };

  const handleCategoryMouseLeave = () => {
    setIsCategoryOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-gray-400">ZUShop</Link>
        </div>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products..."
              className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300"
            >
              Search
            </button>
          </form>
          <div
            className="relative"
            onMouseEnter={handleCategoryMouseEnter}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
              Categories
            </button>
            {isCategoryOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <Link to="/category/shoes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Shoes
                </Link>
                <Link to="/category/bags" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Bags
                </Link>
                <Link to="/category/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Clothing
                </Link>
                <Link to="/category/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Accessories
                </Link>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 transition duration-300">
            Cart ({cart.length})
          </Link>
          {user ? (
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                {user.username}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  {user.role === 'admin' && (
                    <Link to="/admin-dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Admin Dashboard
                    </Link>
                  )}
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    User Profile
                  </Link>
                  <Link to="/order-history" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Order History
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link to="/login" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 transition duration-300">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
