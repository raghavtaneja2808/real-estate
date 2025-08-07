// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import ListPropertyPage from './pages/ListPropertyPage';
import { PropertyProvider } from './context/PropertyContext';
function App() {
  return (
    <PropertyProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/get_started' element={<AuthPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/properties' element={<PropertyPage/>}/>
          <Route path="/properties/:propertyId" element={<PropertyDetailsPage />} />
          <Route path='/listproperty' element={<ListPropertyPage/>}/>
      </Routes>
    </Router>
    </PropertyProvider>
  );
}

export default App;