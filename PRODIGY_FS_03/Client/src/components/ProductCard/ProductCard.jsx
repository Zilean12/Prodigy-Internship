// import React from 'react';

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div className="bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl rounded-lg">
//       <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
//       <div className="p-6">
//         <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
//         <p className="text-gray-600 mb-4">${product.price}</p>
//         <button onClick={() => addToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl rounded-lg">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mb-4">${product.price}</p>
        </div>
      </Link>
      <button onClick={() => addToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
