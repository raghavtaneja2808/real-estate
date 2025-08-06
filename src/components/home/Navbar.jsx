import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Using the correct BlockEstate logo
const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L0 15L24 30L48 15L24 0Z" fill="#A855F7"/>
        <path d="M24 10L10 17.5L24 25L38 17.5L24 10Z" fill="white"/>
    </svg>
);

const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: "Home", path: "/home" },
        { name: "About Us", path: "/about" },
        { name: "Properties", path: "/properties" },
        { name: "Services", path: "/services" }
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        exit: { opacity: 0, y: -20 }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <nav className="absolute top-0 left-0 right-0 z-30">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and Brand Name */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-3">
                            <LogoIcon />
                            <span className="text-white text-xl font-bold">BlockEstate</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="text-gray-300 hover:bg-gray-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Contact Button */}
                    <div className="hidden md:block">
                        <Link to="/contact" className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-violet-700 transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none z-50">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <motion.div variants={linkVariants} key={link.name}>
                                <Link to={link.path} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white text-3xl font-semibold">
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div variants={linkVariants}>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-violet-600 text-white px-6 py-3 rounded-md text-lg font-medium text-center mt-4">
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
