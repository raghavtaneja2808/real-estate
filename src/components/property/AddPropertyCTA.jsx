import React from 'react';
import { Link } from 'react-router-dom';

const AddPropertyCTA = () => {
    const backgroundImageUrl = "https://images.unsplash.com/photo-1560518883-ce09059ee445?q=80&w=1935&auto=format&fit=crop";

    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div 
                    className="relative bg-cover bg-center rounded-2xl p-8 sm:p-12 text-white overflow-hidden"
                    style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                        <div className="lg:w-2/3 text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Ready to Sell Your Property on the Blockchain?
                            </h2>
                            <p className="text-gray-300 max-w-2xl">
                                Join the future of real estate. List your property on BlockEstate to reach a global pool of crypto-savvy buyers and experience a faster, more secure selling process.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link
                                to='/listproperty' 
                                className="inline-block px-8 py-4 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition-all transform hover:scale-105 shadow-lg shadow-violet-900/50"
                            >
                                List Your Property
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddPropertyCTA;
