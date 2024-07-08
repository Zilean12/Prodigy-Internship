import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://prodigy-internship-fs03.onrender.com/api/products', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://prodigy-internship-fs03.onrender.com/api/products/${productId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setSuccess('Product deleted successfully');
      setProducts(products.filter(product => product._id !== productId));
    } catch (err) {
      setError('Failed to delete product');
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 p-10 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">Manage Products</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Stock</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {products.map((product, index) => (
              <tr key={product._id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <td className="py-3 px-6 text-left">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                </td>
                <td className="py-3 px-6 text-left">{product.name}</td>
                <td className="py-3 px-6 text-left">{product.category}</td>
                <td className="py-3 px-6 text-left">${product.price}</td>
                <td className="py-3 px-6 text-left">{product.stock}</td>
                <td className="py-3 px-6 text-left flex items-center space-x-4">
                  <Link
                    to={`/admin-dashboard/edit-product/${product._id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
