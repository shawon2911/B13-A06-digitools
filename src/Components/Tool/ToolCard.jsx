import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const ToolCard = ({tool, cart, setCart}) => {
    // console.log(cart);
    // console.log(tool);
    const handleTools = () => {
        setCart([...cart, tool]);
        toast.success(`${tool.name} is added to cart`);
    }
    
    return (
        <div className='shadow-md hover:shadow-2xl transition-all mx-2 md:mx-0 rounded-2xl px-12 py-12 space-y-5'>
            <div className='flex justify-between items-center'>
                <span className='p-3 rounded-full border border-gray-300 '>
                    <img src={tool.icon} alt="" />
                </span>
                {(tool.tag === "new" ? 
                    <span className='bg-[#DBFCE7] text-[#0A883E] rounded-full px-3'>New</span> : 
                    (tool.tag === "popular" ?
                         <span className='bg-[#E1E7FF] text-[#4F39F6] rounded-full px-3'>Popular</span> : 
                          <span className='bg-[#FEF3C6] text-[#BB4D00] rounded-full px-3'>Best Seller</span>
                    )
                )}
                
            </div>
            <h2 className='font-bold text-[24px] text-[#101727]'>{tool.name}</h2>
            <h3><span className='font-bold text-[24px] text-[#101727]'>{tool.price}</span> / <span className='text-[16px] text-[#627382]'>{tool.period}</span></h3>
            {
                tool.features.map((feature, index) => 
                    <div key={index} className='flex items-center gap-2'>
                        <IoCheckmarkSharp className='text-green-600' />
                       <span className='font-medium text-[16px] text-[#627382]'> {feature}</span>
                    </div>
                )
            }
            <button
            onClick={()=>handleTools()}
             className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:shadow hover:shadow-purple-700 hover:scale-[1.02] hover:border-none rounded-full w-full font-bold text-[16px] text-white py-6'>Buy Now</button>
        </div>
    );
};

export default ToolCard;