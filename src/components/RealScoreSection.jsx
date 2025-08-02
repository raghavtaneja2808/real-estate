import { ArrowRight, CheckIcon, Logo } from "./Icons";

const RealScoreCard = () => (
  <div className="overflow-hidden rounded-lg shadow-2xl">
    <div className="w-full space-y-4 bg-white border border-gray-200 rounded-t-lg">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8"/>
          <div className="flex justify-between w-full">
            <p className="text-lg font-bold text-violet-900">RealScore™</p>
            <p className="text-xs text-gray-400">by BlockEstate</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-medium text-green-700">This offer is extremely unlikely to be affected by volatility.</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">RealScores are calculated using a combination of:</p>
            <div className="grid grid-cols-1 gap-1 text-sm text-green-800 md:grid-cols-2">
              <div className="flex items-center gap-1.5"><CheckIcon className="text-green-500" /> Diversified portfolio</div>
              <div className="flex items-center gap-1.5"><CheckIcon className="text-green-500" /> Holdings in excess of offer</div>
              <div className="flex items-center gap-1.5"><CheckIcon className="text-green-500" /> Additional collateral</div>
              <div className="flex items-center gap-1.5"><CheckIcon className="text-green-500" /> 7-day closing minimizes risk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6 space-y-4 bg-gray-100 rounded-b-lg">
      <div className="relative w-full h-2 bg-gradient-to-r from-rose-200 via-yellow-200 to-green-200 rounded-full">
        <div className="absolute h-5 w-5 bg-green-500 border-4 rounded-full shadow-lg border-white top-1/2 -translate-y-1/2" style={{ left: '90%' }}></div>
      </div>
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-green-600 uppercase">Excellent</p>
        <div className="max-w-md mx-auto text-sm text-green-800">Downside volatility in crypto values larger than any in the past <strong>3 years</strong> would be required to jeopardize this offer.</div>
      </div>
    </div>
  </div>
);


const RealScoreSection = () => (
    <div className="bg-custom">
        <div className="px-6 py-24">
            <div className="container grid items-center grid-cols-1 gap-16 mx-auto md:grid-cols-2 max-w-7xl">
                <div className="space-y-6 text-left">
                    <div className="px-3 py-1 text-xs font-bold text-white uppercase rounded-full bg-violet-700 w-min">New</div>
                    <h3 className="font-serif text-4xl text-violet-100 sm:text-5xl text-ink">RealScore™</h3>
                    <p className="font-sans text-xl font-medium text-violet-300">Nix the seller's crypto concerns with RealScore™.</p>
                    <p className="font-sans text-xl font-medium text-muted">Our patent-pending technology analyzes your crypto basket, adjusts for coin-specific volatility, and presents a clear stability grade for your offer.</p>
                    <div className="flex items-center pt-6">
                        <a href="#" className="flex items-center gap-2 px-5 py-3 text-base font-medium text-black transition-all bg-white rounded-full hover:bg-gray-200">
                           How it works <ArrowRight />
                        </a>
                    </div>
                </div>
                <RealScoreCard />
            </div>
        </div>
    </div>
);

export default RealScoreSection;