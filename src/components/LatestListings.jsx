/**
 * A helper component to inject CSS for hiding scrollbars.
 * This is a clean way to add component-specific styles without external CSS files.
 */
const HideScrollbarStyle = () => (
  <style>{`
    .hide-scrollbar::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `}</style>
);

const PropertyCard = ({ imageUrl, address, city }) => (
  <a href="#" className="relative flex flex-col items-center justify-start w-72 md:w-80 shrink-0 snap-center transition-all group">
    <div className="w-full mb-2 overflow-hidden rounded-lg shadow-lg">
      <img src={imageUrl} alt={address} className="object-cover w-full h-48 md:h-56 transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="w-full pt-2 text-left">
      <p className="font-medium text-slate-100">{address}</p>
      <p className="text-sm tracking-wide uppercase text-slate-300">{city}</p>
    </div>
  </a>
);

const LatestListings = ({ cities, listings }) => {
  return (
    <div className="py-24 space-y-12 bg-black text-ink">
      {/* We inject the style definitions here. They will apply to this component. */}
      <HideScrollbarStyle />

      <div className="text-center">
        <h3 className="font-serif text-4xl sm:text-5xl">Latest Listings</h3>
      </div>
      <div className="flex items-baseline justify-center space-x-2 text-gray-400">
        {cities.map((city, index) => (
          <div key={city} className="flex items-center space-x-2">
            <button className={`text-sm font-bold tracking-wide uppercase ${index === 0 ? 'text-white' : 'text-gray-400'}`}>
              {city}
            </button>
            {index < cities.length - 1 && <p>/</p>}
          </div>
        ))}
      </div>
      
      {/* The 'hide-scrollbar' class is now applied to this div.
        This class is defined in the HideScrollbarStyle component above.
      */}
      <div className="flex gap-8 px-10 pb-2 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
        {listings.map((listing, index) => (
          <PropertyCard key={index} {...listing} />
        ))}
        {/* This spacer ensures the last item can snap to the center */}
        <div className="w-1 shrink-0"></div>
      </div>
    </div>
  );
};

export default LatestListings;
