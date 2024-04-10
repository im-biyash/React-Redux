import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";

function Navbar({counter}) {
  return (
    <div className='bg-black p-4'>
      <nav className='flex justify-between items-center'>
        <ul className='text-white flex font-bold gap-5 mx-auto'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
        {/* Cart icon */}
        <div className='w-12 '>
          <FaCartArrowDown className='text-white font-bold text-2xl' />
        </div>
        <div className='bg-red-500 text-white font-bold rounded-full h-6 w-6 flex justify-center items-center ml-2'>
            {counter}
          </div>

      </nav>
    </div>
  );
}

export default Navbar;
