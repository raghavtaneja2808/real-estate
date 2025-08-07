import React from 'react';
import { useParams } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext'; // <-- Import the context hook
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import ImageGallery from '../components/property-details/ImageGallery';
import PropertyHeader from '../components/property-details/PropertyHeader';
import PropertyInfo from '../components/property-details/PropertyInfo';
import PricingDetails from '../components/property-details/PricingDetails';
import PurchaseCTA from '../components/property-details/PurchaseCTA';

const PropertyDetailsPage = () => {
    // Get the propertyId from the URL
    const { propertyId } = useParams();
    // Get all properties from the central context
    const { properties } = useProperties();
    // Find the specific property that matches the ID from the URL
    const property = properties[propertyId];

    // If no property is found for the given ID, show a "Not Found" message
    if (!property) {
        return (
            <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Property Not Found</h1>
                    <p className="text-gray-400 mt-4">The property you are looking for does not exist.</p>
                </div>
            </div>
        );
    }

    // If the property is found, render the page with its data
    return (
        <div className="bg-black text-white">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <PropertyHeader property={property} />
                    <ImageGallery images={property.images} />
                    <PropertyInfo property={property} />
                    <PricingDetails property={property} />
                    <PurchaseCTA property={property} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PropertyDetailsPage;
