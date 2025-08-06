import React from 'react';

// --- SVG Icons ---
const BedIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
);

const BathIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6z"></path></svg>
);

const AreaIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"></path></svg>
);

const FeatureIcon = () => (
    <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);


const PropertyInfo = ({ property }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
            {/* Left Side: Description and Details */}
            <div className="lg:col-span-3 bg-[#181818] p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold text-white mb-4">Description</h2>
                <p className="text-gray-400 leading-relaxed mb-8">{property.description}</p>

                <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <BedIcon />
                            <p className="text-sm text-gray-500">Bedrooms</p>
                        </div>
                        <p className="text-2xl font-bold text-white">{property.bedrooms}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <BathIcon />
                            <p className="text-sm text-gray-500">Bathrooms</p>
                        </div>
                        <p className="text-2xl font-bold text-white">{property.bathrooms}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <AreaIcon />
                            <p className="text-sm text-gray-500">Area</p>
                        </div>
                        <p className="text-2xl font-bold text-white">{property.area}</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Key Features and Amenities */}
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-white mb-6">Key Features and Amenities</h2>
                <ul className="space-y-4">
                    {property.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center gap-4">
                            <FeatureIcon />
                            <span className="text-gray-300">{amenity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PropertyInfo;
