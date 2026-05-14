import React from "react";
import playBtn from "../../assets/play.png"
import banner from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className="md:container md:mx-auto py-10 md:mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-around">
      <div className="banner-left space-y-8 md:space-y-4">
        <div className="flex justify-center   md:items-center  gap-2 bg-[#E1E7FF] py-2 md:px-10  mx-10 md:mx-0 rounded-full md:max-w-[350px] ">
          <div className="h-5 w-5 bg-purple-400 rounded-full flex justify-center items-center  ">
            <span className="w-2 h-2 bg-purple-600 rounded-full "></span>
          </div>
          <h3 className="font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
            New: AI-Powered Tools Available
          </h3>
          
        </div>

          
        <h1 className="font-bold text-center md:text-left text-4xl md:text-[70px] ">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <div className="text-[15px] md:text-[18px] text-[#627382] text-center md:text-left max-w-[610px] md:leading-8">
          <p >
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <p>Explore Products</p>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-4">
            <button className="btn font-medium md:font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full md:py-6 md:px-5 ">Explore Products</button>
            <button className="btn btn-outline bg-transparent font-medium md:font-bold text-purple-700 rounded-full md:py-6 md:px-5 "><img src={playBtn} alt=""  />Watch Demo</button>
        </div>
      </div>
      <div className="banner-right mt-10 md:mt-0 ">
        <img src={banner} alt="" className="h-100 w-90 mx-auto md:mx-0 md:h-auto md:w-auto"/>
      </div>
    </div>
  );
};

export default Banner;
