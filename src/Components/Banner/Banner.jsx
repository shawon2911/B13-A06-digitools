import React from "react";
import playBtn from "../../assets/play.png"
import banner from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className="container mx-auto py-10 mt-10 flex items-center justify-around">
      <div className="banner-left space-y-4">
        <div className="flex  items-center gap-2 bg-[#E1E7FF] py-2 px-4 rounded-full max-w-[300px]">
          <div className="h-5 w-5 bg-purple-400 rounded-full flex justify-center items-center  ">
            <span className="w-2 h-2 bg-purple-600 rounded-full "></span>
          </div>

          <h3 className="font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
            New: AI-Powered Tools Available
          </h3>
        </div>
        <h1 className="font-bold text-[70px] ">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <div className="text-[18px] text-[#627382] max-w-[610px] leading-8">
          <p >
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <p>Explore Products</p>
        </div>
        <div className="flex items-center gap-4">
            <button className="btn font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-6 px-5 ">Explore Products</button>
            <button className="btn btn-outline bg-transparent font-bold text-purple-700 rounded-full py-6 px-5 "><img src={playBtn} alt=""  />Watch Demo</button>
        </div>
      </div>
      <div className="banner-right ">
        <img src={banner} alt="" className=""/>
      </div>
    </div>
  );
};

export default Banner;
