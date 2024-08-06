"use client"

import { useState } from 'react';

const CTAFAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the main focus of the 'Learn to Excel as a Data Entry Expert, Researcher, or Metadata Specialist' sprint masterclass?",
            answer: "The main focus of the  sprint masterclass is to equip learners with the essential skills and knowledge to thrive in data-centric roles.These include: Accurate and efficient data input, verification, and cleaning techniques. Conducting thorough research, analyzing data, and drawing meaningful insights. Understanding and applying metadata standards, creating and managing metadata records. By the end of the masterclass, participants will be proficient in handling data, conducting research, and organizing information effectively."
        },
        {
            question: "What are the prerequisites for enrolling in this masterclass?",
            answer: "You will need access to WhatsApp and a smartphone. You will need a laptop and Internet to join zoom. However, the class is designed to accommodate learners at various levels including beginners, ensuring that everyone can benefit."
        },
        {
            question: "How can this masterclass enhance my career prospects?",
            answer: "By mastering Data entry, Research and Metadata, you'll be better equipped to take on advanced roles in project development, stand out to employers, and potentially earn more through freelancing or other opportunities."
        },
        {
            question: "Will there be practical projects or hands-on exercises included in the masterclass?",
            answer: "Yes, the masterclass includes hands-on exercises and a capstone project that will allow you to apply the skills you’ve learned, build your portfolio, and increase your market value as an expert or a specialist."
        },
        {
            question: "What kind of projects will I do in the masterclass?",
            answer: "The focus is on practical application. You'll use your newfound skills to capture data for open-source and real-world project during the capstone, showcasing your abilities to potential employers or freelance clients."
        },
        {
            question: "How much time commitment is required for the masterclass?",
            answer: "The beauty of a sprint format is its efficiency! The class is designed to be completed within few days and followed up within a focused timeframe, allowing you to fit learning into your busy schedule."
        },
        {
            question: "Is there any certification offered upon completion?",
            answer: "While there's no formal certification, you'll gain valuable skills and a capstone project to showcase your competency. This is a powerful addition to your portfolio. Besides, you will get certified as DataOrb IQ expert."
        },
        {
            question: "More Questions?",
            answer: "For more questions and inquiries, WhatsApp +234 or email jetroolowole@gmail.com"
        }
    ];

    const toggleFAQ = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 py-8 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
            <div className="text-center">
                <h4 className="text-xl font-semibold">Frequently Asked Questions</h4>
            </div>
            <div className="mt-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className="bg-gray-200 rounded-lg p-4 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex items-center justify-between">
                                <h6 className="text-2xl font-semibold">{faq.question}</h6>
                                <svg
                                    className={`w-6 h-6 transition-transform transform ${
                                        activeIndex === index ? 'rotate-180' : ''
                                    }`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a1 1 0 01-.707-.293l-8-8a1 1 0 111.414-1.414L10 15.586l7.293-7.293a1 1 0 111.414 1.414l-8 8A1 1 0 0110 18z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            className={`overflow-hidden transition-max-height duration-500 ${
                                activeIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                        >
                            <div className="bg-gray-100 p-4">
								<p className="text-2xl">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <p>Need more questions? Please feel free to contact me at <a href="https://bit.ly/smart-coder" target="_blank">WhatsApp SmartCoders</a></p>
            </div>
        </div>
    );
};

export default CTAFAQSection;

