import React, { useState, useEffect } from 'react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import PropertySearch from '../components/property/PropertySearch';
import { useProperties } from '../context/PropertyContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Reusable SVG Icons ---
const BedIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
);
const BathIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6z"></path></svg>
);
const VillaIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"></path></svg>
);

// --- Reusable Property Card Component ---
// This component displays a single property in the grid.
const PropertyCard = ({ property }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#181818] rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-violet-800/20"
    >
        <div className="overflow-hidden">
            <img src={property.images[0]} alt={property.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-white">{property.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{property.description.substring(0, 100)}... <Link to={`/properties/${property.id}`} className="text-violet-400 hover:underline">Read More</Link></p>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm border-t border-gray-800 pt-4">
                <div className="flex items-center gap-2"><BedIcon /><span>{property.bedrooms}-Bedroom</span></div>
                <div className="flex items-center gap-2"><BathIcon /><span>{property.bathrooms}-Bathroom</span></div>
                <div className="flex items-center gap-2"><VillaIcon /><span>Villa</span></div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-xl font-bold text-white">{property.price}</p>
                </div>
                <Link to={`/properties/${property.id}`} className="px-5 py-2 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">
                    View Details
                </Link>
            </div>
        </div>
    </motion.div>
);

// --- Component to display the grid of properties ---
// This component receives the filtered list of properties and displays them.
const PropertyGrid = ({ properties }) => {
    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {properties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((prop) => (
                            <PropertyCard key={prop.id} property={prop} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-semibold text-gray-400">No Properties Found</h2>
                        <p className="text-gray-500 mt-2">Try adjusting your search filters to find your dream property.</p>
                    </div>
                )}
            </div>
        </section>
    );
};


// --- Main All Properties Page ---
// This is the main container page that brings everything together.
const AllPropertiesPage = () => {
    // 1. Get all properties from our global context.
    const { properties } = useProperties();
    
    // 2. Create a state to hold the list of properties that will be displayed.
    //    Initially, it shows all properties.
    const [filteredProperties, setFilteredProperties] = useState(Object.values(properties));

    // 3. This function is passed to the PropertySearch component.
    //    It receives the search term and filters, then updates the state.
    const handleSearch = (searchTerm, filters) => {
        let propertiesArray = Object.values(properties);

        // Filter by search term (title or address)
        if (searchTerm) {
            propertiesArray = propertiesArray.filter(prop => 
                prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prop.address.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by selected dropdowns
        if (filters.Location) {
            propertiesArray = propertiesArray.filter(prop => prop.address.includes(filters.Location.split(',')[0]));
        }
        // You can add more complex filtering logic for price, size, etc. here.

        // 4. Update the state with the new, filtered list of properties.
        setFilteredProperties(propertiesArray);
    };

    return (
        <div className='relative bg-black'>
            <Navbar />
            <main>
                {/* 5. The search component receives the handleSearch function. */}
                <PropertySearch onSearch={handleSearch} />
                
                {/* 6. The grid component receives the filtered list and displays it. */}
                <PropertyGrid properties={filteredProperties} />
            </main>
            <Footer />
        </div>
    );
};

export default AllPropertiesPage;
