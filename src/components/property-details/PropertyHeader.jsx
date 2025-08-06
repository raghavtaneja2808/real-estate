import React from 'react';

// --- SVG Icons ---
const LocationIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

// New icon for the purchase button
const WalletIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
);


const PropertyHeader = ({ property }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{property.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                    <LocationIcon />
                    <p className="text-gray-400">{property.address}</p>
                </div>
            </div>
            <div className="mt-6 sm:mt-0 text-left sm:text-right flex flex-col items-start sm:items-end gap-4">
                <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-3xl font-bold text-white">{property.price}</p>
                </div>
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors transform hover:scale-105">
                    <WalletIcon />
                    <span>Purchase Now</span>
                </a>
            </div>
        </div>
    );
};

export default PropertyHeader;
