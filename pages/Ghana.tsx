
import { foodImage, homowoImage, kwameImage, castleImage } from '@/assets';
import React from 'react';

interface GhanaProps {
    selectCategory: (category: string) => void;
}

const ImageCard: React.FC<{ image: string; title: string; onClick: () => void; }> = ({ image, title, onClick }) => (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer" onClick={onClick}>
        <img src={image} alt={title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
    </div>
);


const Ghana: React.FC<GhanaProps> = ({ selectCategory }) => {
    const categories = [ { title: "Tourist Sites", image: castleImage },
    { title: "Food & Cuisine", image: foodImage },
    { title: "Culture & Festivals", image: homowoImage },
    { title: "The People", image: homowoImage },
    { title: "Nature & Wildlife", image: kwameImage },
    { title: "Vibrant Markets", image: kwameImage },];

    return (
        <div>
            {/* Page Header */}
            <section className="relative bg-cover bg-center text-white py-28 text-center" style={{ backgroundImage: `url()` }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Explore the Vibrant Heart of West Africa</h1>
                    <p className="text-xl mt-4 max-w-3xl mx-auto">Discover a land of rich history, diverse cultures, stunning landscapes, and the warmest hospitality.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                             <ImageCard 
                                key={cat}
                                image={cat.image} 
                                title={cat.title} 
                                onClick={() => selectCategory(cat.title)}
                             />
                        ))}
                    </div>
                    <div className="mt-16 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-teal-800 mb-4">A Country of Contrasts</h2>
                        <p className="text-gray-600 leading-relaxed">
                            From the bustling energy of Accra to the tranquil beaches of the coast and the historic weight of the Cape Coast castles, Ghana offers an incredible diversity of experiences. As an IYHEA student, you'll have the chance to explore it all through our planned excursions and your own adventures. Get ready to taste delicious jollof rice, learn some Twi, and feel the rhythm of Ghanaian life.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ghana;
