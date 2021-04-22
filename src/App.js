import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyStack from './components/MyStack';
import Contact from './components/Contact';
import './tailwind.output.css';

const App = () => (
  <div>
    <Navigation />
    <Hero />
    <MyStack />
    <Contact />
  </div>
);

export default App;