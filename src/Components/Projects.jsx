import React from 'react';
import { motion } from 'framer-motion';
import ReadMore from '../assets/ReadMore.png';
import Proj1 from '../assets/proj1.jpg';
import myways from '../assets/myways.png';
import infoNow from '../assets/infoNow3.png';
import mcq from '../assets/mcq.png';
import logo from '../assets/Logo.png';
import liveBtn from'../assets/live-btn.png';
import gitLogo from '../assets/git-logo.png'
export default function Projects() {
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  return (
    <>
      <div className="flex flex-col gap-8 w-full h-auto sm:h-auto bg-[#0B0B0B] ">
        <div style={{paddingTop:'30px'}} className="justify-center items-center mt-8 flex h-auto w-[100%]" >
            <p className=" mt-[0.7rem] text-white text-[3rem] font-normal leading-[3.5rem] tracking-[-0.06rem]">
              My <span className="text-[#4061F7] text-[3rem] font-extrabold leading-[3.5rem] tracking-[-0.06rem]">Projects</span>
            </p>     
        </div>
 
      <div style={{marginLeft:'60px'}} className="gap-20 flex flex-col w-[90%] h-[100%] "> 
 
 {/* ----------------------------01-------------------------01-----------------------------01---------------------------- */}
        <div className='flex flex-col sm:flex-row sm:gap-30 w-full h-auto'>
            <motion.div
              className="flex flex-col items-start sm:gap-7 self-stretch mt-12 ml-3 h-[100%] sm:w-[45%] w-[80%] rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInLeft}
            >
             
              <p className="text-white text-2xl font-bold leading-10 tracking-tight">InfoNow</p>
              <div className='flex flex-col gap-7'>
              <p className="text-[#9B9B9B] text-base font-normal">
              InfoNow is a real-time dashboard built with Next.js, leveraging Redux-Saga for advanced state management and side-effects handling. It aggregates live cryptocurrency prices (via WebSocket), latest news headlines, and current weather updates using multiple external APIs. The application features a clean, responsive UI and ensures seamless real-time data flow, offering users a unified glance at global data trends.
              </p>
              <div className=' w-auto flex text-white gap-4'>
                <p className='text-[#4061F7] w-auto whitespace-nowrap font-bold'>Tech Stack:</p>
                <ul className='flex w-auto gap-2 text-white whitespace-nowrap '>
                  <li>Next.js</li>
                  <li>Redux Saga</li>
                  <li>Tailwind CSS</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <a className="flex w-auto h-auto gap-10 ">
              <a href='https://live-tracker-one.vercel.app/' target="_blank" className='h-8 w-15'>
                <img src={liveBtn} alt="Live" className="h-full w-full object-contain"/>
                </a>
                <a href='https://github.com/Lovedeep24/crypto_weather.git' target="_blank" className='h-8 w-8'>
                <img src={gitLogo} alt="Github" className="h-full w-full object-contain"/>
                </a>
              </a>
              </div>
            </motion.div>
            <motion.div
        className="flex flex-col items-start gap-7 self-stretch mt-12 sm:h-[20rem] sm:w-[45%] w-[80%] h-[10rem] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInRight}
            >
              <img src={infoNow} alt="Project 3" className="rounded-xl w-full h-full transition-transform duration-500 hover:[transform:perspective(1000px)_rotateY(-10deg)_rotateX(-10deg)]" />
            </motion.div>
          </div>
 {/* -------------------------------02-------------------02------------------------02------------------------------02 */}
<div className='flex flex-col sm:flex-row sm:gap-30 w-full h-auto'>
          <motion.div
        className="flex flex-col items-start gap-7 self-stretch mt-12 sm:h-[20rem] sm:w-[45%] w-[80%] h-[10rem] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInLeft}
            >
              <img src={mcq} alt="Project 3" className="rounded-xl w-full h-full transition-transform duration-500 hover:[transform:perspective(1000px)_rotateY(10deg)_rotateX(-10deg)]" />
            </motion.div>
            <motion.div
              className="flex flex-col items-start sm:gap-7 self-stretch mt-12 ml-3 h-[100%] sm:w-[45%] w-[80%] rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInRight}
            >
              {/* <h1>03</h1> */}
              <p className="text-white text-2xl font-bold leading-10 tracking-tight">Ticklytic</p>
              <div className='flex flex-col gap-7'>
              <p className="text-[#9B9B9B] text-base font-normal">
              Ticklytic is an online MCQ test platform with a built-in proctoring system using the user's camera preview. It ensures secure assessments with real-time monitoring, authentication, and timers. Users receive test results via email, making it ideal for educational institutions and recruiters seeking a scalable and user-friendly testing solution.
              </p>
              <div className=' w-auto flex text-white gap-4'>
                <p className='text-[#4061F7] w-auto whitespace-nowrap font-bold'>Tech Stack:</p>
                <ul className='flex w-auto gap-2 text-white whitespace-nowrap '>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                </ul>
              </div>
              <a className="flex w-auto h-auto gap-10 ">
              <a href='' target="_blank" className='h-8 w-15'>
                <img src={liveBtn} alt="Live" className="h-full w-full object-contain"/>
                </a>
                <a href='https://github.com/Lovedeep24/cipher-Schools-mcq-test-platform' target="_blank" className='h-8 w-8'>
                <img src={gitLogo} alt="Github" className="h-full w-full object-contain"/>
                </a>
              </a>
              </div>
            </motion.div>
          </div>


{/* /////////////////////////////////////////-----------------------------------------/ */}
        <div className='flex flex-col sm:flex-row gap:10 sm:gap-30 w-full h-auto'>
            <motion.div
              className="flex flex-col pt-4 pl-2 items-start sm:gap-7 self-stretch h-[100%] sm:w-[45%] w-[80%] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInLeft}
            >
              {/* <h1 className='sm:hidden'>01</h1> */}
              <p className="text-white text-xl lg:text-2xl font-bold">Vocal Edge</p>
              <div className='flex flex-col gap-7'>
              <p className="text-[#9B9B9B] text-base font-normal">
              VocalEdge is an AI-powered voice-based test platform where users take spoken assessments with real-time evaluation. It ensures test integrity through screen sharing and live proctoring. Users respond verbally, and their answers are analyzed for accuracy and relevance. With an interactive and adaptive testing approach, VocalEdge enhances the assessment experience for various skill-based evaluations.
              </p>
              <div className='w-auto flex text-white gap-4'>
                <p className='text-[#4061F7] w-auto whitespace-nowrap font-bold'>Tech Stack:</p>
                <ul className='flex w-auto gap-2 text-white whitespace-nowrap'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                </ul>
              </div>
              <a className="flex w-full h-auto gap-10 ">
                <a href='' target="_blank" className='h-8 w-15'>
                <img src={liveBtn} alt="Live" className="h-full w-full object-contain"/>
                </a>
                <a href='https://github.com/Lovedeep24/my_ways_ai' target="_blank" className='h-8 w-8'>
                <img src={gitLogo} alt="Github" className="h-full w-full object-contain"/>
                </a>
              </a>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-start gap-7 self-stretch  sm:h-[20rem] sm:w-[45%] w-[80%] h-[10rem] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInRight}
            >
              <img src={myways} alt="Project 1"  className="rounded-xl w-full h-full transition-transform duration-500 hover:[transform:perspective(1000px)_rotateY(-10deg)_rotateX(-10deg)]"/>
          </motion.div>
          </div>
{/* ----------------------------02---------------------------------------02---------------------------02------------------------------------ */}
          <div className='flex flex-col-reverse sm:flex-row w-full sm:gap-30'>
          <motion.div
               className="flex flex-col items-start gap-7 self-stretch mt-12 sm:h-[20rem] sm:w-[45%] w-[80%] h-[10rem] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInLeft}
            >
              <img src={logo} alt="Project 2" className="rounded-xl w-full h-full transition-transform duration-500 hover:[transform:perspective(1000px)_rotateY(10deg)_rotateX(-10deg)]"/>
            </motion.div>
          <motion.div
              className=" flex flex-col items-start sm:gap-7 pl-2 self-stretch mt-12 h-[100%] sm:w-[45%] w-[80%] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInRight}
            >
              {/* <h1>02</h1> */}
              <p className="text-white text-2xl font-bold  leading-10 tracking-tight">Adventurush</p>
              <div className='flex flex-col gap-7'>
              <p className="text-[#9B9B9B] text-base font-normal">
              AdventuRush is an adventure booking platform that lets users explore and book thrilling experiences like trekking, rafting, and more. With a seamless interface, secure payments, and real-time availability, it ensures hassle-free adventure planning. Users receive booking confirmations and details for a smooth and exciting journey.
              </p>
              <div className='w-auto flex text-white gap-4'>
                <p className='text-[#4061F7] w-auto whitespace-nowrap font-bold'>Tech Stack:</p>
                <ul className='flex w-auto gap-2 text-white whitespace-nowrap'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                </ul>
              </div>
              <a className="flex w-full h-auto gap-10 font-bold">
              <a href='' target="_blank" className='h-8 w-15'>
                <img src={liveBtn} alt="Live" className="h-full w-full object-contain"/>
                </a>
                <a href='https://github.com/Lovedeep24/Adventurush' target="_blank" className='h-8 w-8'>
                <img src={gitLogo} alt="Github" className="h-full w-full object-contain"/>
                </a>
              </a>
              </div>
            </motion.div>
          </div>



        </div>
      </div>
    </>
  );
}
