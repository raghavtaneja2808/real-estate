import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Icons ---
const PlusIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
);


// --- Reusable Accordion Item Component ---
const AccordionItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-800 py-6">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left"
            >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <PlusIcon className="w-6 h-6 text-violet-400" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


// --- Main FAQ Section Component ---
const FAQ = () => {
    // Questions tailored for a blockchain real estate website
    const faqs = [
        {
            question: "Why use cryptocurrency for real estate?",
            answer: "Using cryptocurrency allows for faster, more secure, and transparent transactions. By leveraging blockchain, we reduce the need for traditional banking intermediaries, which can lower fees and speed up the closing process significantly."
        },
        {
            question: "How is my property ownership secured on the blockchain?",
            answer: "Your property ownership is converted into a unique digital token (NFT) on the blockchain. This creates an immutable and publicly verifiable record of ownership that is cryptographically secured, preventing fraud and unauthorized transfers."
        },
        {
            question: "What is property tokenization?",
            answer: "Property tokenization is the process of converting the rights to a piece of real estate into a digital token on a blockchain. This allows for fractional ownership, meaning you can buy and sell shares of a property, making real estate investment more accessible and liquid."
        },
        {
            question: "Are crypto real estate transactions legally binding?",
            answer: "Yes. We work with legal experts to structure every transaction with smart contracts that are compliant with local real estate regulations. The final deed transfer is always recorded with the appropriate government authorities, ensuring full legal validity."
        }
    ];

    return (
        <section className="bg-black text-white py-20 ">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Find answers to common questions about BlockEstate's services, property tokenization, and the crypto real estate process.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
