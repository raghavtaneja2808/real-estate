import React from 'react';

// --- SVG Icons for property details ---
const BedIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
);

const BathIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6z"></path></svg>
);

const VillaIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"></path></svg>
);

// --- New SVG Icons for Pagination ---
const LeftArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

const RightArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


// --- Reusable Property Card Component ---
const PropertyCard = ({ property }) => (
    <div className="bg-[#181818] rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-violet-800/20">
        <div className="overflow-hidden">
            <img src={property.imageUrl} alt={property.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-white">{property.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{property.description} <a href="#" className="text-violet-400 hover:underline">Read More</a></p>
            
            {/* Property Details */}
            <div className="flex items-center space-x-6 text-gray-400 text-sm border-t border-gray-800 pt-4">
                <div className="flex items-center gap-2"><BedIcon /><span>{property.bedrooms}-Bedroom</span></div>
                <div className="flex items-center gap-2"><BathIcon /><span>{property.bathrooms}-Bathroom</span></div>
                <div className="flex items-center gap-2"><VillaIcon /><span>Villa</span></div>
            </div>

            {/* Price and Action Button */}
            <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-xl font-bold text-white">{property.price}</p>
                </div>
                <a href="#" className="px-5 py-2 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">
                    View Property Details
                </a>
            </div>
        </div>
    </div>
);


// --- Main Featured Properties Section Component ---
const FeaturedProperties = () => {
    const properties = [
        {
            imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            title: "Seaside Serenity Villa",
            description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
            bedrooms: 4,
            bathrooms: 3,
            price: "$550,000"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
            title: "Metropolitan Haven",
            description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
            bedrooms: 2,
            bathrooms: 2,
            price: "$550,000"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
            title: "Rustic Retreat Cottage",
            description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
            bedrooms: 3,
            bathrooms: 2.5,
            price: "$550,000"
        }
    ];

    return (
        <section className="bg-black text-white py-20 sm:py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div className="max-w-xl mb-6 md:mb-0">
                        {/* Added Logo Image */}
                   
                        <h2 className="text-4xl font-bold mb-4">Discover a world of Possibilites </h2>
                        <p className="text-gray-400">
                            Pay through Blockchain , save money
                        </p>
                    </div>
                    <a href="#" className="px-5 py-2 border border-gray-600 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
                        View All Properties
                    </a>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop, index) => (
                        <PropertyCard key={index} property={prop} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
                    <p className="text-gray-400 font-medium">01 <span className="text-gray-600">of 10</span></p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                            <LeftArrowIcon />
                        </button>
                        <button className="p-2 rounded-full border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                            <RightArrowIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
