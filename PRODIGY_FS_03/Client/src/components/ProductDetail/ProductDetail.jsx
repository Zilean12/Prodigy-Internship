// import React from 'react';

// const ProductDetail = ({ product, addToCart }) => {
//   return (
//     <div className="product-detail">
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductDetail;

// //ProductDetail.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetail = ({ products }) => {
//   const { id } = useParams();
//   const product = products.find(product => product.id === parseInt(id));

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
//       <div className="flex flex-col lg:flex-row">
//         <img src={product.image} alt={product.name} className="w-full lg:w-1/2 h-64 object-cover rounded" />
//         <div className="mt-6 lg:mt-0 lg:ml-6">
//           <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
//           <p className="text-gray-500 mt-2">${product.price.toFixed(2)}</p>
//           <p className="mt-4 text-gray-600">{product.description}</p>
//           <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-5 rounded-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product');
        console.error('Error fetching product:', err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="product-detail container mx-auto p-6">
      {product && (
        <>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain p-4 cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
            <div className="p-6">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-3xl font-bold text-blue-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full mx-4">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full h-8 w-8 flex items-center justify-center"
                >
                  &times;
                </button>
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetail;
