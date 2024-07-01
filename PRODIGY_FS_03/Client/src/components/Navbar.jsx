// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Menu } from '@headlessui/react';

// const Navbar = ({ user, onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-white text-lg font-bold">
//           ZUShop
//         </Link>
//         <div className="flex items-center">
//           {user ? (
//             <Menu as="div" className="relative inline-block text-left">
//               <div>
//                 <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                   {user.username}
//                 </Menu.Button>
//               </div>
//               <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <Link
//                         to="/profile"
//                         className={`${
//                           active ? 'bg-gray-100' : ''
//                         } block px-4 py-2 text-sm text-gray-700`}
//                       >
//                         Profile
//                       </Link>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={handleLogout}
//                         className={`${
//                           active ? 'bg-gray-100' : ''
//                         } block w-full text-left px-4 py-2 text-sm text-gray-700`}
//                       >
//                         Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Menu>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">ZUShop</Link>
        </div>
        <div>
          {user ? (
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="bg-gray-700 px-4 py-2 rounded">
                {user.username}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    User Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = ({ user, setUser }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-gray-800 p-4 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-xl font-bold">
//           <Link to="/">ZUShop</Link>
//         </div>
//         <div>
//           {user ? (
//             <div className="relative">
//               <button className="bg-gray-700 px-4 py-2 rounded">
//                 {user.username}
//               </button>
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   User Profile
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <Link to="/login" className="px-4 py-2">
//                 Login
//               </Link>
//               <Link to="/register" className="px-4 py-2">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
