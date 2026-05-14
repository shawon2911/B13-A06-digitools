import React from "react";
import userImg from "../assets/user.png";
import boxImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const StepsCard = () => {
  return (
    <div className="bg-[#F9FAFC] py-20">
      <div className="container mx-auto">
        <div className="text-center space-y-3 max-w-[300px] mx-auto md:max-w-full ">
          <h2 className="font-bold md:font-extrabold text-[38px] md:text-[45px] text-[#101727] ">
            Get Started in 3 Steps
          </h2>
          <p className="text-[#627382] text-[18px] md:text-[20px] px-2 ">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-15  lg:ml-20 ">
          {/* this is the steps card-1 */}
          <div className="bg-white shadow-sm pt-5 pb-20 px-8 max-w-[380px] mx-auto    rounded-2xl">
            <div className="flex justify-end items-center">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-2 px-3  rounded-full ">
                {" "}
                01
              </span>
            </div>
            <div className="flex justify-center items-center mt-10 mb-5">
              <div className="flex justify-center items-center rounded-full bg-purple-200 h-25 w-25">
                <img src={userImg} alt="" />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-[24px]">Create Account</h4>
              <p className="text-[#627382] max-w-330px">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          {/* this is the steps card-2 */}
          <div className="bg-white shadow-sm pt-5 pb-20 px-8 max-w-[380px] mx-auto  rounded-2xl">
            <div className="flex justify-end items-center">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-2 px-3  rounded-full ">
                {" "}
                02
              </span>
            </div>
            <div className="flex justify-center items-center mt-10 mb-5">
              <div className="flex justify-center items-center rounded-full bg-purple-200 h-25 w-25">
                <img src={boxImg} alt="" />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-[24px]">Choose Products</h4>
              <p className="text-[#627382] max-w-330px">
               Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          {/* this is the steps card-3 */}
          <div className="bg-white shadow-sm pt-5 pb-20 px-8 max-w-[380px] mx-auto  rounded-2xl">
            <div className="flex justify-end items-center">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-2 px-3  rounded-full ">
                {" "}
                03
              </span>
            </div>
            <div className="flex justify-center items-center mt-10 mb-5">
              <div className="flex justify-center items-center rounded-full bg-purple-200 h-25 w-25">
                <img src={rocketImg} alt="" />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-[24px]">Start Creating</h4>
              <p className="text-[#627382] max-w-330px">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
