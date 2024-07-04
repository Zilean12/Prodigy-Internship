// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white py-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-3xl font-bold"></h1>
//         <nav>
//           <a href="#home" className="text-gray-300 hover:text-white mx-2">
//             Home
//           </a>
//           <a href="#products" className="text-gray-300 hover:text-white mx-2">
//             Products
//           </a>
//           <a href="#subscribe" className="text-gray-300 hover:text-white mx-2">
//             Subscribe
//           </a>
//           <a href="#contact" className="text-gray-300 hover:text-white mx-2">
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide"></h1>
        <nav>
          <a href="#home" className="text-gray-300 hover:text-white mx-3 transition duration-300">
            Home
          </a>
          <a href="#products" className="text-gray-300 hover:text-white mx-3 transition duration-300">
            Products
          </a>
          <a href="#subscribe" className="text-gray-300 hover:text-white mx-3 transition duration-300">
            Subscribe
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white mx-3 transition duration-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
