
import React from 'react';

const CoreValueCard: React.FC<{ title: string; color: string; children: React.ReactNode }> = ({ title, color, children }) => (
    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
        <h3 className="text-xl font-bold text-teal-800 mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

interface StaffCardProps {
    image: string;
    name: string;
    title: string;
    social: {
        email?: string;
        linkedin?: string;
        facebook?: string;
        phone?: string;
    };
}

const StaffCard: React.FC<StaffCardProps> = ({ image, name, title, social }) => (
    <div className="text-center">
        <img src={image} alt={name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"/>
        <h4 className="text-lg font-bold text-teal-800">{name}</h4>
        <p className="text-gray-500">{title}</p>
        <div className="flex justify-center space-x-3 mt-3">
            {social.email && (
                <a href={`mailto:${social.email}`} className="text-gray-500 hover:text-teal-600 transition-colors" aria-label={`Email ${name}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
            )}
            {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-colors" aria-label={`${name}'s LinkedIn`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
            )}
            {social.facebook && (
                 <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-colors" aria-label={`${name}'s Facebook`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                 </a>
            )}
             {social.phone && (
                 <a href={`tel:${social.phone}`} className="text-gray-500 hover:text-teal-600 transition-colors" aria-label={`Call ${name}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </a>
            )}
        </div>
    </div>
);

const teamMembers: StaffCardProps[] = [
    {
        name: "Dr. Ama Serwaa",
        title: "Program Director",
        image: "https://picsum.photos/id/1005/200/200",
        social: {
            email: "ama.serwaa@iyhea-ghana.org",
            linkedin: "https://www.linkedin.com/in/amaserwaa",
            facebook: "https://www.facebook.com/amaserwaa",
            phone: "+233123456789"
        }
    },
    {
        name: "Kofi Mensah",
        title: "Student Coordinator",
        image: "https://picsum.photos/id/1011/200/200",
        social: {
            email: "kofi.mensah@iyhea-ghana.org",
            linkedin: "https://www.linkedin.com/in/kofimensah",
            phone: "+233123456789"
        }
    },
    {
        name: "Adjoa Ofori",
        title: "Housing Manager",
        image: "https://picsum.photos/id/1027/200/200",
        social: {
            email: "adjoa.ofori@iyhea-ghana.org",
            facebook: "https://www.facebook.com/adjoaofori",
            phone: "+233123456789"
        }
    },
    {
        name: "Yaw Boakye",
        title: "Cultural Liaison",
        image: "https://picsum.photos/id/1012/200/200",
        social: {
            email: "yaw.boakye@iyhea-ghana.org",
            linkedin: "https://www.linkedin.com/in/yawboakye",
            facebook: "https://www.facebook.com/yawboakye"
        }
    }
];

const About: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-teal-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Connecting the World's Youth</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">Through Community, Culture, and Academic Excellence in the heart of Ghana.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The INTERNATIONAL YOUTH HOSTELS EXCHANGE ASSOCIATION, founded on the principles of "IN HIS NAME ASKED", is dedicated to fostering global understanding and personal growth. We provide international students with a safe, immersive, and academically enriching exchange experience in Ghana.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to build bridges between cultures, create a vibrant and supportive community for our students, and empower them to become compassionate global citizens through a unique blend of study, cultural immersion, and community engagement.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=5" alt="Group of students" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoreValueCard title="Safety" color="border-teal-500">Your well-being is our paramount concern. We ensure a secure environment through vetted housing and 24/7 support.</CoreValueCard>
            <CoreValueCard title="Community" color="border-orange-500">We foster a sense of belonging among students, host families, and the local community.</CoreValueCard>
            <CoreValueCard title="Academic Excellence" color="border-green-600">Our partnership with KAAF University guarantees a high-quality, accredited educational experience.</CoreValueCard>
            <CoreValueCard title="Cultural Immersion" color="border-orange-500">We provide authentic opportunities to engage with and learn from the rich culture of Ghana.</CoreValueCard>
            <CoreValueCard title="Integrity" color="border-teal-500">We operate with transparency, honesty, and a strong ethical foundation in all that we do.</CoreValueCard>
            <CoreValueCard title="Support" color="border-green-600">From pre-departure to post-program, our dedicated team is here to guide and support you.</CoreValueCard>
          </div>
        </div>
      </section>
      
       {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-12">Meet Our Team</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {teamMembers.map(member => (
                    <StaffCard 
                        key={member.name}
                        name={member.name}
                        title={member.title}
                        image={member.image}
                        social={member.social}
                    />
                ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
