import {  hostelImage, hostelImage1, hostelImage2, hostelImage3, familyImage, familyImage1, familyImage2, familyImage3 } from '@/assets';
import React from 'react';

const Accommodation: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
           {/* <section className="relative bg-cover bg-center text-white py-24 text-center" style={{ backgroundImage: `url()` }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Safe, Comfortable, and Community-Focused Living</h1>
                    <p className="text-xl mt-4 max-w-3xl mx-auto">Your home away from home in Ghana, designed for your comfort and safety.</p>
                </div>
            </section>*/}
             <section className="bg-teal-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Safe, Comfortable, and Community-Focused Living</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">Your home away from home in Ghana, designed for your comfort and safety.</p>
        </div>
      </section>

            {/* International Youth Hostels Section 
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-teal-800 mb-4">International Youth Hostels</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our modern youth hostels are the perfect choice for students looking for a vibrant, social, and supportive community. Located in secure, gated neighborhoods, you'll live with fellow international students, creating a dynamic and multicultural environment.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>24/7 on-site security and staff</li>
                            <li>Shared rooms with modern bunk beds</li>
                            <li>Fully equipped communal kitchens and dining areas</li>
                            <li>Comfortable lounges and study spaces with Wi-Fi</li>
                            <li>Organized social events and activities</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={hostelImage1} alt="Hostel room" className="rounded-lg shadow-md object-cover w-full h-full" />
                        <img src={hostelImage} alt="Hostel common area" className="rounded-lg shadow-md object-cover w-full h-full" />
                        <img src={hostelImage2} alt="Hostel exterior" className="rounded-lg shadow-md object-cover w-full h-full" />
                        <img src={hostelImage3} alt="Students in hostel" className="rounded-lg shadow-md object-cover w-full h-full" />
                    </div>
                </div>
            </section>*/}

             {/* International Youth Hostels Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-teal-800 mb-4">Vetted Host Families</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            For the ultimate cultural immersion, choose to live with one of our carefully selected Ghanaian host families. You'll become part of a local family, share home-cooked meals, practice the local language, and experience daily life in Ghana firsthand.                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Rigorous screening and background checks for all families</li>
                            <li>Private, comfortable room in a family home</li>
                            <li>Daily meals shared with the family</li>
                            <li>Unparalleled opportunity for language and cultural learning</li>
                            <li>A warm, supportive, and authentic home environment</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={familyImage3} alt="Hostel room" className="rounded-lg shadow-md object-cover w-full h-full" />
                        <img src={familyImage} alt="Hostel common area" className="rounded-lg shadow-md object-cover w-full h-full" />
                        <img src={familyImage1} alt="Hostel exterior" className="rounded-lg shadow-md object-cover w-full h-full" />
                        <img src={familyImage2} alt="Students in hostel" className="rounded-lg shadow-md object-cover w-full h-full" />
                    </div>
                </div>
            </section>

            {/* Vetted Host Families Section 
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-4 md:order-1">
                        <img src={familyImage} alt="Smiling host family" className="rounded-lg shadow-md object-cover w-full h-full" />
                        <img src={familyImage1} alt="Home cooked meal" className="rounded-lg shadow-md object-cover w-full h-full" />
                         <img src={familyImage2} alt="A family home" className="rounded-lg shadow-md object-cover w-full h-full col-span-2" />
                    </div>
                    <div className="md:order-2">
                        <h2 className="text-3xl font-bold text-teal-800 mb-4">Vetted Host Families</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            For the ultimate cultural immersion, choose to live with one of our carefully selected Ghanaian host families. You'll become part of a local family, share home-cooked meals, practice the local language, and experience daily life in Ghana firsthand.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Rigorous screening and background checks for all families</li>
                            <li>Private, comfortable room in a family home</li>
                            <li>Daily meals shared with the family</li>
                            <li>Unparalleled opportunity for language and cultural learning</li>
                            <li>A warm, supportive, and authentic home environment</li>
                        </ul>
                    </div>
                </div>
            </section>*/}
        </div>
    );
};

export default Accommodation;
