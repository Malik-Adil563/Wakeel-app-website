/* eslint-disable quotes */
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import faqData from '../Data/faqData';

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <div className="global-spacer global-bg header-setting">
        <div className="global-spacer blog-post-heading">Frequently Asked Questions</div>
      </div>

      <div className="global-container">
        <h2 className="faqs-title global-heading">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <button className={`accordion ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                {faq.question}
                <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}>
                  <FaAngleDown />
                </span>
              </button>

              <div className={`panel ${activeIndex === index ? 'open' : ''}`}>
                <p className="faq-answer global-paragraph">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
