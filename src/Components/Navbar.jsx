import React from 'react'
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <div className="bg-black flex justify-between w-full h-[10vh]">
      <div style={{ marginLeft: '20px', marginTop: '10px' }} className="relative group mt-6">
      <div className="text-white text-center text-2xl font-bold capitalize relative group-hover">
        <a>Portfolio</a>
        <hr
          style={{ marginLeft: '20px' }}
          className="h-[2px] ml-4 bg-white w-[6.5rem] absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:ml-0"
        />
      </div>
     </div>
    <div style={{ marginRight: '30px', marginTop: '13px' }} className="text-white flex justify-center items-center text-center w-[7.5rem] h-[50%] mr-28 mt-[1.3rem] rounded-[4.375rem] border border-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
      <a  className="text-[1.2rem] w-full font-normal leading-normal px-4 py-2 ">Contact Me</a>
    </div>
    </div>
  );
  
}
