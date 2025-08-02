import { ArrowRight } from "./Icons";

/**
 * DecorationBox Component
 * This component renders the L-shaped decorative bars with a precise inset shadow effect,
 * as seen in the detailed reference image. The shadow bar is shorter than the main bar
 * to create a more refined, layered appearance.
 */
const DecorationBox = ({ listingDetails, reverseOrder }) => {
  // --- Configuration ---
  const barThickness = '8px'; // Keeping the bold thickness
  const endGap = '2rem';      // The gap from the container edge
  const shadowOffset = '6px';   // Adjusted shadow offset for the thicker bar

  // --- Styling Logic ---
  // Base classes for the bars
  const mainBarClasses = "absolute bg-rovio300 z-10";
  const shadowBarClasses = "absolute bg-rovio300/40"; 

  // This object holds the dynamic styles for all four bars.
  // It flips the L-shape and the shadow direction based on `reverseOrder`.
  const styles = {
    main: {
      vertical: {
        width: barThickness,
        height: `calc(100% - ${endGap})`,
        ...(reverseOrder ? { top: '0', right: '0' } : { bottom: '0', left: '0' })
      },
      horizontal: {
        height: barThickness,
        width: `calc(100% - ${endGap} - ${barThickness})`,
        ...(reverseOrder 
          ? { top: '0', right: barThickness } 
          : { bottom: '0', left: barThickness }
        )
      }
    },
    shadow: {
      vertical: {
        width: barThickness,
        // The shadow bar is shorter than the main bar by the offset amount
        height: `calc(100% - ${endGap} - ${shadowOffset})`,
        ...(reverseOrder 
          // Positioned inset from the top and offset to the right
          ? { top: shadowOffset, right: `-${shadowOffset}` } 
          // Positioned inset from the bottom and offset to the left
          : { bottom: `-${shadowOffset}`, left: shadowOffset }
        )
      },
      horizontal: {
        height: barThickness,
        // The shadow bar is also shorter in width
        width: `calc(100% - ${endGap} - ${barThickness} - ${shadowOffset})`,
        ...(reverseOrder 
          // Positioned inset from the top and offset from the main bar
          ? { top: shadowOffset, right: `calc(${barThickness} + ${shadowOffset})` } 
          // Positioned inset from the bottom and offset from the main bar
          : { bottom: `-${shadowOffset}`, left: `calc(${barThickness} + ${shadowOffset})` }
        )
      }
    }
  };

  // Dynamic styles for the text block, positioned to align with the bars
  const textContainerStyles = {
    position: 'absolute',
    ...(reverseOrder 
      ? { top: endGap, right: endGap, textAlign: 'right' } 
      : { bottom: endGap, left: endGap, textAlign: 'left' }
    )
  };

  return (
    // Increased the height of the graph container for a larger appearance
    <div className="relative w-full h-64 sm:h-80">
      {/* Shadow Bars (Rendered first to be in the background) */}
      <div className={shadowBarClasses} style={styles.shadow.vertical}></div>
      <div className={shadowBarClasses} style={styles.shadow.horizontal}></div>

      {/* Main Bars (Rendered second to be in the foreground) */}
      <div className={mainBarClasses} style={styles.main.vertical}></div>
      <div className={mainBarClasses} style={styles.main.horizontal}></div>
      
      {/* Text Block (Positioned on top with z-20) */}
      <div style={textContainerStyles} className="z-20">
        {/* Increased font sizes for the details */}
        <p className="text-base font-semibold text-ink">{listingDetails.location}</p>
        <div className={`flex gap-x-4 mt-2 text-sm text-muted ${reverseOrder ? 'justify-end' : 'justify-start'}`}>
          <p>{listingDetails.price}</p>
          <p>{listingDetails.btc}</p>
          <p>{listingDetails.eth}</p>
        </div>
      </div>
    </div>
  );
};


/**
 * AlternatingFeature Component (Main)
 * This component arranges the text and the DecorationBox in an alternating grid layout.
 * It is designed to be a full-screen section for scroll-snapping.
 */
const AlternatingFeature = ({ title, description, listingDetails, reverseOrder = false }) => {
  return (
    <div className="grid min-h-screen items-center grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-16 px-6 sm:px-12 max-w-7xl mx-auto snap-start">
      
      {/* Text Column */}
      <div className={`space-y-10 ${reverseOrder ? 'sm:order-1' : 'sm:order-0'}`}>
        {/* Increased font sizes for the main heading */}
        <h2 className="font-serif text-6xl sm:text-7xl text-ink" dangerouslySetInnerHTML={{ __html: title }} />
        {/* Increased font size for the description */}
        <p className="font-sans text-2xl text-muted">{description}</p>
        <div className="flex">
          <a href="#" className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-white transition-all bg-transparent border border-white/50 rounded-full hover:bg-white/10">
            How it works <ArrowRight />
          </a>
        </div>
      </div>

      {/* Decoration Column */}
      <div className={`flex items-center justify-center ${reverseOrder ? 'sm:order-0' : 'sm:order-1'}`}>
        <DecorationBox listingDetails={listingDetails} reverseOrder={reverseOrder} />
      </div>

    </div>
  );
};

export default AlternatingFeature;
