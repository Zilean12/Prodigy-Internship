// // Home.jsx

// import React from 'react';
// import Header from './Header/Header';
// // import Footer from './Footer';
// import NewsletterSubscribe from './Newsletter/NewsletterSubscribe';

// const Home = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex flex-col">
//       <Header />
//       <main className="container mx-auto p-6 flex-grow">
//         <header className="text-center mb-12">
//           <h1 className="text-6xl font-extrabold mb-4 text-blue-700">Welcome to ZUShop</h1>
//           <p className="text-2xl text-gray-700">Your one-stop shop for all your needs</p>
//         </header>

//         <section id="products" className="mb-16">
//           <h2 className="text-4xl font-semibold mb-8 text-gray-800">Featured Products</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {/* Product Cards */}
//             <div className="bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl rounded-lg">
//               <img src="https://via.placeholder.com/300" alt="Product 1" className="w-full h-56 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2 text-gray-800">Product 1</h3>
//                 <p className="text-gray-600 mb-4">$49.99</p>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//             {/* Repeat Product Cards for other products */}
//             <div className="bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl rounded-lg">
//               <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-56 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2 text-gray-800">Product 2</h3>
//                 <p className="text-gray-600 mb-4">$39.99</p>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//             <div className="bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl rounded-lg">
//               <img src="https://via.placeholder.com/300" alt="Product 3" className="w-full h-56 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2 text-gray-800">Product 3</h3>
//                 <p className="text-gray-600 mb-4">$29.99</p>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Include NewsletterSubscribe component */}
//         <NewsletterSubscribe />
        
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Home;

// Home.jsx

// import React, { useEffect, useState } from 'react';
// import Header from './Header/Header';
// import NewsletterSubscribe from './Newsletter/NewsletterSubscribe';
// import ProductCard from './ProductCard/ProductCard';

// const Home = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://prodigy-internship-fs03.onrender.com/api/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex flex-col">
//       <Header />
//       <main className="container mx-auto p-6 flex-grow">
//         <header className="text-center mb-12">
//           <h1 className="text-6xl font-extrabold mb-4 text-blue-700">Welcome to ZUShop</h1>
//           <p className="text-2xl text-gray-700">Your one-stop shop for all your needs</p>
//         </header>

//         <section id="products" className="mb-16">
//           <h2 className="text-4xl font-semibold mb-8 text-gray-800">Featured Products</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {products.map(product => (
//               <ProductCard key={product.id} product={product} addToCart={addToCart} /> 
//             ))}
//           </div>
//         </section>

//         <NewsletterSubscribe />
//       </main>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
import NewsletterSubscribe from './Newsletter/NewsletterSubscribe';
import ProductCard from './ProductCard/ProductCard';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://prodigy-internship-fs03.onrender.com/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-6 flex-grow">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-4 text-blue-700">Welcome to ZUShop</h1>
          <p className="text-2xl text-gray-700">Your one-stop shop for all your needs</p>
        </header>

        <section id="products" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(product => (
              <ProductCard key={product._id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>

        <NewsletterSubscribe />

        {/* <div className="mt-12 text-center">
          <Link to="/support" className="text-blue-700 underline">
            Need Help? Submit a Support Ticket
          </Link>
        </div> */}
      </main>
    </div>
  );
};

export default Home;
