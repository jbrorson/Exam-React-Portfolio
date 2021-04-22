import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyStack from './components/MyStack';
import Contact from './components/Contact';
import MyWork from './components/MyWork';
import Projects from './components/Projects';
import './tailwind.output.css';

const App = () => (
  <div>
    <Navigation />
    <Hero />
    <MyStack />
    {/* <MyWork /> */}
    <Projects />
    <Contact />
  </div>
);

export default App;