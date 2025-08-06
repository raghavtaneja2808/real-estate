import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Reusable SVG Icons ---
const LogoIcon = ({ className = "" }) => (
    <svg className={className} width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L0 15L24 30L48 15L24 0Z" fill="#A855F7"/>
        <path d="M24 10L10 17.5L24 25L38 17.5L24 10Z" fill="white"/>
    </svg>
);

const BackArrowIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
);

// --- Animated Background Component ---
const AnimatedBackground = () => {
    const bars = Array.from({ length: 4 }); // Reduced from 8 to 4
    
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Left side bars */}
            {bars.map((_, i) => (
                <div
                    key={`l-${i}`}
                    className="absolute w-64 sm:w-96 h-12 sm:h-16 bg-gradient-to-r from-purple-600 to-violet-500 transform -rotate-45 animate-pulse"
                    style={{
                        top: `${15 + i * 20}%`, // Increased spacing from 12% to 20%
                        left: '-15%', // Adjusted positioning
                        animationDelay: `${i * 0.8}s`, // Increased delay for better spacing
                        animationDuration: '4s'
                    }}
                />
            ))}
            {/* Right side bars */}
            {bars.map((_, i) => (
                <div
                    key={`r-${i}`}
                    className="absolute w-64 sm:w-96 h-12 sm:h-16 bg-gradient-to-l from-purple-600 to-violet-500 transform rotate-45 animate-pulse"
                    style={{
                        top: `${15 + i * 20}%`, // Increased spacing from 12% to 20%
                        right: '-15%', // Adjusted positioning
                        animationDelay: `${i * 0.8 + 2}s`, // Increased delay for better spacing
                        animationDuration: '4s'
                    }}
                />
            ))}
        </div>
    );
};

// --- Reusable Form Components ---
const Input = ({ type, placeholder, id, value, onChange }) => (
    <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors duration-300"
    />
);

// --- Updated Button component to use Link for navigation ---
const Button = ({ children, to }) => (
    <Link 
        to={to}
        className="block text-center w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 active:from-violet-800 active:to-purple-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-black transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
        {children}
    </Link>
);

// --- Sign Up Form Component ---
const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <div className="w-full space-y-8 opacity-100 transform translate-y-0 transition-all duration-500 ease-out">
            <h2 className="text-4xl font-bold text-white text-center">Create Account</h2>
            <div className="space-y-6">
                <Input 
                    type="text" 
                    id="name" 
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange('name')}
                />
                <Input 
                    type="email" 
                    id="email-signup" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange('email')}
                />
                <Input 
                    type="password" 
                    id="password-signup" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange('password')}
                />
            </div>
            <Button to="/home">Create Account</Button>
        </div>
    );
};

// --- Sign In Form Component ---
const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
        <div className="w-full space-y-8 opacity-100 transform translate-y-0 transition-all duration-500 ease-out">
            <h2 className="text-4xl font-bold text-white text-center">Welcome Back</h2>
            <div className="space-y-6">
                <Input 
                    type="email" 
                    id="email-signin" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange('email')}
                />
                <Input 
                    type="password" 
                    id="password-signin" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange('password')}
                />
            </div>
            <div className="text-right">
                <a href="#" className="text-sm text-violet-400 hover:text-violet-300 hover:underline transition-colors">
                    Forgot Password?
                </a>
            </div>
            <Button to="/home">Sign In</Button>
        </div>
    );
};

// --- Main Auth Page Component ---
const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const toggleForm = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsSignUp(!isSignUp);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <AnimatedBackground />

            {/* Top Navigation */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
                <Link to='/' className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="p-2 bg-gray-900/50 rounded-full border border-gray-700 group-hover:border-violet-500 transition-colors backdrop-blur-sm">
                       <BackArrowIcon />
                    </div>
                </Link>
                
                {/* Logo in top center */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <LogoIcon className="w-12 h-8" />
                </div>
                
                <div className="text-center text-sm text-gray-400">
                    {isSignUp ? "Already Member ?" : "Not a member?"}
                    <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); toggleForm(); }} 
                        className="ml-2 font-medium text-violet-400 hover:text-violet-300 hover:underline transition-colors"
                    >
                        {isSignUp ? "Sign in" : "Sign Up"}
                    </a>
                </div>
            </div>
            
            {/* Form Container */}
            <div className="w-full max-w-sm sm:max-w-md min-h-[600px] flex items-center justify-center border-2 border-white/20 rounded-3xl p-8 z-10 bg-black/30 backdrop-blur-md shadow-2xl">
                <div className={`w-full transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                    {isSignUp ? <SignUpForm /> : <SignInForm />}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
