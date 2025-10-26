import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form data submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div>
            {/* Page Header */}
            <section className="relative bg-cover bg-center text-white py-24" style={{ backgroundImage: "url('https://picsum.photos/1200/400?random=29')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Get in Touch</h1>
                    <p className="text-xl mt-4 max-w-3xl mx-auto">Have questions? Ready to apply? We'd love to hear from you.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-teal-800 mb-6">Contact Information</h2>
                        <div className="space-y-4 text-gray-700">
                            <div className="flex items-start space-x-4">
                               <div className="text-teal-600 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                                <div><strong>Email:</strong><br /><a href="mailto:info@iyhea-ghana.org" className="hover:text-teal-600">info@iyhea-ghana.org</a></div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <div className="text-teal-600 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                                <div><strong>Phone:</strong><br />+233 12 345 6789</div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <div className="text-teal-600 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                                <div><strong>Address:</strong><br />123 University Avenue, Accra, Ghana</div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <h3 className="text-2xl font-bold text-teal-800 mb-4">Thank You!</h3>
                                <p className="text-gray-600">Your message has been sent. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-3xl font-bold text-teal-800 mb-6">Send us a Message</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 bg-gray-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 bg-gray-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 bg-gray-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 bg-gray-100"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-all duration-300">
                                            Start Your Journey
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;