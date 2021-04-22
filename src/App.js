import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyStack from './components/MyStack';
import Contact from './components/Contact';
// import MyWork from './components/MyWork';
import Projects from './components/Projects';
import MyTimeline from './components/MyTimeline';

import './tailwind.output.css';

const App = () => (
  <div>
    <Navigation />
    <Hero />
    <MyTimeline />
    <MyStack />
    {/* <MyWork /> */}
    <Projects />
    <Contact />
  </div>
);

export default App;