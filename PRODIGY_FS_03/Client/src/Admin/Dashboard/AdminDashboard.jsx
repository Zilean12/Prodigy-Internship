// import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import AdminSettings from '../Settings/AdminSettings';
// import UploadProduct from '../Product/UploadProduct'; // Import the UploadProduct component

// const AdminDashboard = () => {
//   return (
//     <div className="min-h-screen flex">
//       <aside className="bg-gray-800 text-white w-64 py-8">
//         <div className="px-6">
//           <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
//           <nav>
//             <ul>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard" className="text-white hover:underline">Dashboard</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/users" className="text-white hover:underline">Manage Users</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/products" className="text-white hover:underline">Manage Products</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/orders" className="text-white hover:underline">Manage Orders</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/upload-product" className="text-white hover:underline">Upload Product</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/settings" className="text-white hover:underline">Settings</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>
//       <main className="flex-1 bg-gray-100 p-8">
//         <Routes>
//           <Route path="/" element={<h1 className="text-3xl font-bold mb-8">Welcome, Admin</h1>} />
//           <Route path="/settings" element={<AdminSettings />} />
//           <Route path="/upload-product" element={<UploadProduct />} /> {/* Add the upload product route */}
//         </Routes>
//       </main>
//     </div>
//   );
// };

// // export default AdminDashboard;

// import React, { useEffect } from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import AdminSettings from '../Settings/AdminSettings';
// import UploadProduct from '../Product/UploadProduct';

// const AdminDashboard = ({ user }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user?.role !== 'admin') {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   return (
//     <div className="min-h-screen flex">
//       <aside className="bg-gray-800 text-white w-64 py-8">
//         <div className="px-6">
//           <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
//           <nav>
//             <ul>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard" className="text-white hover:underline">Dashboard</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/users" className="text-white hover:underline">Manage Users</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/products" className="text-white hover:underline">Manage Products</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/orders" className="text-white hover:underline">Manage Orders</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/upload-product" className="text-white hover:underline">Upload Product</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/settings" className="text-white hover:underline">Settings</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>
//       <main className="flex-1 bg-gray-100 p-8">
//         <Routes>
//           <Route path="/" element={<h1 className="text-3xl font-bold mb-8">Welcome, Admin</h1>} />
//           <Route path="/settings" element={<AdminSettings />} />
//           <Route path="/upload-product" element={<UploadProduct />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

// // src/Admin/Dashboard/AdminDashboard.jsx
// import React, { useEffect } from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import AdminSettings from '../Settings/AdminSettings';
// import UploadProduct from '../Product/UploadProduct';
// import ManageProducts from '../Product/ManageProducts';
// import EditProduct from '../Product/EditProduct';

// const AdminDashboard = ({ user }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user?.role !== 'admin') {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   return (
//     <div className="min-h-screen flex">
//       <aside className="bg-gray-800 text-white w-64 py-8">
//         <div className="px-6">
//           <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
//           <nav>
//             <ul>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard" className="text-white hover:underline">Dashboard</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/users" className="text-white hover:underline">Manage Users</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/products" className="text-white hover:underline">Manage Products</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/orders" className="text-white hover:underline">Manage Orders</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/upload-product" className="text-white hover:underline">Upload Product</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/settings" className="text-white hover:underline">Settings</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>
//       <main className="flex-1 bg-gray-100 p-8">
//         <Routes>
//           <Route path="/" element={<h1 className="text-3xl font-bold mb-8">Welcome, Admin</h1>} />
//           <Route path="/settings" element={<AdminSettings />} />
//           <Route path="/upload-product" element={<UploadProduct />} />
//           <Route path="/products" element={<ManageProducts />} />
//           <Route path="/edit-product/:id" element={<EditProduct />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

// // src/Admin/Dashboard/AdminDashboard.jsx
// import React, { useEffect } from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import AdminSettings from '../Settings/AdminSettings';
// import UploadProduct from '../Product/UploadProduct';
// import ManageProducts from '../Product/ManageProducts';
// import EditProduct from '../Product/EditProduct';
// import ManageTickets from '../Support/ManageTickets';

// const AdminDashboard = ({ user }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user?.role !== 'admin') {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   return (
//     <div className="min-h-screen flex">
//       <aside className="bg-gray-800 text-white w-64 py-8">
//         <div className="px-6">
//           <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
//           <nav>
//             <ul>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard" className="text-white hover:underline">Dashboard</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/users" className="text-white hover:underline">Manage Users</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/products" className="text-white hover:underline">Manage Products</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/orders" className="text-white hover:underline">Manage Orders</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/upload-product" className="text-white hover:underline">Upload Product</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/tickets" className="text-white hover:underline">Manage Tickets</Link>
//               </li>
//               <li className="mb-4">
//                 <Link to="/admin-dashboard/settings" className="text-white hover:underline">Settings</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>
//       <main className="flex-1 bg-gray-100 p-8">
//         <Routes>
//           <Route path="/" element={<h1 className="text-3xl font-bold mb-8">Welcome, Admin</h1>} />
//           <Route path="/settings" element={<AdminSettings />} />
//           <Route path="/upload-product" element={<UploadProduct />} />
//           <Route path="/products" element={<ManageProducts />} />
//           <Route path="/edit-product/:id" element={<EditProduct />} />
//           <Route path="/tickets" element={<ManageTickets />} />
//           {/* <Route path="/edit-ticket/:id" element={<EditTicket />} /> */}
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import AdminSettings from '../Settings/AdminSettings';
import UploadProduct from '../Product/UploadProduct';
import ManageProducts from '../Product/ManageProducts';
import EditProduct from '../Product/EditProduct';
import ManageTickets from '../Support/ManageTickets';

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="bg-gray-900 text-white w-64 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center">ZUShop</h1>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/admin-dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin-dashboard/products" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Products</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin-dashboard/upload-product" className="block py-2 px-4 rounded hover:bg-gray-700">Upload Product</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin-dashboard/tickets" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Tickets</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin-dashboard/settings" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <div className="bg-white p-8 rounded shadow-md">
          <Routes>
            <Route path="/" element={
              <div>
                <h1 className="text-3xl font-bold mb-4">Welcome, Admin</h1>
                <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md mb-6" role="alert">
                  <div className="flex">
                    <div className="py-1">
                      <svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-12C5.58 3 2 6.58 2 11h2c0-3.31 2.69-6 6-6s6 2.69 6 6h2c0-4.42-3.58-8-8-8zm0 2c-3.31 0-6 2.69-6 6 0 1.01.25 1.97.69 2.81l1.5-1.5C6.25 10.51 6 10.26 6 10c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .26-.25.51-.19.69l1.5 1.5C15.75 12.97 16 12.01 16 11c0-3.31-2.69-6-6-6z"/></svg>
                    </div>
                    <div>
                      <p className="font-bold">Admin Tip of the Day</p>
                      <p className="text-sm">Remember to check the new product uploads regularly to ensure they meet our quality standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/settings" element={<AdminSettings />} />
            <Route path="/upload-product" element={<UploadProduct />} />
            <Route path="/products" element={<ManageProducts />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/tickets" element={<ManageTickets />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
