import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

const CategoryPage = ({ addToCart }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://prodigy-internship-fs03.onrender.com/api/products/category/${category}`);
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, [category]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Products in {category} Category</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} /> // Pass addToCart here
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
