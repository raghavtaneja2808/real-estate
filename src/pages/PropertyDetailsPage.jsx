import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import ImageGallery from '../components/property-details/ImageGallery';
import PropertyHeader from '../components/property-details/PropertyHeader';
import PropertyInfo from '../components/property-details/PropertyInfo';
import PricingDetails from '../components/property-details/PricingDetails';
import PurchaseCTA from '../components/property-details/PurchaseCTA'; // <-- Import it

// All data, including agent info, now lives in this mock data object.
const mockPropertyData = {
    "seaside-serenity-villa": {
        title: "Seaside Serenity Villa",
        address: "Malibu, California",
        price: "$1,250,000",
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605276374104-5de67d18394b?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        bedrooms: "04",
        bathrooms: "03",
        area: "2,500 Square Feet",
        amenities: [
            "Expansive oceanfront terrace for outdoor entertaining",
            "Gourmet kitchen with top-of-the-line appliances",
            "Private beach access for morning strolls and sunset views",
            "Master suite with a spa-inspired bathroom and ocean-facing balcony",
            "Private garage and ample storage space"
        ],
        pricing: {
            totalInitialCosts: [
                { label: "Listing Price", value: "$1,250,000" },
                { label: "Down Payment", value: "$250,000", percentage: "20%" },
                { label: "Traditional Fees", value: "$29,700", note: "Title insurance, escrow, legal, and transfer taxes" },
                { label: "Mortgage Amount", value: "$1,000,000", note: "If applicable" },
            ],
            monthlyExpenses: [
                { label: "Property Taxes", value: "$1,250" },
                { label: "Mortgage Payment", value: "Varies based on terms and interest rate", note: "If applicable" },
                { label: "Homeowners' Association Fee", value: "$300" },
                { label: "Property Insurance", value: "$100", note: "Approximate monthly cost" },
            ],
            blockchainBenefits: [
                { label: "Reduced Title & Escrow Fees", value: "-$8,000", note: "Smart contracts automate verification, reducing manual work." },
                { label: "Lower Legal Fees", value: "-$1,500", note: "Streamlined process requires less billable attorney hours." },
                { label: "Faster Closing (Indirect Savings)", value: "Weeks to Days", note: "Reduces carrying costs and market risk exposure." }
            ],
            estimatedSavings: "$9,500+"
        },
        agent: {
            name: "Jennifer Lee",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    },
};


const PropertyDetailsPage = () => {
    const { propertyId } = useParams();
    const property = mockPropertyData[propertyId];

    if (!property) {
        return <div className="bg-black text-white h-screen flex items-center justify-center">Property not found!</div>;
    }

    return (
        <div className="bg-black text-white">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <PropertyHeader property={property} />
                    <ImageGallery images={property.images} />
                    <PropertyInfo property={property} />
                    <PricingDetails property={property} />
                    <PurchaseCTA property={property} /> {/* <-- Add it here */}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PropertyDetailsPage;
