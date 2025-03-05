import React, { useRef } from "react";
import Navbar from "./Navbar";
import Body1 from "./Body1";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Pass scrollToContact function as a prop to Navbar */}
      <Navbar scrollToContact={scrollToContact} />
      <Body1 />
      <Skills />
      <Projects />
      {/* Assign ref to the Contact component wrapper */}
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
