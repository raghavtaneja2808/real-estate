import React, { createContext, useState, useContext } from 'react';

// Create the context
const PropertyContext = createContext();

// --- Mock Data (Single Source of Truth with Pricing) ---
const initialProperties = {
    "seaside-serenity-villa": {
        id: "seaside-serenity-villa",
        title: "Seaside Serenity Villa",
        address: "Malibu, California",
        price: "$1,250,000",
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        bedrooms: "04",
        bathrooms: "03",
        area: "2,500 Square Feet",
        amenities: [
            "Expansive oceanfront terrace", "Gourmet kitchen", "Private beach access",
            "Master suite with spa-inspired bathroom", "Private garage and ample storage"
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
        agent: { name: "Jennifer Lee", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }
    },
    "urban-oasis-penthouse": {
        id: "urban-oasis-penthouse",
        title: "Urban Oasis Penthouse",
        address: "New York, New York",
        price: "$3,500,000",
        images: [
            "https://images.unsplash.com/photo-1613553425973-1d6a45a6898d?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A luxurious penthouse in the heart of the city, offering stunning skyline views and unparalleled amenities.",
        bedrooms: "03",
        bathrooms: "04",
        area: "3,200 Square Feet",
        amenities: ["Rooftop Terrace", "24/7 Concierge", "Private Elevator", "Floor-to-ceiling windows"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "Michael Chen", avatar: "https://randomuser.me/api/portraits/men/44.jpg" }
    },
    "mountain-view-chalet": {
        id: "mountain-view-chalet",
        title: "Mountain View Chalet",
        address: "Aspen, Colorado",
        price: "$2,100,000",
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1549517045-bc93de075e53?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A cozy yet modern chalet with breathtaking mountain views, perfect for a winter getaway or a summer retreat.",
        bedrooms: "05",
        bathrooms: "05",
        area: "4,000 Square Feet",
        amenities: ["Ski-in/ski-out access", "Hot Tub", "Stone Fireplace", "Heated Floors"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "Sarah Jones", avatar: "https://randomuser.me/api/portraits/women/34.jpg" }
    },
    "downtown-luxury-loft": {
        id: "downtown-luxury-loft",
        title: "Downtown Luxury Loft",
        address: "Chicago, Illinois",
        price: "$950,000",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A stylish and spacious loft in a converted warehouse, featuring industrial design elements and modern comforts.",
        bedrooms: "02",
        bathrooms: "02",
        area: "1,800 Square Feet",
        amenities: ["Exposed Brick", "High Ceilings", "Rooftop Deck", "Fitness Center"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "David Rodriguez", avatar: "https://randomuser.me/api/portraits/men/32.jpg" }
    },
    " lakeside-modern-home": {
        id: "lakeside-modern-home",
        title: "Lakeside Modern Home",
        address: "Austin, Texas",
        price: "$1,800,000",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A stunning modern home with direct lake access, a private boat dock, and an infinity pool.",
        bedrooms: "04",
        bathrooms: "04",
        area: "3,500 Square Feet",
        amenities: ["Infinity Pool", "Boat Dock", "Lake Views", "Outdoor Kitchen"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "Emily White", avatar: "https://randomuser.me/api/portraits/women/48.jpg" }
    },
    "historic-brownstone": {
        id: "historic-brownstone",
        title: "Historic Brownstone",
        address: "Brooklyn, New York",
        price: "$2,800,000",
        images: [
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613553425973-1d6a45a6898d?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A beautifully preserved historic brownstone with original details and modern renovations.",
        bedrooms: "05",
        bathrooms: "04",
        area: "3,800 Square Feet",
        amenities: ["Original Woodwork", "Landscaped Garden", "Chef's Kitchen", "Wine Cellar"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "James Wilson", avatar: "https://randomuser.me/api/portraits/men/55.jpg" }
    },
    "desert-contemporary": {
        id: "desert-contemporary",
        title: "Desert Contemporary",
        address: "Scottsdale, Arizona",
        price: "$1,500,000",
        images: [
            "https://images.unsplash.com/photo-1560185007-c5ca915a093d?q=80&w=1935&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A sleek contemporary home designed to blend with the desert landscape, featuring expansive glass walls and a minimalist aesthetic.",
        bedrooms: "03",
        bathrooms: "03",
        area: "3,000 Square Feet",
        amenities: ["Desert Landscaping", "Negative Edge Pool", "Mountain Views", "Smart Home System"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "Jessica Brown", avatar: "https://randomuser.me/api/portraits/women/65.jpg" }
    },
    "pacific-northwest-craftsman": {
        id: "pacific-northwest-craftsman",
        title: "Pacific Northwest Craftsman",
        address: "Seattle, Washington",
        price: "$1,100,000",
        images: [
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460317442991-0ec20839492f?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A classic Craftsman home with beautiful woodwork, a large front porch, and a lush, green yard.",
        bedrooms: "04",
        bathrooms: "03",
        area: "2,800 Square Feet",
        amenities: ["Covered Porch", "Mature Trees", "Clawfoot Tub", "Built-in Cabinetry"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "Robert Green", avatar: "https://randomuser.me/api/portraits/men/75.jpg" }
    },
    "miami-beachfront-condo": {
        id: "miami-beachfront-condo",
        title: "Miami Beachfront Condo",
        address: "Miami, Florida",
        price: "$1,950,000",
        images: [
            "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605276374104-5de67d18394b?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A modern condo with direct ocean views, a wrap-around balcony, and access to resort-style amenities.",
        bedrooms: "03",
        bathrooms: "03",
        area: "2,200 Square Feet",
        amenities: ["Ocean Views", "Wrap-around Balcony", "Resort Pool", "Valet Parking"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "Maria Garcia", avatar: "https://randomuser.me/api/portraits/women/75.jpg" }
    },
    "southern-charm-estate": {
        id: "southern-charm-estate",
        title: "Southern Charm Estate",
        address: "Charleston, South Carolina",
        price: "$2,300,000",
        images: [
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
        ],
        description: "A grand estate with classic Southern architecture, sprawling lawns, and a timeless elegance.",
        bedrooms: "06",
        bathrooms: "07",
        area: "6,000 Square Feet",
        amenities: ["Grand Staircase", "Veranda", "Guest House", "Formal Gardens"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "William Davis", avatar: "https://randomuser.me/api/portraits/men/85.jpg" }
    },
    "california-vineyard-property": {
        id: "california-vineyard-property",
        title: "California Vineyard Property",
        address: "Napa, California",
        price: "$4,200,000",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop",
        ],
        description: "A beautiful property set within a working vineyard, offering a unique lifestyle and stunning pastoral views.",
        bedrooms: "04",
        bathrooms: "04",
        area: "4,500 Square Feet",
        amenities: ["Working Vineyard", "Wine Cellar", "Tasting Room", "Infinity Pool"],
        pricing: { /* Add specific pricing if needed */ },
        agent: { name: "Olivia Martinez", avatar: "https://randomuser.me/api/portraits/women/85.jpg" }
    }
};

// Create the provider component
export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState(initialProperties);

    const addProperty = (newPropertyData) => {
        const newId = newPropertyData.title.toLowerCase().replace(/\s+/g, '-');
        const newProperty = {
            id: newId,
            ...newPropertyData,
            images: newPropertyData.media.length > 0 ? newPropertyData.media.map(f => URL.createObjectURL(f)) : ["https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop"],
            agent: { name: "New Listing", avatar: "https://randomuser.me/api/portraits/lego/1.jpg" },
            pricing: { /* Add default pricing structure for new properties if needed */ }
        };
        setProperties(prev => ({ ...prev, [newId]: newProperty }));
    };

    return (
        <PropertyContext.Provider value={{ properties, addProperty }}>
            {children}
        </PropertyContext.Provider>
    );
};

// Create a custom hook for easy access to the context
export const useProperties = () => {
    return useContext(PropertyContext);
};
