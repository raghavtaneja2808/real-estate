import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Icons ---
const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);

const LocationIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

const PropertyTypeIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"></path></svg>
);

const PriceIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"></path></svg>
);

const SizeIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"></path></svg>
);

const BuildYearIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);

const ChevronDownIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

// --- Reusable Filter Dropdown Component ---
const FilterDropdown = ({ icon, label, options, selectedValue, isOpen, onToggle, onSelect }) => (
    <div className="relative">
        <button 
            onClick={onToggle}
            className="flex items-center justify-between w-full p-4 bg-[#1e1e1e] rounded-lg text-left"
        >
            <div className="flex items-center gap-3">
                {icon}
                <span className="text-gray-300 text-sm">{selectedValue || label}</span>
            </div>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDownIcon />
            </motion.div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 10 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 w-full bg-[#1e1e1e] border border-gray-700 rounded-lg mt-2 z-10 overflow-hidden"
                >
                    {options.map(option => (
                        <button 
                            key={option}
                            onClick={() => onSelect(option)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-violet-600"
                        >
                            {option}
                        </button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);


// --- Main Property Search Component ---
const PropertySearch = ({ onSearch }) => {
    const navigate = useNavigate();
    const [openFilter, setOpenFilter] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const filters = [
        { icon: <LocationIcon />, label: "Location", options: ["New York, NY", "Miami, FL", "Los Angeles, CA", "Houston, TX", "Aspen, Colorado"] },
        { icon: <PropertyTypeIcon />, label: "Property Type", options: ["House", "Apartment", "Villa", "Condo", "Chalet", "Loft"] },
        { icon: <PriceIcon />, label: "Pricing Range", options: ["$0 - $1M", "$1M - $2M", "$2M - $3M", "$3M+"] },
        { icon: <SizeIcon />, label: "Property Size", options: ["< 2000 sqft", "2000 - 3000 sqft", "3000 - 4000 sqft", "> 4000 sqft"] },
        { icon: <BuildYearIcon />, label: "Build Year", options: ["After 2020", "2010 - 2020", "2000 - 2010", "Before 2000"] }
    ];

    const handleToggle = (label) => {
        setOpenFilter(openFilter === label ? null : label);
    };

    const handleSelect = (label, option) => {
        const newFilters = { ...selectedFilters, [label]: option };
        setSelectedFilters(newFilters);
        setOpenFilter(null);
    };

    const handleSearchClick = () => {
        const queryParams = new URLSearchParams();
        if (searchTerm) {
            queryParams.append('q', searchTerm);
        }
        for (const [key, value] of Object.entries(selectedFilters)) {
            queryParams.append(key, value);
        }
        
        navigate(`/search?${queryParams.toString()}`);
    };

    return (
        <section className="bg-black text-white py-20 sm:py-24">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
                {/* Header Text */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Property</h1>
                    <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
                        Welcome to BlockEstate, where your dream property awaits. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life.
                    </p>
                </div>

                {/* Main Search Bar - Updated for Mobile */}
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:relative gap-3">
                        <input 
                            type="text"
                            placeholder="Search For A Property"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-[#181818] border border-gray-700 rounded-lg py-3 pl-6 sm:pr-48 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                        <button 
                            onClick={handleSearchClick}
                            className="w-full sm:w-auto sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                        >
                            <SearchIcon />
                            <span className="sm:inline">Find Property</span>
                        </button>
                    </div>
                </div>

                {/* Filter Dropdowns */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {filters.map((filter) => (
                        <FilterDropdown 
                            key={filter.label} 
                            icon={filter.icon} 
                            label={filter.label}
                            options={filter.options}
                            selectedValue={selectedFilters[filter.label]}
                            isOpen={openFilter === filter.label}
                            onToggle={() => handleToggle(filter.label)}
                            onSelect={(option) => handleSelect(filter.label, option)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertySearch;
