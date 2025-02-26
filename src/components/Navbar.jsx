import React from 'react';


const Navbar = () => {

    

    return (
        <div className='flex justify-between items-center bg-blue-200 w-[100%] h-[60px] p-[10px]'>
            <div className="flex text-[30px] align-center font-serif px-2.5 py-2 mx-1 hover:text-[#4956ca]">
                <div className='h-10 w-10 font-extrabold rounded-full mr-2' ></div>
                Infinity Hardware
            </div>
            <div className="text-[#4956ca] text-[20px] font-bold">
                <ul className="flex space-x-15 hover:max-w-445px">
                    <li><a href="#" className='hover:text-[22px] hover:text-black'>Home</a></li>
                    <li><a href="#" className='hover:text-[22px] hover:text-black'>About</a></li>
                    <li><a href="#" className='hover:text-[22px] hover:text-black'>Services</a></li>
                    <li><a href="#" className='hover:text-[22px] hover:text-black'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;