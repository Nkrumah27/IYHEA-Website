import React from 'react';
import TestimonialSlider from '../components/TestimonialSlider';
import { Page } from '../App';
import { bgImage, kaafLogo } from '@/assets';
import { groupImage } from '@/assets';
import { hostelImage } from '@/assets';
import { familyImage } from '@/assets'; 
import { kaafImage } from '@/assets';

interface HomeProps {
  navigate: (page: Page) => void;
}

// FIX: Changed JSX.Element to React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; iconClasses: string; children: React.ReactNode }> = ({ icon, title, iconClasses, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className={`flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 ${iconClasses}`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-teal-800">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);


const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Your Journey Begins Here</h1>
          <p className="text-lg md:text-2xl mt-4 max-w-3xl">Experience world-class academics at with IYHEA and deep cultural immersion in a safe, supportive community.</p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={() => navigate('The Exchange Program')} className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
              Explore the Program
            </button>
            <button onClick={() => navigate('Contact')} className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">Why Choose IYHEA Ghana?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard title="Guaranteed Safety" iconClasses="bg-teal-100 text-teal-600" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.984z" /></svg>}>
              24/7 support, secure housing, and comprehensive orientation to ensure your peace of mind.
            </FeatureCard>
            <FeatureCard title="Academic Excellence" iconClasses="bg-green-100 text-green-700" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>}>
              Earn credits at the prestigious KAAF University, a leader in innovation and research in Ghana.
            </FeatureCard>
            <FeatureCard title="Vibrant Community" iconClasses="bg-orange-100 text-orange-600" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}>
              Live with fellow international students or a local host family for a deep cultural immersion.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Accommodation & University Feature */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                 <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800">Your Home in Ghana</h2>
                    <p className="text-lg text-gray-600 mb-6">Choose between our modern, secure youth hostels or an immersive stay with a vetted Ghanaian host family. Both options provide a safe and welcoming environment for you to thrive.</p>
                    <button onClick={() => navigate('Accommodation')} className="text-teal-600 font-bold hover:text-teal-800 transition-colors">Learn about accommodation &rarr;</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src={hostelImage} alt="Hostel" className="rounded-lg shadow-lg object-cover w-full h-full"/>
                    <img src={familyImage} alt="Host Family" className="rounded-lg shadow-lg object-cover w-full h-full mt-8"/>
                </div>
            </div>
           {/* <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mt-20">
                <div className="lg:order-2 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800">A Partnership for Your Success</h2>
                    <p className="text-lg text-gray-600 mb-6">Our exclusive partnership with KAAF University College provides you access to top-tier academic programs, modern facilities, and a vibrant campus life alongside local Ghanaian students.</p>
                    <button onClick={() => navigate('Study at KAAF University')} className="text-teal-600 font-bold hover:text-teal-800 transition-colors">Discover KAAF University &rarr;</button>
                </div>
                <div className="lg:order-1 relative">
                    <img src={kaafImage} alt="KAAF University Campus" className="rounded-lg shadow-lg"/>
                     <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
                        <p className="font-bold text-lg">KAAF University</p>
                    </div>
                </div>
            </div>*/}
        </section>
         <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">A Partnership for Your Success</h2>
          <div className="grid md:grid-cols-3 gap-8 justify-center">
                  <div className="md:col-span-1 flex justify-center">

            <FeatureCard title="Kaaf University College" iconClasses="bg-teal-100 text-teal-600" icon={
              <img src={kaafLogo} alt="Guaranteed Safety"/>
              }>
            </FeatureCard>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-teal-700 bg-opacity-80" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')"}}>
        <div className="container mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Our Students Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: `url(${groupImage})` }}>
        <div className="absolute inset-0 bg-amber-500/90"></div>
        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for an Unforgettable Adventure?</h2>
          <p className="text-lg mt-2 mb-6">Your journey to Ghana is just a few clicks away.</p>
          <button onClick={() => navigate('Contact')} className="bg-white text-amber-600 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-all duration-300 transform hover:scale-105">
            Apply Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;