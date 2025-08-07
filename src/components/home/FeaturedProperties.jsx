import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProperties } from '../../context/PropertyContext';
import { motion, AnimatePresence } from 'framer-motion'; // <-- Import animation libraries

// --- SVG Icons for property details ---
const BedIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
);

const BathIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6z"></path></svg>
);

const VillaIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"></path></svg>
);

// --- New SVG Icons for Pagination ---
const LeftArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

const RightArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


// --- Reusable Property Card Component ---
const PropertyCard = ({ property }) => (
    <div className="bg-[#181818] rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-violet-800/20">
        <div className="overflow-hidden">
            {/* Use the first image from the images array */}
            <img src={property.images[0]} alt={property.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-white">{property.title}</h3>
            {/* Use Link for navigation */}
            <p className="text-gray-400 text-sm leading-relaxed">{property.description.substring(0, 100)}... <Link to={`/properties/${property.id}`} className="text-violet-400 hover:underline">Read More</Link></p>
            
            {/* Property Details */}
            <div className="flex items-center space-x-6 text-gray-400 text-sm border-t border-gray-800 pt-4">
                <div className="flex items-center gap-2"><BedIcon /><span>{property.bedrooms}-Bedroom</span></div>
                <div className="flex items-center gap-2"><BathIcon /><span>{property.bathrooms}-Bathroom</span></div>
                <div className="flex items-center gap-2"><VillaIcon /><span>Villa</span></div>
            </div>

            {/* Price and Action Button */}
            <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-xl font-bold text-white">{property.price}</p>
                </div>
                {/* Use Link for navigation */}
                <Link to={`/properties/${property.id}`} className="px-5 py-2 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">
                    View Property Details
                </Link>
            </div>
        </div>
    </div>
);


// --- Main Featured Properties Section Component ---
const FeaturedProperties = () => {
    const { properties } = useProperties();
    const [currentPage, setCurrentPage] = useState(0);
    
    const propertiesArray = Object.values(properties);
    const propertiesPerPage = 3;
    const totalPages = Math.ceil(propertiesArray.length / propertiesPerPage);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const startIndex = currentPage * propertiesPerPage;
    const currentProperties = propertiesArray.slice(startIndex, startIndex + propertiesPerPage);

    // Animation variants for the container and cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section className="bg-black text-white py-20 sm:py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div className="max-w-xl mb-6 md:mb-0">
                        {/* Added Logo Image */}
                        <img 
                            src="https://static.vecteezy.com/system/resources/thumbnails/067/163/704/small_2x/3d-icon-thai-baht-coin-png.png" 
                            alt="Crypto Coin Logo"
                            className="w-30 h-20 mb-4"
                        />
                        <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
                        <p className="text-gray-400">
                            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through BlockEstate. Click "View Details" for more information.
                        </p>
                    </div>
                    <Link to="/properties" className="px-5 py-2 border border-gray-600 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
                        View All Properties
                    </Link>
                </div>

                {/* Properties Grid with Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage} // This key tells AnimatePresence to animate when the page changes
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {currentProperties.map((prop) => (
                            <motion.div key={prop.id} variants={cardVariants}>
                                <PropertyCard property={prop} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Controls */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
                    <p className="text-gray-400 font-medium">
                        {String(startIndex + 1).padStart(2, '0')} <span className="text-gray-600">of {String(propertiesArray.length).padStart(2, '0')}</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={handlePrev}
                            className="p-2 rounded-full border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <LeftArrowIcon />
                        </button>
                        <button 
                            onClick={handleNext}
                            className="p-2 rounded-full border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <RightArrowIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
