import { JourneyImage, arrival, academic, tour, community, support } from '@/assets';
import React from 'react';

const TimelineStep: React.FC<{ number: number; title: string; image: string; children: React.ReactNode }> = ({ number, title, image, children }) => (
    <div className="flex items-center w-full my-6 -ml-1.5">
        <div className="w-1/12 z-10">
            <div className="w-10 h-10 bg-teal-600 rounded-full text-white flex items-center justify-center font-bold text-lg">{number}</div>
        </div>
        <div className="w-11/12">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div>
                    <h3 className="text-2xl font-bold text-teal-800 mb-3">{title}</h3>
                    <p className="text-gray-600">{children}</p>
                </div>
                <img src={image} alt={title} className="rounded-lg object-cover w-full h-48" />
            </div>
        </div>
    </div>
);

const Program: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            {/*<section className="relative bg-teal-700 text-white py-20 text-center" style={{ backgroundImage: `url()`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
                <div className="bg-black/50 absolute inset-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold">A Structured Journey of Discovery</h1>
                    <p className="text-xl mt-4 max-w-3xl mx-auto">From arrival to departure, your experience is thoughtfully planned to maximize learning, growth, and enjoyment.</p>
                </div>
            </section>*/}
             <section className="bg-teal-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">A Structured Journey of Discovery</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">From arrival to departure, your experience is thoughtfully planned to maximize learning, growth, and enjoyment.</p>
        </div>
      </section>

            {/* Timeline Section */}
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <div className="relative">
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '1.2rem' }}></div>

                        <TimelineStep number={1} title="Arrival & Orientation" image={arrival}>
                            You'll be greeted at the airport by our friendly staff and transported to your new home. Our comprehensive orientation week covers everything from cultural norms and safety to navigating campus and the city of Accra.
                        </TimelineStep>

                        <TimelineStep number={2} title="Academic Life" image={academic}>
                            Immerse yourself in your studies at KAAF University. You'll attend classes alongside Ghanaian students, engage with expert faculty, and have access to the university's modern library and campus facilities.
                        </TimelineStep>

                        <TimelineStep number={3} title="Cultural Excursions" image={tour}>
                            Explore the beauty and history of Ghana with our curated excursions. Visit historic slave castles, vibrant markets, lush rainforests, and beautiful beaches. These trips are designed to deepen your understanding of the country.
                        </TimelineStep>

                        <TimelineStep number={4} title="Community Engagement" image={community}>
                            Get involved with the local community through volunteer opportunities and cultural workshops. Learn traditional drumming and dancing, participate in a local service project, and build meaningful connections.
                        </TimelineStep>

                        <TimelineStep number={5} title="Ongoing Support" image={support}>
                           Throughout your journey, our in-country team is always available to provide support. From academic advice and personal well-being checks to simply being a friendly face, we are here to ensure your experience is positive and successful.
                        </TimelineStep>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;