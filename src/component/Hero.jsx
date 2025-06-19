import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Hero = () => {
  return (
    <main className="bg-[bisque] flex flex-col min-h-screen gap-4">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] md:h-[500px] bg-gray-200 ">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Fashion Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay and Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold text-pink-600 mb-4">
            New Winter Collection
          </h1>
          <p className="text-base md:text-xl text-white mb-6">
            Up to 50% Off on Selected Styles!
          </p>
          <a
            href="#"
            className="bg-pink-600 text-white py-2 px-6 rounded-full text-base font-medium hover:bg-pink-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-10 px-4 md:px-16">
        <h2 className="text-2xl font-semibold text-pink-600 text-center mb-6">
          Shop by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-50">
          {/* Category Card: Women */}
          <a
            href="#"
            className="w-full sm:w-[450px] h-150 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1529139579252-0b8f7a10f865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Women"
              className="w-full h-60 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-800">Women</h3>
            </div>
          </a>
          {/* Category Card: Men */}
          <a
            href="#"
            className="w-full sm:w-[450px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Men"
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-800">Men</h3>
            </div>
          </a>
          {/* Category Card: Kids */}
          <a
            href="#"
            className="w-full sm:w-[450px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae696f9a76c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Kids"
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-800">Kids</h3>
            </div>
          </a>
          {/* Category Card: New Arrivals */}
          <a
            href="#"
            className="w-full sm:w-[450px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1445205170230-3b425b95134a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="New Arrivals"
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-medium text-gray-800">New Arrivals</h3>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-10 px-4 md:px-16 bg-white">
        <h2 className="text-2xl font-semibold text-pink-600 text-center mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Floral Dress"
              className="w-full h-56 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-medium text-gray-800">Floral Dress</h3>
              <p className="text-gray-600 text-sm">Rs. 2,499</p>
              <button className="mt-2 w-full bg-pink-600 text-white py-1.5 rounded-md hover:bg-pink-700 flex items-center justify-center gap-2 text-sm">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1598032895397-b9479868e31d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Casual Shirt"
              className="w-full h-56 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-medium text-gray-800">Casual Shirt</h3>
              <p className="text-gray-600 text-sm">Rs. 1,799</p>
              <button className="mt-2 w-full bg-pink-600 text-white py-1.5 rounded-md hover:bg-pink-700 flex items-center justify-center gap-2 text-sm">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1574291814190-07f0e2db7eb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Kids’ Jacket"
              className="w-full h-56 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-medium text-gray-800">Kids’ Jacket</h3>
              <p className="text-gray-600 text-sm">Rs. 1,299</p>
              <button className="mt-2 w-full bg-pink-600 text-white py-1.5 rounded-md hover:bg-pink-700 flex items-center justify-center gap-2 text-sm">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
          {/* Product Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1529374255404-311a2a03a8f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Denim Jeans"
              className="w-full h-56 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-medium text-gray-800">Denim Jeans</h3>
              <p className="text-gray-600 text-sm">Rs. 2,999</p>
              <button className="mt-2 w-full bg-pink-600 text-white py-1.5 rounded-md hover:bg-pink-700 flex items-center justify-center gap-2 text-sm">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;