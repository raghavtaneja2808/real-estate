import React from 'react';

// --- SVG Icons ---
const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const LeftArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

const RightArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


// --- Reusable Testimonial Card Component ---
const TestimonialCard = ({ testimonial }) => (
    <div className="bg-[#181818] p-8 rounded-2xl space-y-6">
        <div className="flex">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-white mb-2">{testimonial.title}</h3>
            <p className="text-gray-400 leading-relaxed">{testimonial.text}</p>
        </div>
        <div className="flex items-center gap-4">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
        </div>
    </div>
);


// --- Main Testimonials Section Component ---
const Testimonials = () => {
    const testimonials = [
        {
            title: "Exceptional Service!",
            text: "Our experience with BlockEstate was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Wade Warren",
            location: "USA, California"
        },
        {
            title: "Efficient and Reliable",
            text: "BlockEstate provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Emelie Thomson",
            location: "USA, Florida"
        },
        {
            title: "Trusted Advisors",
            text: "The BlockEstate team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "John Mans",
            location: "USA, Nevada"
        }
    ];

    return (
        <section className="bg-black text-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div className="max-w-xl mb-6 md:mb-0">
                        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                        <p className="text-gray-400">
                            Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose BlockEstate for their real estate needs.
                        </p>
                    </div>
                    <a href="#" className="px-5 py-2 border border-gray-600 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
                        View All Testimonials
                    </a>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
                    <p className="text-gray-400 font-medium">01 <span className="text-gray-600">of 10</span></p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                            <LeftArrowIcon />
                        </button>
                        <button className="p-2 rounded-full border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                            <RightArrowIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
