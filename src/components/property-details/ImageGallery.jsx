import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Icons ---
const LeftArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

const RightArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const mainImage1 = images[currentIndex];
    const mainImage2 = images[(currentIndex + 1) % images.length]; // Second image is the next one in the array

    return (
        <div className="space-y-6">
            {/* Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
                {images.map((img, index) => (
                    <button 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden border-2 transition-all ${currentIndex === index ? 'border-violet-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Main Image Grid */}
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mainImage1}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-96 rounded-2xl overflow-hidden"
                        >
                            <img src={mainImage1} alt="Main property view 1" className="w-full h-full object-cover" />
                        </motion.div>
                    </AnimatePresence>
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={mainImage2}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-96 rounded-2xl overflow-hidden hidden md:block"
                        >
                            <img src={mainImage2} alt="Main property view 2" className="w-full h-full object-cover" />
                        </motion.div>
                    </AnimatePresence>
                </div>
                 {/* Navigation Buttons */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <button onClick={handlePrev} className="p-2 rounded-full text-white hover:bg-white/20 transition-colors">
                        <LeftArrowIcon />
                    </button>
                    <button onClick={handleNext} className="p-2 rounded-full text-white hover:bg-white/20 transition-colors">
                        <RightArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
