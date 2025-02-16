import React from 'react'
import Navbar from './Navbar';
import Body1 from './Body1';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
export default function Home() {
  return (
    <div>
       <Navbar/>
       <Body1/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}
