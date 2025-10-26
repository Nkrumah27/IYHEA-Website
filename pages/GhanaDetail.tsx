
import React from 'react';
import { GHANA_DETAILS } from '../constants';

interface GhanaDetailProps {
    category: string;
    goBack: () => void;
}

const GhanaDetail: React.FC<GhanaDetailProps> = ({ category, goBack }) => {
    const items = GHANA_DETAILS[category] || [];

    return (
        <div>
             <section className="bg-teal-700 text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold">{category}</h1>
                    <p className="text-xl mt-4 max-w-3xl mx-auto">Discover the sights, sounds, and tastes of Ghana.</p>
                </div>
            </section>
            
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <button onClick={goBack} className="bg-white px-4 py-2 rounded-md shadow hover:bg-gray-50 transition-colors text-teal-600 font-bold">
                            &larr; Back to Discover Ghana
                        </button>
                    </div>

                    <div className="space-y-10">
                        {items.length > 0 ? (
                            items.map(item => (
                                <div key={item.name} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                                    <img src={item.image} alt={item.name} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
                                    <div className="p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold text-teal-800 mb-3">{item.name}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                             <div className="text-center text-gray-600 bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-teal-800 mb-3">Content Coming Soon!</h3>
                                <p>Details for the '{category}' category are being curated and will be available shortly.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GhanaDetail;
