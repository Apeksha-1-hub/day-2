import React from 'react';
import { FaUser, FaShoppingBag, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-[bisque] shadow-lg sticky top-0 z-50 py-13">
      <div className=" w-full flex items-center justify-between">
        
        {/* Logo on the far left */}
        <div className="flex-shrink-0 pl-16">
          <h1 className="text-pink-600 text-4xl font-semibold">Sajilo Fashion</h1>
        </div>

        {/* Navigation Links in center */}
        <nav className="hidden md:flex space-x-50 text-black-700 font-medium text-3xl">
          <a href="#" className="hover:text-pink-600">Women</a>
          <a href="#" className="hover:text-pink-600">Men</a>
          <a href="#" className="hover:text-pink-600">Kids</a>
          <a href="#" className="hover:text-pink-600">New Arrivals</a>
          <a href="#" className="hover:text-pink-600">Offers</a>
        </nav>

        {/* Search + Icons on the right */}
        <div className="flex items-center space-x-10 pr-40">
          <input
            type="text"
            placeholder="Search for products"
            className="border rounded-full px-4 py-6 w-200 text-base focus:outline-none focus:ring-2 focus:ring-pink-500 hidden md:block"
          />

        <div className="flex items-center space-x-10 pr-1">

          <FaHeart className="text-3xl text-gray-600 hover:text-pink-600 cursor-pointerm" title="Wishlist" />
          <FaShoppingBag className="text-3xl text-gray-600 hover:text-pink-600 cursor-pointer" title="Cart" />
          <FaUser className="text-3xl text-gray-600 hover:text-pink-600 cursor-pointer" title="Profile" />
        </div>
        

        </div>

      </div>

    </header>
  );
};

export default Navbar;
