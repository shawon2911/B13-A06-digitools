import React from 'react';

const UserCount = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15 my-15'>
            <div className='container mx-auto flex justify-around items-center'>
                <div className='pl-10'>
                    <h2 className='font-extrabold text-[50px] text-white'>50K+</h2>
                    <p className='font-medium text-[24px] text-white/70'>Active Users</p>
                </div>
                <div className='px-6 pl-30 border-l border-white/50'>
                    <h2 className='font-extrabold text-[50px] text-white'>200+</h2>
                    <p className='font-medium text-[24px] text-white/70'>Premium Tools</p>
                </div>
                <div className='px-6 pl-30 border-l border-white/50'>
                    <h2 className='font-extrabold text-[50px] text-white'>4.9</h2>
                    <p className='font-medium text-[24px] text-white/70'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default UserCount;