import { ArrowRight } from './Icons';

const BuyAny = () => {
  const houseImageUrl = "https://blockestate-stage.vercel.app/images/house-for-sale-crypto-accepted-ST5FYMDV.png";

  return (
    <section className="py-24 bg-black">
      <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto px-6">
        <div className="flex flex-col w-full gap-6">
          <h3 className="font-serif text-4xl sm:text-5xl text-ink">
            <b>Buy any home on the market</b>
          </h3>
          <div className="flex justify-center">
            <img 
              src={houseImageUrl} 
              className="text-center max-w-xl w-full" 
              alt="A house with a for sale sign where crypto is accepted"
            />
          </div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Buy real estate with Bitcoin, Ethereum, USDC, or any other marketable cryptocurrency. With BlockEstate you're a cash buyer in the eyes of every seller—so any home on the market is an option.
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 px-5 py-3 text-base font-medium text-black transition-all bg-white rounded-full hover:bg-gray-200">
          How to buy with crypto
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default BuyAny;
