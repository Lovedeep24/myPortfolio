import React from 'react'
export default function Navbar() {
  return (
    <div className="bg-black flex justify-between w-full h-[8vh]">
      <div  className="ml-[20px] relative group mt-[10px]">
      <div className="text-white text-center text-2xl font-bold capitalize relative group-hover">
        <a>Portfolio</a>
        <hr
          className="h-[2px] ml-4 bg-white w-[6.5rem] absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:ml-0"
        />
      </div>
     </div>
    <div className="mr-[30px] mt-[14px] text-white flex justify-center items-center text-center w-[7.5rem] h-[50%] rounded-[4.375rem] border border-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
      <a  className="text-[1.2rem] w-full font-normal leading-normal  ">Contact Me</a>
    </div>
    </div>
  );
  
}
