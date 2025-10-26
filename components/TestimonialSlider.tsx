
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
      <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white transition-all ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white transition-all mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="transition-opacity duration-500 ease-in-out">
        <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-amber-400" />
        <p className="text-lg italic text-gray-600">"{currentTestimonial.quote}"</p>
        <div className="mt-4">
          <p className="font-bold text-teal-700 text-xl">{currentTestimonial.name}</p>
          <p className="text-gray-500">{currentTestimonial.program}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;