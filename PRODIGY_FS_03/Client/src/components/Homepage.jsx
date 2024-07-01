import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">ZUshop</h1>
          <nav>
            <Link to="/" className="mx-2 hover:text-gray-300">Home</Link>
            <Link to="/products" className="mx-2 hover:text-gray-300">Products</Link>
            <Link to="/contact" className="mx-2 hover:text-gray-300">Contact</Link>
            <Link to="/login" className="mx-2 hover:text-gray-300">Login</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Welcome to ZUshop</h2>
          <p className="mb-4">Discover the best products at the best prices. Enjoy shopping with ZUshop, your go-to e-commerce store!</p>
          <Link to="/products" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Shop Now</Link>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add product cards here */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/150" alt="Product 1" className="w-full h-40 object-cover mb-2"/>
              <h3 className="text-xl font-bold">Product 1</h3>
              <p className="text-gray-600">$19.99</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/150" alt="Product 2" className="w-full h-40 object-cover mb-2"/>
              <h3 className="text-xl font-bold">Product 2</h3>
              <p className="text-gray-600">$29.99</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/150" alt="Product 3" className="w-full h-40 object-cover mb-2"/>
              <h3 className="text-xl font-bold">Product 3</h3>
              <p className="text-gray-600">$39.99</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email:</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded" placeholder="Enter your email"/>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          &copy; 2024 ZUshop. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
