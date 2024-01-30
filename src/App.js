// App.js

import React from 'react';

import './App.css';
import BookingForm from './Components/BookingForm';

import HeroSection from './Components/HeroSection';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    
    <div className="app">
    <HeroSection/>
    <BookingForm/>
    <Testimonials/>
     
    </div>
  );
}

export default App;