import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

// --- SVG Icons ---
const InfoIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const LocationIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const DetailsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
const MediaIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
const ContactIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>;

// --- Reusable Form Components (shadcn/ui Inspired) ---
const Input = ({ label, type = 'text', placeholder, id, name, value, onChange }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-400">{label}</label>
        <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} className="w-full bg-[#1e1e1e] border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all" />
    </div>
);

const Textarea = ({ label, placeholder, id, name, value, onChange }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-400">{label}</label>
        <textarea id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} rows="4" className="w-full bg-[#1e1e1e] border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"></textarea>
    </div>
);

const Select = ({ label, id, name, value, onChange, children }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-400">{label}</label>
        <select id={id} name={name} value={value} onChange={onChange} className="w-full bg-[#1e1e1e] border border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all">
            {children}
        </select>
    </div>
);

const MediaUpload = ({ onFilesChange }) => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files).map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));
        const updatedFiles = [...files, ...newFiles];
        setFiles(updatedFiles);
        onFilesChange(updatedFiles.map(f => f.file));
    };

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const newFiles = Array.from(e.dataTransfer.files).map(file => ({
                file,
                preview: URL.createObjectURL(file)
            }));
            const updatedFiles = [...files, ...newFiles];
            setFiles(updatedFiles);
            onFilesChange(updatedFiles.map(f => f.file));
        }
    }, [files, onFilesChange]);

    const handleDragEvents = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
    const handleDragEnter = (e) => {
        handleDragEvents(e);
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        handleDragEvents(e);
        setIsDragging(false);
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        onFilesChange(updatedFiles.map(f => f.file));
    };

    return (
        <div>
            <label 
                onDrop={handleDrop}
                onDragOver={handleDragEvents}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                htmlFor="file-upload" 
                className={`relative block w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${isDragging ? 'border-violet-500 bg-violet-900/20' : 'border-gray-700 hover:border-violet-500'}`}
            >
                <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" onChange={handleFileChange} />
                <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <p className="mt-4 text-sm text-gray-400">
                    <span className="font-semibold text-violet-400">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </label>
            {files.length > 0 && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {files.map((file, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
                            <img src={file.preview} alt={`Preview ${index}`} className="w-full h-24 object-cover rounded-lg" />
                            <button onClick={() => removeFile(index)} className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- Main Page Component ---
const ListPropertyPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(1);
    const [formData, setFormData] = useState({
        title: '', description: '', type: 'House', address: '', city: '', state: '',
        bedrooms: '', bathrooms: '', area: '', price: '', media: [],
        contactName: '', contactEmail: ''
    });

    const formSteps = [
        { id: 'basic-info', title: 'Basic Information', icon: <InfoIcon /> },
        { id: 'location', title: 'Location', icon: <LocationIcon /> },
        { id: 'details', title: 'Property Details', icon: <DetailsIcon /> },
        { id: 'media', title: 'Media', icon: <MediaIcon /> },
        { id: 'contact', title: 'Contact Information', icon: <ContactIcon /> },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFilesChange = (files) => {
        setFormData(prev => ({ ...prev, media: files }));
    };
    
    const handleNext = () => {
        setDirection(1);
        if (currentStep < formSteps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        setDirection(-1);
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };
    
    const goToStep = (stepIndex) => {
        if (stepIndex < currentStep) {
            setDirection(-1);
            setCurrentStep(stepIndex);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Property Data Submitted:", formData);
        navigate('/');
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0
        })
    };

    return (
        <div className="bg-black text-white">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-6 sm:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold">List Your Property</h1>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                            Join the decentralized real estate market. Fill out the details below to tokenize your property.
                        </p>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#1e1e1e]">
                                <motion.div 
                                    style={{ width: `${((currentStep + 1) / formSteps.length) * 100}%` }} 
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-500 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <aside className="md:col-span-1 md:sticky md:top-24 h-fit">
                            <ul className="space-y-2">
                                {formSteps.map((section, index) => (
                                    <li key={section.id}>
                                        <button 
                                            onClick={() => goToStep(index)}
                                            disabled={index > currentStep}
                                            className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors text-left ${currentStep === index ? 'bg-[#181818] text-white' : 'text-gray-400 hover:bg-[#181818] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'}`}
                                        >
                                            {section.icon}
                                            <span className="text-sm font-medium">{section.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        <div className="md:col-span-3 bg-[#181818] p-8 rounded-2xl border border-gray-800 relative min-h-[500px]">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentStep}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    className="absolute top-8 left-8 right-8"
                                >
                                    {currentStep === 0 && (
                                        <div className="space-y-6">
                                            <Input label="Property Title" id="title" name="title" placeholder="e.g., Seaside Serenity Villa" value={formData.title} onChange={handleChange} />
                                            <Textarea label="Description" id="description" name="description" placeholder="Describe your property's key features..." value={formData.description} onChange={handleChange} />
                                            <Select label="Property Type" id="type" name="type" value={formData.type} onChange={handleChange}>
                                                <option>House</option> <option>Apartment</option> <option>Villa</option> <option>Condo</option>
                                            </Select>
                                        </div>
                                    )}
                                    {currentStep === 1 && (
                                        <div className="space-y-6">
                                            <Input label="Address" id="address" name="address" placeholder="123 Ocean Drive" value={formData.address} onChange={handleChange} />
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <Input label="City" id="city" name="city" placeholder="Miami" value={formData.city} onChange={handleChange} />
                                                <Input label="State / Province" id="state" name="state" placeholder="Florida" value={formData.state} onChange={handleChange} />
                                            </div>
                                        </div>
                                    )}
                                    {currentStep === 2 && (
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                <Input label="Bedrooms" id="bedrooms" name="bedrooms" type="number" placeholder="4" value={formData.bedrooms} onChange={handleChange} />
                                                <Input label="Bathrooms" id="bathrooms" name="bathrooms" type="number" placeholder="3" value={formData.bathrooms} onChange={handleChange} />
                                                <Input label="Area (Square Feet)" id="area" name="area" type="number" placeholder="2500" value={formData.area} onChange={handleChange} />
                                            </div>
                                            <Input label="Listing Price (USD)" id="price" name="price" type="number" placeholder="1,250,000" value={formData.price} onChange={handleChange} />
                                        </div>
                                    )}
                                    {currentStep === 3 && <MediaUpload onFilesChange={handleFilesChange} />}
                                    {currentStep === 4 && (
                                        <div className="space-y-6">
                                            <Input label="Full Name" id="contact-name" name="contactName" placeholder="John Doe" value={formData.contactName} onChange={handleChange} />
                                            <Input label="Email Address" id="contact-email" name="contactEmail" type="email" placeholder="you@example.com" value={formData.contactEmail} onChange={handleChange} />
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-10 max-w-4xl mx-auto md:ml-auto md:max-w-[calc(75%-1.5rem)]">
                        <motion.button 
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onClick={handleBack} disabled={currentStep === 0}
                            className="px-6 py-2 border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Back
                        </motion.button>
                        {currentStep < formSteps.length - 1 ? (
                            <motion.button 
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                onClick={handleNext}
                                className="px-6 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700"
                            >
                                Next
                            </motion.button>
                        ) : (
                            <motion.button 
                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                onClick={handleSubmit}
                                className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
                            >
                                Create Token & List Property
                            </motion.button>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ListPropertyPage;
