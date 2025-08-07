import React from 'react';
import { motion } from 'framer-motion';

// --- Logo Icon ---
// This is the BlockEstate logo that will be at the center of the animation.
const LogoIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L0 15L24 30L48 15L24 0Z" fill="#A855F7"/>
        <path d="M24 10L10 17.5L24 25L38 17.5L24 10Z" fill="white"/>
    </svg>
);

// --- Main Loading Spinner Component ---
const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Outer rotating ring */}
                <motion.div
                    className="absolute w-24 h-24 rounded-full"
                    style={{
                        border: '3px solid transparent',
                        borderTopColor: '#A855F7',
                        borderLeftColor: '#A855F7',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        loop: Infinity,
                        ease: "linear",
                        duration: 1.5
                    }}
                />

                {/* Inner rotating ring (opposite direction) */}
                <motion.div
                    className="absolute w-32 h-32 rounded-full"
                    style={{
                        border: '3px solid transparent',
                        borderBottomColor: '#6D28D9',
                        borderRightColor: '#6D28D9',
                    }}
                    animate={{ rotate: -360 }}
                    transition={{
                        loop: Infinity,
                        ease: "linear",
                        duration: 2
                    }}
                />
                
                {/* Pulsing Logo */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <LogoIcon />
                </motion.div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
