import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Styles/project.module.css';
import ReadMore from '../assets/ReadMore.png';
import Proj1 from '../assets/proj1.jpg';
import myways from '../assets/myways.png';
import adventurush from '../assets/adventurush.png';
import mcq from '../assets/mcq.png';
import logo from '../assets/logo.png';
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
{/* -----------------------------01-----------------------------01------------------------------------------01----------------------- */}
        <div className='flex flex-col sm:flex-row  gap:10 sm:gap-30 w-full h-auto'>
          <motion.div
              className="flex flex-col items-start gap-7 self-stretch mt-12 sm:h-[20rem] sm:w-[45%] w-[80%] h-[10rem] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInLeft}
            >
              <img src={myways} alt="Project 1"  className="rounded-xl w-full h-full transition-transform duration-500 hover:[transform:perspective(1000px)_rotateY(10deg)_rotateX(-10deg)]"/>
          </motion.div>
            <motion.div
              className="flex flex-col  items-start sm:gap-7 self-stretch h-[100%] sm:w-[45%] w-[80%] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInRight}
            >
              {/* <h1 className='sm:hidden'>01</h1> */}
              <p className="text-white text-xl lg:text-2xl font-bold">Vocal Edge</p>
              <div className='flex flex-col gap-7'>
              <p className="text-[#9B9B9B] text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium labore sapiente sed fuga sequi neque, doloribus
                libero molestias perspiciatis numquam, illo in ea, iste mollitia
                placeat assumenda veritatis modi aut?
              </p>
              <a className="flex w-10 h-auto">
                <img src={ReadMore} alt="Read More" />
              </a>
              </div>
            </motion.div>
          </div>
{/* ----------------------------02---------------------------------------02---------------------------02------------------------------------ */}
          <div className='flex flex-col-reverse sm:flex-row w-full sm:gap-30'>
          <motion.div
              className=" flex flex-col items-start sm:gap-7 self-stretch mt-12 h-[100%] sm:w-[45%] w-[80%] rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInLeft}
            >
              {/* <h1>02</h1> */}
              <p className="text-white text-2xl font-bold  leading-10 tracking-tight">Adventurush</p>
              <div className='flex flex-col gap-7'>
              <p className="text-[#9B9B9B] text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium labore sapiente sed fuga sequi neque, doloribus
                libero molestias perspiciatis numquam, illo in ea, iste mollitia
                placeat assumenda veritatis modi aut?
              </p>
              <a className="flex w-10 h-auto">
                <img src={ReadMore} alt="Read More" />
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
              <img src={logo} alt="Project 2" className="rounded-xl w-full h-full transition-transform duration-500 hover:[transform:perspective(1000px)_rotateY(-10deg)_rotateX(-10deg)]"/>
            </motion.div>
          </div>
{/* --------------------------------03-------------------------------------03------------------------------------------03----------------------- */}
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
              <p className="text-white text-2xl font-bold leading-10 tracking-tight">Crypto Screen Tracker</p>
              <div className='flex flex-col gap-7'>
              <p className="text-[#9B9B9B] text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium labore sapiente sed fuga sequi neque, doloribus
                libero molestias perspiciatis numquam, illo in ea, iste mollitia
                placeat assumenda veritatis modi aut?
              </p>
              <a className="flex w-10 h-auto ">
                <img src={ReadMore} alt="Read More" />
              </a>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </>
  );
}
