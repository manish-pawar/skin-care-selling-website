import React, { useState } from "react";
import FAQImage from "../assets/FAQ-img1.jpg";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are your products suitable for sensitive skin?",
      answer:
        "Yes! All our products are made with gentle, natural ingredients and are dermatologist-tested to be safe for sensitive skin.",
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes! We are committed to providing cruelty-free products.",
    },
    {
      question: "Do your products contain parabens or sulfates?",
      answer:
        "No, our products are free from parabens, sulfates, and other harsh chemicals.",
    },
    {
      question: "How should I use your products?",
      answer:
        "Please refer to the instructions on the product packaging for the best results.",
    },
    {
      question: "Can I use these products if I have oily skin?",
      answer:
        "Absolutely! Our products are formulated to suit all skin types, including oily skin.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="py-16 bg-off-white-background">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Frequently Asked Questions
      </h2>
      
      <p className="text-gray-600 max-w-2xl text-center mx-auto mb-6">
        Have questions about our products? We’ve got answers! Discover
        everything you need to know about using our natural skincare products,
        their benefits, and how they fit into your routine.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-16 lg:px-32 py-4">
        {/* Image Section */}
        <div className="flex justify-center items-center h-64 md:h-80 lg:h-96">
          <img
            src={FAQImage}
            alt="Product"
            className="rounded-lg shadow-lg object-cover h-full w-full"
          />
        </div>
        {/* FAQ Section */}
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border ${
                openIndex === index ? "border-green-text-color" : "border-gray-200"
              } rounded-lg mb-4 shadow-md`}
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-gray-800 font-medium">
                  {faq.question}
                </span>
                <span
                  className={`text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
