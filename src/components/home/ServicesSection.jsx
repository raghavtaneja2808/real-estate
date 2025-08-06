import React from 'react';

// --- SVG Icons for the cards ---
// Each icon is a separate component for clarity.

const HomeIcon = () => (
    <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);

const ValueIcon = () => (
    <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);

const ManagementIcon = () => (
    <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-4h1m-1 4h1"></path></svg>
);

const InvestmentIcon = () => (
    <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
);

const ArrowIcon = () => (
    <svg className="w-6 h-6 text-gray-500 group-hover:text-violet-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M5 12h13"></path></svg>
);


// --- Reusable Service Card Component ---
const ServiceCard = ({ icon, title }) => (
    <div className="bg-[#121212] p-8 rounded-2xl group transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-2 cursor-pointer">
        <div className="relative flex flex-col items-start gap-6">
            <div className="relative w-20 h-20">
                {/* Spinning border element */}
                <div className="absolute inset-0 border-2 border-violet-800/50 rounded-full"></div>
                <div className="absolute inset-0 rounded-full animate-spin-slow group-hover:animate-spin-fast" style={{ border: '2px solid transparent', borderTopColor: '#A855F7', borderRightColor: '#A855F7' }}></div>
                
                {/* Icon in the center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
            <div className="absolute top-0 right-0">
                <ArrowIcon />
            </div>
        </div>
    </div>
);


// --- Main Services Section Component ---
const ServicesSection = () => {
    const services = [
        { icon: <HomeIcon />, title: "Find Your Dream Home" },
        { icon: <ValueIcon />, title: "Unlock Property Value" },
        { icon: <ManagementIcon />, title: "Effortless Property Management" },
        { icon: <InvestmentIcon />, title: "Smart Investments: Informed Decisions" }
    ];

    return (
        // The border has been removed from the main section tag
        <section className="bg-black pt-20 sm:pt-28 pb-16 sm:pb-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} title={service.title} />
                    ))}
                </div>

                {/* This div creates the shorter line inside the content area */}
                <div className="mt-16 sm:mt-20">
                    <div className="border-t border-gray-800"></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
