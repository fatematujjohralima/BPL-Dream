import React from 'react';
import navimg from '../../assets/logo.png'
import dollarimg from '../../assets/dollar.avif'

const Navbar = () => {
    return (
        <div className="navbar max-w-5xl mx-auto">
  <div className="flex-1">
    <a className=" text-xl">
      <img className='w-15 h-15' src={navimg} alt="" />
    </a>
  </div>
  <div className="flex items-center">
    <span className='mr-1'>60000000</span>
    <span>Coin</span>
    <img className='w-12 h-12' src={dollarimg} alt="" />
  </div>
</div>
    );
};

export default Navbar;