import React from 'react';
import { motion } from "framer-motion";
import styles from '../Styles/skills.module.css';
import html from '../assets/HTML5.png';
import css from '../assets/Css.png';
import js from '../assets/javascript.png';
import react from '../assets/React.png';
import node from '../assets/nodejs.png';
import mongo from '../assets/mongodb.png';
import express from '../assets/express.png';
import next from '../assets/nextjs.png';
import tailwind from '../assets/tailwind.png';
import C from '../assets/C++.png';
const skills = [
  { id: "1", name: 'HTML5', icon: html },
  { id: "2", name: 'CSS', icon: css },
  { id: "3", name: 'JavaScript', icon: js },
  { id: "4", name: 'React', icon: react },
  { id: "5", name: 'Node.Js', icon: node },
  { id: "6", name: 'Next.Js', icon: next },
  { id: "7", name: 'Mongo DB', icon: mongo },
  { id: "8", name: 'Express.Js', icon: express },
  { id: "9", name: 'Tailwind', icon: tailwind },
  { id: "10", name: 'C++', icon: C },
];
const slideInFromBottomVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function Skills() {
  return (
    <>
      <div className="bg-[#131313] w-full h-auto">
        <div className="ml-12 pt-8 flex h-16 w-[18%]">
          <hr style={{marginTop:'40px',marginLeft:'20px'}} className="inline-block bg-white w-[0.125rem] h-[3.1875rem] rotate-180 flex-shrink-0"/>
          <p style={{marginTop:'50px', marginLeft:'10px'}} className=" text-white w-full text-center  text-3xl font-mediumcapitalize">
            My <span>Skills</span>
          </p>
        </div>
        <div style={{marginLeft: '100px', marginTop:'100px'}} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 border-amber-500">
          {skills.map((skill) => {
            return (
              <motion.div
                 className="w-[80%] h-[80%] p-2 flex justify-center items-center transition-all duration-200 ease-in-out"
                key={skill.id}
                variants={slideInFromBottomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div  className="group w-[8rem] h-[9rem] sm:w-[18rem] sm:h-[10rem]  p-6 flex flex-col justify-center items-center gap-8 rounded-xl bg-white relative overflow-hidden transition-all duration-500 hover:scale-105">
                <img src={skill.icon} alt="skill"  className= "ml-[25%] h-[45%] w-[40%] sm:h-[35%] sm:w[20%] transition-transform duration-500" />
                <p className="mt-[20%] text-black text-center text-xl font-semibold transition-colors duration-300 tracking-tight capitalize ">{skill.name}</p>
                </div> 
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
} 
