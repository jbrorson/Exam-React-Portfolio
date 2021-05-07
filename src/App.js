import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyStack from './components/MyStack';
import Contact from './components/Contact';
// import MyWork from './components/MyWork';
import Projects from './components/Projects';
import MyTimeline from './components/MyTimeline';

import './tailwind.output.css';
import Dropdown from './components/Dropdown';
// import GetToKnowMe from './components/GetToKnowMe';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log("I resizeeeedddd!!!!")
      }
    }
    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener('resized', hideMenu);
    };
  })

  return (
    <>
      <Navigation toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      {/* <GetToKnowMe /> */}
      <MyTimeline />
      <MyStack />
      {/* <MyWork /> */}
      <Projects />
      <Contact />
    </>
  );
}

export default App;