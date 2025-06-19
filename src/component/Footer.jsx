import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#d09b56] text-gray-800 py-10">
      {/* Footer Container */}
      <div className="w-full px-4 md:px-16">
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-40">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xl">
              <li>
                <a href="#" className="hover:text-pink-600 transition duration-300">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition duration-300">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition duration-300">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition duration-300">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition duration-300">
                  Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-4 pl-20">
              Contact Us
            </h3>
            <ul className="space-y-2 text-xl pl-20">
              <li>Email: support@sajilofashion.com</li>
              <li>Phone: +977-123-456-7890</li>
              <li>Address: Kathmandu, Nepal</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-4 pl-20">
              Follow Us
            </h3>
            <div className="flex space-x-4 pl-20">
              <a
                href="#"
                className="text-4xl text-gray-600 hover:text-pink-600 transition duration-300"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-4xl text-gray-600 hover:text-pink-600 transition duration-300"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-4xl text-gray-600 hover:text-pink-600 transition duration-300"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-4xl text-gray-600 hover:text-pink-600 transition duration-300"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-xl mt-8 border-t border-gray-300 pt-4 text-center pl-8">
          <p>&copy; 2025 Sajilo Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;