import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] py-30">
      <div className="container mx-auto">
        <div className="text-white grid grid-cols-2 md:flex md:justify-between md:items-start">
          {/* digitools */}
          <div className="space-y-4">
            <h3 className="font-bold text-5xl text-white">DigiTools</h3>
            <p className="text-white/70 max-w-[350px] leading-8">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          {/* product */}
          <div className="space-y-6">
            <h3 className="text-[20px]">Product</h3>
            <p className="text-white/70">Features</p>
            <p className="text-white/70">Pricing</p>
            <p className="text-white/70">Templates</p>
            <p className="text-white/70">Integrations</p>
          </div>
          {/* company */}
          <div className="space-y-6">
            <h3 className="text-[20px]">Company</h3>
            <p className="text-white/70">About</p>
            <p className="text-white/70">Blog</p>
            <p className="text-white/70">Careers</p>
            <p className="text-white/70">Press</p>
          </div>
          {/* resources */}
          <div className="space-y-6">
            <h3 className="text-[20px]">Resources</h3>
            <p className="text-white/70">Documentation</p>
            <p className="text-white/70">Help Center</p>
            <p className="text-white/70">Community</p>
            <p className="text-white/70">Contact</p>
          </div>
          {/* social links */}
          <div>
            <h3 className="text-[20px]">Social Links</h3>
            <div className="flex justify-between items-center mt-5 gap-3">
              <span className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-[#101727] text-2xl">
                <AiFillInstagram />
              </span>
              <span className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-[#101727] text-2xl">
                <FaFacebookSquare />
              </span>
              <span className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-[#101727] text-2xl">
                <BsTwitterX />
              </span>
            </div>
          </div>
        </div>

        <div className="divider divider-neutral mt-20 mb-20"></div>
        <div className="text-white/50 flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h4>© 2026 Digitools. All rights reserved.</h4>
          </div>
          <div className="flex justify-between items-center  md:gap-10">
            <h4>Privacy Policy</h4>
            <h4>Terms of Service</h4>
            <h4>Cookies</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
