import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart bg-white shadow-xl rounded-lg p-8 max-w-md mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {cart.map((product, index) => (
            <li key={index} className="flex justify-between py-4 items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
              <div className="ml-4 flex-grow">
                <p className="font-bold text-lg text-gray-700">{product.name}</p>
                <p className="text-gray-500">Quantity: 1</p>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="font-bold text-2xl mt-6 text-gray-800">Total: ${total.toFixed(2)}</h3>
      <button className="mt-8 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-5 rounded-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
