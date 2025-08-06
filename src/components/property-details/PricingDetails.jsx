import React from 'react';

// --- SVG Icons ---
const SavingsIcon = () => (
    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
);

// --- Reusable Component for a single pricing item ---
const PricingItem = ({ label, value, note, percentage, isBenefit }) => (
    <div className={`flex justify-between items-baseline py-3 border-b ${isBenefit ? 'border-green-800/50' : 'border-gray-800'}`}>
        <div>
            <p className={`font-medium ${isBenefit ? 'text-green-300' : 'text-white'}`}>{label}</p>
            {note && <p className="text-xs text-gray-500 mt-1">{note}</p>}
        </div>
        <div className="text-right">
            <p className={`font-semibold ${isBenefit ? 'text-green-300' : 'text-white'}`}>{value}</p>
            {percentage && <p className="text-xs text-gray-500">{percentage}</p>}
        </div>
    </div>
);

// --- Reusable Component for a pricing category ---
const PricingCategory = ({ title, items, isBenefit = false }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center mb-4">
            <h3 className={`text-xl font-semibold ${isBenefit ? 'text-green-400' : 'text-white'}`}>{title}</h3>
            {!isBenefit && <a href="#" className="text-sm text-violet-400 hover:underline">Learn More</a>}
        </div>
        <div className="space-y-2">
            {(items || []).map(item => <PricingItem key={item.label} {...item} isBenefit={isBenefit} />)}
        </div>
    </div>
);

// --- Main Pricing Details Component ---
const PricingDetails = ({ property }) => {
    const pricing = property.pricing;

    if (!pricing) {
        return null;
    }

    return (
        <div 
            className="mt-16 p-8 sm:p-12 rounded-2xl text-white bg-[#121212]"
        >
            {/* Header */}
            <div className="mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Comprehensive Pricing Details</h2>
                <p className="text-gray-400 max-w-3xl">
                    Below is a breakdown of traditional real estate costs, alongside the potential savings and benefits unlocked by leveraging blockchain technology through BlockEstate.
                </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <PricingCategory title="Traditional Initial Costs" items={pricing.totalInitialCosts} />
                
                {/* Blockchain Benefits Section */}
                <div className="bg-green-900/10 p-6 rounded-lg border border-green-800/30">
                    <PricingCategory title="Blockchain Transaction Benefits" items={pricing.blockchainBenefits} isBenefit={true} />
                </div>

                <div className="md:col-span-2 border-t border-gray-800 my-4"></div>
                
                <PricingCategory title="Traditional Monthly Expenses" items={pricing.monthlyExpenses} />

                {/* Summary of Savings */}
                <div className="flex flex-col justify-center bg-gray-800/20 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                        <SavingsIcon />
                        <h3 className="text-xl font-semibold text-white">Estimated Savings with Blockchain</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                        By reducing intermediary fees and streamlining processes, blockchain can lead to significant savings.
                    </p>
                    <p className="text-4xl font-bold text-green-400">{pricing.estimatedSavings}</p>
                    <p className="text-sm text-gray-500">Total potential reduction in closing costs.</p>
                </div>
            </div>
        </div>
    );
};

export default PricingDetails;
