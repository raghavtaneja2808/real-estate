import React from 'react';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
    return (
        <div className="relative">
            {/* Add a keyframe animation for the spinning text */}
            <style>
                {`
                    @keyframes spin-slow {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .animate-spin-slow {
                        animation: spin-slow 20s linear infinite;
                    }
                `}
            </style>
            
            <Navbar />
            <main>
                <Hero />
                {/* You can add more sections of your home page here */}
                <ServicesSection/>
                <FeaturedProperties/>
                <Testimonials/>
            </main>
        </div>
    );
};

export default HomePage;
