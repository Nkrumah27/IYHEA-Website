
import { AccomodationImage, HomeImage1, kaafLogo, kaafImage } from '@/assets';
import React from 'react';

const BenefitCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-teal-800 mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

const University: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="relative bg-cover bg-center text-white py-24" style={{ backgroundImage: `url(${kaafImage})` }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold">Academic Excellence at a Leading Ghanaian University</h1>
                        <p className="text-xl mt-4">Partnering with KAAF University College to provide you with a world-class education.</p>
                    </div>
                </div>
            </section>

            {/* Partnership Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                       <div className="flex items-center space-x-3 cursor-pointer" >
                                 <img src={kaafLogo} className="h-[70px]"/>
                               </div>
                        
                        <h2 className="text-3xl font-bold text-teal-800 mb-4">Our Valued Academic Partner</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            KAAF University College is a premier private university in Ghana, renowned for its commitment to academic excellence, innovation, and producing career-ready graduates. Through our exclusive partnership, IYHEA students gain full access to their accredited programs and vibrant campus community.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            This collaboration allows you to take a wide range of courses, from business and engineering to arts and health sciences, all taught in English by distinguished faculty. You will earn transferable credits while experiencing a new and dynamic academic environment.
                        </p>
                    </div>
                    <div>
                        <img src={kaafImage} alt="Students at KAAF University" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">Benefits of Studying at KAAF</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <BenefitCard title="Accredited Programs">
                            Choose from a variety of courses that are fully accredited and recognized internationally, ensuring your credits transfer back to your home university.
                        </BenefitCard>
                        <BenefitCard title="Modern Facilities">
                            Study in state-of-the-art classrooms, well-equipped labs, and a comprehensive library. The campus is designed to support your academic success.
                        </BenefitCard>
                        <BenefitCard title="Vibrant Campus Life">
                            Join student clubs, participate in sports, and attend campus events. You'll build friendships with Ghanaian students and become part of the university community.
                        </BenefitCard>
                        <BenefitCard title="Expert Faculty">
                            Learn from experienced professors and lecturers who are leaders in their fields and dedicated to student mentorship and success.
                        </BenefitCard>
                        <BenefitCard title="Cross-Cultural Classroom">
                            Experience diverse perspectives and teaching styles, enriching your academic journey and broadening your worldview.
                        </BenefitCard>
                        <BenefitCard title="Official Transcript">
                            Receive an official transcript from KAAF University College upon successful completion of your semester or year abroad.
                        </BenefitCard>
                    </div>
                     <div className="text-center mt-12">
                         <a href="#" target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-all duration-300">
                            Visit KAAF University's Website
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default University;
