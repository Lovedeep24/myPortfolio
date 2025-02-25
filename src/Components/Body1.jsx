import React from 'react'
import portfilioImg from '../assets/portfolioImg.png';
import Starbg from '../assets/Starbg.png';
// import {Link} from 'react-router-dom';
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import CV from '../assets/CV.pdf';
export default function Body1() {
  return (
    <>
     <div className="w-full bg-black h-auto ">
        <div className="flex flex-col justify-centre items-center bg-black">
            <div className=" overflow-hidden mx-auto h-58 w-60 sm:w-48 sm:h-48 lg:w-60 lg:h-60 flex justify-center items-center  rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#FFF_10%,_rgba(67,_67,_67,_0.00)_100%)]">
                <div className="p-4 h-50 w-50">
                     <img src={portfilioImg} alt="portfolio" className="w-full h-full object-contain"/>
                </div>
            </div>
            <div className="flex flex-col gap-1 items-center w-full h-80 text-white text-center ">
                 <p className="text-white text-2xl sm:text-3xl font-medium">
                  {'< Hello ! >'}
                  </p>
                 <p className=" text-white text-3xl sm:text-5xl md:text-6xl font-medium leading-[3.5rem] ">
                 I’am <span className="inline-block text-[#4061F7]  text-3xl sm:text-5xl md:text-6xl font-extrabold bg-contain bg-center bg-no-repeat"  style={{ backgroundImage: `url(${Starbg})` }}>Lovedeep Bidhan</span>,<br></br> Full-stack web developer.
                 </p>
                 <p className="w-full sm:w-[64%] text-[#9B9B9B] text-center sm:text-lg text-[1rem] font-light leading-relaxed">
                 Welcome to my portfolio! I’m a passionate Full Stack Web Developer specialising in the <span className="text-white text-[1.125rem] font-light">MERN stack,</span> with experience building dynamic, user-friendly websites and applications.
                 </p>
     
                 <div className="flex justify-center gap-4 items-center ">
                     <a><img src={facebook} alt="facebook" className="w-6 h-6 sm:w-6 sm:h-6" /></a>
                     <a><img src={instagram} alt="instagram" className="w-6 h-6 sm:w-6 sm:h-6 "/></a>
                     <a><img src={linkedin} alt="linkedin" className="w-6 h-6 sm:w-6 sm:h-6"/></a>
                     <a><img src={github} alt="github" className="w-6 h-6 sm:w-6 sm:h-6"/></a>
                 </div>
                 <a href={CV} target='#' download="Cv.pdf" style={{marginTop: '10px'}}><button className="mt-3 bg-[#0B0B0B] w-[5rem] h-[1.25rem] sm:w-[9rem] sm:h-[2rem] flex-shrink-0 rounded-[3.125rem] border border-white text-white text-[.75rem] font-medium sm:text-xl leading-normal transition-all duration-300 ease-in-out hover:bg-white hover:text-black">Download CV</button></a>
            </div>
        </div>
     </div> 
    </>
  )
}
