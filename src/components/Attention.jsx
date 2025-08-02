import { ArrowRight, EarthIcon } from './Icons';

const Attention = () => {
  return (
    <>
      {/* Section 1: Attention Agents & Brokers */}
      <div className="bg-custom py-24">
        <div className="max-w-screen-sm mx-auto text-center px-6">
          <div className="space-y-6">
            <h3 className="font-serif text-4xl sm:text-5xl text-ink">
              Attention Agents & Brokers
            </h3>
            <p className="font-sans text-xl font-medium text-muted">
              BlockEstate Partner Agents are winning more listings, closing monster deals, and making big waves as crypto-expert agents.
            </p>
          </div>
          <div className="flex items-center justify-center mt-12">
            <a href="#" className="flex items-center gap-2 px-5 py-2 text-base font-medium text-black transition-all bg-white rounded-full hover:bg-gray-200">
              Learn how <ArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* Section 2: Sell with BlockEstate */}
      <div className="bg-violet-100 py-24">
        <div className="max-w-screen-sm mx-auto text-center px-6">
          <div className="space-y-8">
            <div className="flex justify-center">
              <EarthIcon className="h-32 w-32 text-violet-800" />
            </div>
            <h3 className="font-serif text-4xl sm:text-5xl text-violet-900">
              Sell with BlockEstate
            </h3>
            <p className="font-sans text-xl font-medium text-violet-800">
              Include the crypto community in your buyer pool and leverage our massive global marketing reach.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href="#" className="flex items-center gap-2 px-5 py-3 text-base font-medium text-white transition-all bg-violet-900 rounded-full hover:bg-violet-800 w-full sm:w-auto justify-center">
              Get started for free <ArrowRight />
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-3 text-base font-medium text-violet-900 transition-all bg-transparent rounded-full hover:bg-black/10 w-full sm:w-auto justify-center">
              Benefits & process <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attention;
