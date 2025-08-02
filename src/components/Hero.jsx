import { ArrowRight } from './Icons';

const Hero = () => {
  // NOTE: Unsplash images are random. They will change on each page load.
  const heroImageUrl = "https://blockestate-stage.vercel.app/images/buying-real-estate-with-crypto-real-open-UAWARF4F.webp";

  return (
    <div className="bg-custom text-ink">
      <div className="relative max-w-7xl mx-auto py-10 lg:py-20 px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="font-serif text-5xl lg:text-6xl tracking-tight">
                <span className="block">Buy <span className="text-rovio300">real estate</span></span>
                <span className="block">with crypto</span>
              </h1>
              <p className="mt-4 font-sans text-lg font-bold text-rovio300">
                The seller receives cash. You don't need a crypto-friendly seller.
              </p>
            </div>
            <div className="space-y-5 text-lg leading-6 text-muted">
              <p>We convert your crypto to cash en route to escrow. Buy any house, land, condo, or commercial property from developers, builders, or banks.</p>
              <p>No lossy public trades, no withdrawal limits. Leverage your crypto however you want to.</p>
              <p className="font-semibold text-rovio300">Buy real estate with crypto—from any seller.</p>
            </div>
            <div className="flex flex-row items-center gap-4 pt-5">
              <a href="#" className="flex items-center gap-2 px-5 py-3 text-base font-medium text-black transition-all bg-white rounded-full hover:bg-gray-200">
                Get started <ArrowRight />
              </a>
              <a href="#" className="flex items-center gap-2 px-5 py-3 text-base font-medium transition-all text-violet-100 bg-black/20 rounded-full hover:bg-black/40">
                Learn more <ArrowRight />
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="mt-12 lg:mt-[-40px] flex items-center justify-center">
            <img src={heroImageUrl} alt="Modern house representing buying real estate with crypto" className="rounded-lg shadow-2xl aspect-square object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;