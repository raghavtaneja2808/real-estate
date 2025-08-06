import React from 'react';
import { Link } from 'react-router-dom';

const CircularText = () => (
    <div className="absolute top-1/2 left-full -translate-y-1/2 ml-12 hidden lg:block">
        {/* The container is now static */}
        <div className="relative w-32 h-32">
            {/* The SVG itself now has the spinning animation */}
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>

            </svg>
          
        </div>
    </div>
);

const Hero = () => {
    const stats = [
        { value: "200+", label: "Happy Customers" },
        { value: "10k+", label: "Properties For Clients" },
        { value: "16+", label: "Years of Experience" }
    ];

    const imageUrl = "https://southcoastimprovement.com/wp-content/uploads/2025/03/wpce-aslxk-683x1024.jpg";

    return (
        <div className="py-20 relative bg-black text-white min-h-screen flex items-center">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={imageUrl} alt="Modern skyscrapers" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side Content */}
                    <div className="space-y-8 relative">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Discover Your Dream Property with <span className="text-violet-400">BlockEstate</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-lg">
                            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#" className="px-6 py-3 border border-gray-600 rounded-md text-center hover:bg-gray-800 transition-colors">
                                Learn More
                            </a>
                            <Link to='/properties' className='px-6 py-3 bg-violet-600 rounded-md text-center hover:bg-violet-700 transition-colors'>
                                Browse Properties
                        
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-8">
                            {stats.map(stat => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold">{stat.value}</p>
                                    <p className="text-sm text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <CircularText />
                    </div>
                    
                    {/* Right side is empty to show the background image */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
