import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    stock: '',
    category: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('https://prodigy-internship-fs03.onrender.com/api/products', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setSuccess('Product uploaded successfully!');
      setFormData({
        name: '',
        description: '',
        price: '',
        image: '',
        stock: '',
        category: '',
      });
    } catch (err) {
      console.error('Error uploading product:', err.response);
      setError(err.response?.data?.message || 'Failed to upload product');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-10 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">Upload Product</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            >
              <option value="">Select a category</option>
              <option value="shoes">Shoes</option>
              <option value="bags">Bags</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
