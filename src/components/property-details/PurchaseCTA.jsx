import React from 'react';

// --- SVG Icons ---
const ShieldCheckIcon = () => (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-4.016z"></path></svg>
);

const ZapIcon = () => (
    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);

const GlobeIcon = () => (
    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053.053a.5.5 0 010 .707l-.053.053L6.38 6.63a.5.5 0 01-.707 0l-.053-.053a.5.5 0 010-.707l.053-.053L6.95 4.5a.5.5 0 01.707 0zM12 2a10 10 0 110 20 10 10 0 010-20z"></path></svg>
);


const PurchaseCTA = ({ property }) => {
    const agent = property.agent;
    const benefits = [
        { icon: <ShieldCheckIcon />, text: "Unmatched Security with Smart Contracts" },
        { icon: <ZapIcon />, text: "Near-Instantaneous Transaction Speed" },
        { icon: <GlobeIcon />, text: "Complete Transparency on an Immutable Ledger" }
    ];

    return (
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-gradient-to-br from-[#1a1a1a] to-[#121212] p-8 sm:p-12 rounded-2xl border border-gray-800">
            {/* Left Side: Text and Benefits */}
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Secure Your Dream Home with Blockchain</h2>
                    <p className="text-gray-400 max-w-2xl">
                        You are one step away from owning this property. Complete your purchase through our secure, decentralized payment gateway for a seamless and transparent closing experience.
                    </p>
                </div>
                <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-4">
                            {benefit.icon}
                            <p className="text-gray-300 font-medium">{benefit.text}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-4">
                    <a href="#" className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition-all transform hover:scale-105 shadow-lg shadow-violet-900/50">
                        Purchase with Crypto
                    </a>
                </div>
            </div>

            {/* Right Side: Agent Card */}
            {agent && (
                <div className="bg-black/30 p-6 rounded-xl text-center space-y-4 border border-gray-700">
                    <img src={agent.avatar} alt={agent.name} className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-violet-500" />
                    <div>
                        <p className="font-semibold text-white text-lg">{agent.name}</p>
                        <p className="text-sm text-gray-500">Listing Agent</p>
                    </div>
                    <a href="#" className="inline-block w-full px-5 py-2 border border-gray-600 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                        Contact Agent
                    </a>
                </div>
            )}
        </div>
    );
};

export default PurchaseCTA;
