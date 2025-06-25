import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const[name, setName] = useState("");  
  const[email, setEmail] = useState("");
  const[subject, setSubject] = useState("");
  const[isloadindg, setisLoading] = useState(false);
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
      toast.error("Email Required!")
      return;
    }
    else if(!subject)
    {
        toast.error("Subject Required!")
    }
    else{
    try {
      setisLoading(true);
        const response = await axios.post("https://myportfolio-4-aidp.onrender.com/clients/req", {
          // const response = await axios.post("http://localhost:4000/clients/req", {
            email,
            name,
            subject,
            description
        });

        if (response.status === 200) {
            toast.success("Got Your Request Will get back to you")
            setisLoading(false);
            setDescription("");
            setEmail("");
            setSubject("");
            setName("");
        }
    }
    catch (error) {
        console.log("Error:", error);
        if(error.response)
        {
            if (error.response.status === 500) {
              toast.error("Something went wrong Request not Received!")
            } else {
                // alert("All Fields are required");
                toast.error("Something went wrong!")
            }
        }
        return setisLoading(false);
    }
  }
};
  return (
    <>
       <Toaster position='top-center' />
        <div className="bg-[#0B0B0B] w-full h-auto flex flex-col-reverse sm:flex-row ">
            {/* <div > */}
             <motion.div
              className="bg-[#0B0B0B] mt-20 w-full sm:w-[50%] h-full px-[5rem]  flex flex-col gap-5" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInLeft}
              >
                    <form  onSubmit={handleSubmit} className='flex flex-col gap-5 sm:items-center sm:justify-center' >
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="bg-[#0B0B0B] flex w-[90%] pl-5 sm:w-[100%] h-[2rem] sm:h-[3.5rem]  items-center rounded-[1rem] border-1 border-white text-[#9B9B9B] text-base font-normal leading-[1.25rem] "placeholder="Your name" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="bg-[#0B0B0B] flex w-[90%] pl-5 sm:w-[100%] h-[2rem] sm:h-[3.5rem] items-center rounded-[1rem] border-1 border-white text-[#9B9B9B] text-base font-normal leading-[1.25rem]" placeholder="Email*" />
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className="bg-[#0B0B0B] flex w-[90%] pl-5 sm:w-[100%] h-[2rem] sm:h-[3.5rem] items-center rounded-[1rem] border-1 border-white text-[#9B9B9B] text-base font-normal leading-[1.25rem]" placeholder="Subject*" />
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" maxLength={200}  className="bg-[#0B0B0B] pt-3 pl-5 flex sm:w-[100%] w-[90%] h-[6rem] sm:h-[8.5rem] rounded-[1rem] border-1 border-white text-[#9B9B9B] text-base font-normal text-start"placeholder="How can i Help?" />
                    <button type='submit' className="w-[40%] sm:w-[50%] h-[2rem] sm:h-[3rem] text-white font-bold flex-shrink-0 rounded-[1.75rem] bg-[#0B0B0B] border-1 border-white hover:text-black hover:bg-white">{isloadindg ? "Sending..." : "Send"}</button>
                    </form>
                    </motion.div>
            {/* </div> */}
            <motion.div
             className="mt-20 sm:w-[40%] w-full" 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={slideInRight}
             >   
            <div className='ml-17 flex flex-col gap-3 mt-4' >
                <h1  className="text-white text-5xl font-extrabold">Get in Touch</h1>
                <p className="text-[#9B9B9B] mt-[10%] text-lg font-normal leading-[1.5rem] tracking-[0.02rem]">I seek to push the limits of creativity to create high-engaging,
                 user-friendly, and memorable interactive experiences.
                 </p>
                 <div className='flex flex-col gap-2  w-auto'>
                 <p className="text-white mt-[6%] text-[1.75rem] font-semibold ">lovedeep24253@gmail.com</p>
                 <p className="text-white text-[1.75rem] font-semibold leading-[2rem] tracking-[-0.035rem]">8295035820</p>  
                 </div>
            </div>
            </motion.div>
           
        </div> 
    </>
  )
}
