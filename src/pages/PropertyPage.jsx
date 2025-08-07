// src/pages/PropertyPage.jsx
import React from 'react';
import Navbar from '../components/home/Navbar';
import PropertySearch from '../components/property/PropertySearch'; // <-- Import it
import FeaturedProperties from '../components/property/FeaturedProperties';
import Footer from '../components/home/Footer';
import AddPropertyCTA from '../components/property/AddPropertyCTA';

const PropertyPage = () => {
  return (
    <div className='relative bg-black'>
      <Navbar />
      <main>
        <PropertySearch /> {/* <-- Add it here */}
        {/* You can add the property listings grid below this section */}
        <FeaturedProperties/>
        <AddPropertyCTA/>
        <Footer/>
      </main>
    </div>
  );
};

export default PropertyPage;