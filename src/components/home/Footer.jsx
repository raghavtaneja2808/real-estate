import React from 'react';

// --- SVG Icons ---
const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L0 15L24 30L48 15L24 0Z" fill="#A855F7"/>
        <path d="M24 10L10 17.5L24 25L38 17.5L24 10Z" fill="white"/>
    </svg>
);

const SendIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
);

// --- Reusable Footer Link Component ---
const FooterLink = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-400 hover:text-white transition-colors">
            {children}
        </a>
    </li>
);

// --- Main Footer Component ---
const Footer = () => {
    const footerLinks = {
        "Home": ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"],
        "About Us": ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"],
        "Properties": ["Portfolio", "Categories"],
        "Services": ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"],
        "Contact Us": ["Contact Form", "Our Offices"]
    };

    return (
        <footer className="bg-black text-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 sm:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
                    {/* Brand and Newsletter Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <a href="/" className="flex items-center gap-3">
                            <LogoIcon />
                            <span className="text-xl font-bold">BlockEstate</span>
                        </a>
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Enter Your Email"
                                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg py-3 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                                <SendIcon />
                            </button>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-semibold mb-6">{title}</h3>
                            <ul className="space-y-4 text-sm">
                                {links.map(link => <FooterLink key={link} href="#">{link}</FooterLink>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
