import React from 'react'
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
export default function Footer() {
  return (
    <>
        <div className="w-full h-[5rem] flex items-center justify-center bg-[#0B0B0B] gap:50 sm:gap-130">
            <div className="w-[10rem] sm:w-auto text-white text-[1rem] sm:text-[1.37025rem] font-normal">
                <p> © 2024 <p className="inline-block text-[1rem] sm:text-[1.37025rem] font-bold leading-normal">Lovedeep</p> All Rights Reserved , Inc.</p>
            </div>
            <div className= "w-[6rem] sm:w-auto">
                <div className="flex gap-2 sm:gap-4">
                    <a><img src={facebook} alt="facebook" /></a>
                    <a><img src={instagram} alt="instagram" /></a>
                    <a href='https://www.linkedin.com/in/lovedeep024/' target='#'><img src={linkedin} alt="linkedin" /></a>
                    <a href='https://github.com/Lovedeep24'><img src={github} alt="github" /></a>
                </div>           
            </div>
        </div>  
    </>
  )
}
