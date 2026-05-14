import React from 'react';

const UserCount = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 md:py-15 my-15'>
            <div className='md:container md:mx-auto  flex flex-col gap-10 md:flex-row justify-center items-center md:justify-around md:items-center'>
                <div className='w-full md:w-auto text-center md:text-left  md:pl-10 '>
                    <h2 className='font-extrabold text-[40px] md:text-[50px] text-white'>50K+</h2>
                    <p className='font-medium text-[20px] md:text-[24px] text-white/70'>Active Users</p>
                </div>
                {/* <div className='divider'></div> */}

                <div className='w-full md:w-auto text-center md:text-left  md:px-6 md:pl-30 border-t md:border-t-0 pt-10 md:pt-0  md:border-l border-white/50 '>
                    <h2 className='font-extrabold text-[40px] md:text-[50px] text-white'>200+</h2>
                    <p className='font-medium text-[20px] md:text-[24px] text-white/70'>Premium Tools</p>
                </div>
                {/* <div className='divider '></div> */}

                <div className='w-full md:w-auto text-center md:text-left  md:px-6 md:pl-30 border-t md:border-t-0 pt-10 md:pt-0  md:border-l  border-white/50 '>
                    <h2 className='font-extrabold text-[40px] md:text-[50px] text-white'>4.9</h2>
                    <p className='font-medium text-[20px] md:text-[24px] text-white/70'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default UserCount;