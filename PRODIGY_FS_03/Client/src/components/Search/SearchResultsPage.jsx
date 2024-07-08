import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResultsPage = ({ addToCart }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`https://prodigy-internship-fs03.onrender.com/api/products/search?query=${query}`);
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching search results');
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) {
    return <div className="container mx-auto mt-8 text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto mt-8 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-lg mb-4" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-gray-900">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-700 text-center col-span-full">No products found</div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
