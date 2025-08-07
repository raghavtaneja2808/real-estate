import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import PropertyCard from '../components/property/PropertyCard';
import LoadingSpinner from '../components/common/LoadingSpinner'; // <-- Import the spinner

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const { properties } = useProperties();
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // <-- Add loading state

    useEffect(() => {
        setIsLoading(true); // Start loading

        // Simulate a network delay to see the spinner in action
        const timer = setTimeout(() => {
            const searchTerm = searchParams.get('q') || '';
            const locationFilter = searchParams.get('Location') || '';
            // Add more filters here as needed

            let propertiesArray = Object.values(properties);

            // Filter by search term
            if (searchTerm) {
                propertiesArray = propertiesArray.filter(prop => 
                    prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    prop.address.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            // Filter by location
            if (locationFilter) {
                propertiesArray = propertiesArray.filter(prop => 
                    prop.address.includes(locationFilter.split(',')[0])
                );
            }

            setFilteredProperties(propertiesArray);
            setIsLoading(false); // Stop loading
        }, 1000); // 1-second delay

        return () => clearTimeout(timer); // Cleanup timer on unmount

    }, [searchParams, properties]);

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6 sm-px-8">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold">Search Results</h1>
                        {!isLoading && (
                            <p className="text-gray-400 mt-2">
                                Showing {filteredProperties.length} properties matching your criteria.
                            </p>
                        )}
                    </div>

                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        filteredProperties.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProperties.map((prop) => (
                                    <PropertyCard key={prop.id} property={prop} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <h2 className="text-2xl font-semibold text-gray-400">No Properties Found</h2>
                                <p className="text-gray-500 mt-2">Try adjusting your search filters on the <Link to="/properties" className="text-violet-400 hover:underline">properties page</Link>.</p>
                            </div>
                        )
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SearchResultsPage;
