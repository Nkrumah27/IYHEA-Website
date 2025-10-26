
import React, { useState } from 'react';
import { FaqItem as FaqItemType } from '../types';

interface FAQItemProps {
  item: FaqItemType;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-semibold text-gray-800">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
           </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="pb-5 pr-10 text-gray-600">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
