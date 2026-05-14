import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-white  pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* top section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 text-center sm:text-left">
          {/* logo */}
          <div className="md:col-span-2 space-y-3 ">
            <h2 className="font-bold text-2xl">DigiTools</h2>
            <p className="text-sm text-gray-400 max-w-sm lg:leading-6">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>
          {/* product */}
          <div>
            <h3 className="font-semibold ">Product</h3>
            <ul className="text-sm text-gray-400 space-y-3 mt-2">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integration</li>
            </ul>
          </div>
          {/* company */}
          <div>
            <h3 className="font-semibold ">Company</h3>
            <ul className="text-sm text-gray-400 space-y-3 mt-2">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>
          {/* resources */}
          <div>
            <h3 className="font-semibold ">Resources</h3>
            <ul className="text-sm text-gray-400 space-y-3 mt-2">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          {/* social links */}
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <h3 className="font-semibold ">Social Links</h3>
            <div className="flex gap-3">
              <div className="h-8 w-8 bg-white rounded-full text-black flex justify-center items-center hover:bg-gray-200 cursor-pointer">
                <FaInstagram size={14} />
              </div>
              <div className="h-8 w-8 bg-white rounded-full text-black flex justify-center items-center hover:bg-gray-200 cursor-pointer">
                <FaFacebook size={14} />
              </div>
              <div className="h-8 w-8 bg-white rounded-full text-black flex justify-center items-center hover:bg-gray-200 cursor-pointer">
                <FaX size={14} />
              </div>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="border-t border-gray-600 pt-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p className="text-sm">© 2026 Digitools. All rights reserved.</p>
          <div>
            <span className="text-sm hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-sm hover:text-white cursor-pointer">Terms of Service</span>
            <span className="text-sm hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
