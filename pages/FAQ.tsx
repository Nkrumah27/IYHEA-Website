
import React from 'react';
import FAQItem from '../components/FAQItem';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-teal-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Everything You Need to Know</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">Find answers to common questions about our program, safety, travel, and life in Ghana.</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {FAQ_DATA.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-orange-500 pb-2">{category.category}</h2>
              <div>
                {category.items.map((item, index) => (
                  <FAQItem key={index} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;