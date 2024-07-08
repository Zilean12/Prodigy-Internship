import React from 'react';
import axios from 'axios';

const Cart = ({ cart, user }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        'https://prodigy-internship-fs03.onrender.com/api/orders/buy',
        { products: cart.map(product => ({ productId: product._id, quantity: 1 })) },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="cart-container flex flex-col items-center py-8 bg-gray-100 min-h-screen">
      <div className="cart bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {cart.map((product, index) => (
              <li key={index} className="flex justify-between py-4 items-center">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4 flex-grow">
                  <p className="font-bold text-lg text-gray-700">{product.name}</p>
                  <p className="text-gray-500">Quantity: 1</p>
                  <p className="text-gray-500">${product.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mt-6">
          <h3 className="font-bold text-2xl text-gray-800">Total: ${total.toFixed(2)}</h3>
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
