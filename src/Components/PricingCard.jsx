import React from "react";

const PricingCard = () => {
  return (
    <div className="py-10 mt-10">
      <div className="container mx-auto">
        <div className="text-center space-y-3">
          <h2 className="font-bold text-[38px] md:text-[45px] text-[#101727]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382] text-[18px] md:text-[20px]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10  ">
            {/* card 1 */}
          <div className="card max-w-[380px]   mx-5 md:mx-0   bg-[#F9FAFC] shadow-sm rounded-3xl">
            <div className="card-body">
              
              <div className="">
                <h2 className="text-3xl font-bold">Starter</h2>
                <p className="text-[#627382]">Perfect for getting started</p>
              </div>
               <h2 className="font-bold text-[40px]">$0<span className="text-[#627382] text-[16px] font-normal">/month</span></h2> 
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access to 10 free tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Community support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 project per month</span>
                </li>
                
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Get Started Free</button>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative card max-w-[380px]   mx-5 md:mx-0  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm rounded-3xl">
            <div className="card-body">
                <span className="absolute badge badge-xl bg-[#FEF3C6] text-[#BB4D00] -top-4 left-30 rounded-full">Most Popular</span>
              
              <div className="">
                <h2 className="text-3xl font-bold">Pro</h2>
                <p className="text-[#FFFFFF]">Best for professionals</p>
              </div>
               <h2 className="font-bold text-[40px]">$29<span className="text-[#FFFFFF] text-[16px] font-normal">/month</span></h2> 
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access to 10 free tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Community support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 project per month</span>
                </li>
                
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block bg-white text-purple-500 rounded-full">Start Pro Trial</button>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="card max-w-[380px]   mx-5 md:mx-0  bg-[#F9FAFC] shadow-sm rounded-3xl">
            <div className="card-body">
              
              <div className="">
                <h2 className="text-3xl font-bold">Enterprise</h2>
                <p className="text-[#627382]">For teams and businesses</p>
              </div>
               <h2 className="font-bold text-[40px]">$99<span className="text-[#627382] text-[16px] font-normal">/month</span></h2> 
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Access to 10 free tools</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Community support</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 project per month</span>
                </li>
                
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
