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

// src/Admin/Dashboard/AdminDashboard.jsx
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
    <div className="min-h-screen flex">
      <aside className="bg-gray-800 text-white w-64 py-8">
        <div className="px-6">
          <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/admin-dashboard" className="text-white hover:underline">Dashboard</Link>
              </li>
              <li className="mb-4">
                <Link to="/admin-dashboard/users" className="text-white hover:underline">Manage Users</Link>
              </li>
              <li className="mb-4">
                <Link to="/admin-dashboard/products" className="text-white hover:underline">Manage Products</Link>
              </li>
              <li className="mb-4">
                <Link to="/admin-dashboard/orders" className="text-white hover:underline">Manage Orders</Link>
              </li>
              <li className="mb-4">
                <Link to="/admin-dashboard/upload-product" className="text-white hover:underline">Upload Product</Link>
              </li>
              <li className="mb-4">
                <Link to="/admin-dashboard/tickets" className="text-white hover:underline">Manage Tickets</Link>
              </li>
              <li className="mb-4">
                <Link to="/admin-dashboard/settings" className="text-white hover:underline">Settings</Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 bg-gray-100 p-8">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold mb-8">Welcome, Admin</h1>} />
          <Route path="/settings" element={<AdminSettings />} />
          <Route path="/upload-product" element={<UploadProduct />} />
          <Route path="/products" element={<ManageProducts />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/tickets" element={<ManageTickets />} />
          {/* <Route path="/edit-ticket/:id" element={<EditTicket />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
