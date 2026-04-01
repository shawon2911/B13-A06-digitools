import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30 mt-15'>
            <div className='md:container md:mx-auto text-center space-y-6 flex flex-col items-center'>
                <h2 className='font-extrabold text-[40px] text-white'>Ready to Transform Your Workflow?</h2>
                <p className='text-white/70 max-w-[500px]'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='flex items-center gap-5 text-center justify-center pt-5'>
                    <button className='btn bg-white text-purple-600 py-5 px-5 rounded-full'>Explore Products</button>
                    <button className='btn btn-outline bg-transparent text-white px-5 py-5 rounded-full'>View Pricing</button>
                </div>
                <p className='text-white/70'> 14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;