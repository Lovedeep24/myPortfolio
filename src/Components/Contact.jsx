import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const[name, setName] = useState("");  
  const[email, setEmail] = useState("");
  const[subject, setSubject] = useState("");
  const[description, setDescription] = useState("");
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email)
    {
      toast.error("Email Required!",{className: "text-red"})
      return;
    }
    else if(!subject)
    {
        toast.error("Subject Required!",{className: "text-red"})
    }
    try {
        const response = await axios.post("http://localhost:4000/req", {
            email,
            name,
            subject,
            description
        });

        if (response.status === 200) {
            // alert("Request sent successfully");
            toast.success("Got it Will get back to you shortly",{className: "text-red"})
            // toast("This is a toast!")
            setDescription("");
            setEmail("");
            setSubject("");
            setName("");
        }
    } catch (error) {
        console.log("Error:", error);
        if(error.response)
        {
            if (error.response.status === 404) {
              toast.error("Something went wrong!",{className: "text-red"})
            } else {
                // alert("All Fields are required");
                toast.error("Something went wrong!",{className: "text-red"})
            }
        }
        
    }
};
  return (
    <>
       <Toaster position='top-center' />
        <div className="bg-[#0B0B0B] w-full h-auto flex flex-col-reverse sm:flex-row ">
            {/* <div > */}
             <motion.div
                        style={{ paddingLeft:'4rem',paddingTop: window.innerWidth < 640 ? '1rem' : '6rem', }} className="bg-[#0B0B0B] w-full sm:w-[50%] h-full px-[5rem] pr-[6.75rem] flex flex-col gap-5" 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={slideInLeft}
                        >
                    <form  onSubmit={handleSubmit} className='flex flex-col gap-5' >
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" style={{paddingLeft:'20px'}} className="bg-[#0B0B0B] flex w-[60%] sm:w-[80%] h-[2rem] sm:h-[3.5rem]  items-center rounded-[1.25rem] border-1 border-white text-[#9B9B9B] text-base font-normal leading-[1.25rem] "placeholder="Your name" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" style={{paddingLeft:'20px'}} className="bg-[#0B0B0B] flex w-[60%] sm:w-[80%] h-[2rem] sm:h-[3.5rem] items-center rounded-[1.25rem] border-1 border-white text-[#9B9B9B] text-base font-normal leading-[1.25rem]" placeholder="Email" />
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" style={{paddingLeft:'20px'}} className="bg-[#0B0B0B] flex w-[60%] sm:w-[80%] h-[2rem] sm:h-[3.5rem] items-center rounded-[1.25rem] border-1 border-white text-[#9B9B9B] text-base font-normal leading-[1.25rem]" placeholder="Subject" />
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" max={200} style={{paddingLeft:'20px'}} className="bg-[#0B0B0B] flex sm:w-[80%] w-[60%] h-[6rem] sm:h-[8.5rem] rounded-[1.25rem] border-1 border-white text-[#9B9B9B] text-base font-normal text-start"placeholder="How can i Help?" />
                    <button type='submit' className="w-[5.8125rem] sm:w-[80%] h-[2.5rem] text-white font-bold flex-shrink-0 rounded-[3.125rem] bg-[#0B0B0B] border-1 border-white hover:text-black hover:bg-white">Send</button>
                    </form>
                    </motion.div>
            {/* </div> */}
            <motion.div
                        //   className="flex flex-col items-start gap-7 self-stretch mt-12 sm:h-[20rem] sm:w-[45%] w-[80%] h-[10rem] rounded-xl overflow-hidden"
                        style={{paddingLeft:'4rem',paddingTop: window.innerWidth < 640 ? '3rem' : '10rem', }} className=" sm:w-[40%] w-full" 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={slideInRight}
                        >   
            <div className='flex flex-col gap-8 mt-4' >
                <h1  className="text-white text-5xl font-extrabold">Get in Touch</h1>
                <p className="text-[#9B9B9B] mt-[10%] text-base font-normal leading-[1.5rem] tracking-[0.02rem]">I seek to push the limits of creativity to create high-engaging,
                 user-friendly, and memorable interactive experiences.
                 </p>
                 <div className='flex flex-col gap-2'>
                 <p className="text-white mt-[6%] text-[1.75rem] font-semibold leading-[2rem] tracking-[-0.035rem]">lovedeep24253@gmail.com</p>
                 <p className="text-white text-[1.75rem] font-semibold leading-[2rem] tracking-[-0.035rem]">8295035820</p>  
                 </div>
            </div>
            </motion.div>
           
        </div> 
    </>
  )
}
