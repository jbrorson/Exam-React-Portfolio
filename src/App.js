import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyTimeline from './components/MyTimeline';
import MyStack from './components/MyStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Dropdown from './components/Dropdown';
import './tailwind.output.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleProject from './components/SingleProject';


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
      <Router>
        <Navigation toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero />
        <MyTimeline />
        <MyStack />
        <Projects />
        <Switch />
        <Route path="/singleproject" exact component={SingleProject} />
        <Contact />
      </Router>
    </>
  );
}

export default App;