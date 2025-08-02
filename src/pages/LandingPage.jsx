import Header from '../components/Header';
import Hero from '../components/Hero';
import AlternatingFeature from '../components/AlternatingFeature';
import LatestListings from '../components/LatestListings';
import BlogSection from '../components/BlogSection';
import RealScoreSection from '../components/RealScoreSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import BuyAny from '../components/BuyAny';

// --- DATA --- //
// You can move this data to a separate file later if you want
const featuresData = [
    {
        title: "Use your crypto without withdrawal limits",
        description: "Buy with a single crypto transfer. Convert crypto to fiat, in any amount, with no withdrawal restrictions. Invest crypto profits on your terms.",
        listingDetails: { location: "Coral Gables, FL", price: "$8.5 million", btc: "124.6 BTC", eth: "3,213 ETH" },
        reverseOrder: false,
    },
    {
        title: "Buy real estate <br/>anywhere",
        description: "BlockEstate is a global platform, so you can buy a house in any location, from anywhere on the globe.",
        listingDetails: { location: "New York City, NY", price: "$33.25 million", btc: "487.8 BTC", eth: "12,578 ETH" },
        reverseOrder: true,
    },
    {
        title: "Save up to 10% of the home purchase price!",
        description: "Our prime OTC trade desk executes your trade off-market, off-chain, in a single fill. No slippage, no matter how large the trade.",
        listingDetails: { location: "Houston, TX, US", price: "$6 million", btc: "88.0 BTC", eth: "2,268 ETH" },
        reverseOrder: false,
    },
    {
        title: "Never cash out before closing",
        description: "Stay in crypto until closing day, delay the taxable event, and avoid being left holding unwanted excess cash.",
        listingDetails: { location: "Hialeah Gardens, FL", price: "$5.5 million", btc: "80.7 BTC", eth: "2,081 ETH" },
        reverseOrder: true,
    },
];

const listingsData = {
    cities: ["Miami", "New York", "Houston", "Commercial"],
    listings: [
        { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvlFylKJNRPeH-UFdItJbVmxtRvS2TgtgJw&s", address: "2955 Whitehead St #2955", city: "Coconut Grove, FL" },
        { imageUrl: "https://photos.zillowstatic.com/fp/ba75bf275e8fb9ef7dfa588812dcc0ca-p_c.jpg", address: "181 Crandon Blvd #303", city: "Key Biscayne, FL" },
        { imageUrl: "https://fl-photos-static.idxboost.us/60/A11797460_1.jpeg", address: "1330 West Ave #1414", city: "Miami Beach, FL" },
        { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jcFkXpm6r7b950Jtk_ygrZPQMvLe6EenHQ&s", address: "7200 Los Pinos Blvd", city: "Coral Gables, FL" },
        { imageUrl: "https://photos.zillowstatic.com/fp/cd8001bc55b0672e72637801c7d3210c-p_c.jpg", address: "15811 Collins Ave #3302", city: "Sunny Isles Beach, FL" },
        { imageUrl: "https://photos.zillowstatic.com/fp/030c9891dc12a151add01af4df1de5cf-cc_ft_960.jpg", address: "1229 Andora Ave", city: "Coral Gables, FL" },
    ]
};

const blogPostsData = [
    {
        author: "Johnny Schiro", readTime: "3", imageUrl: "https://realopen.ghost.io/content/images/2024/08/E297A959-6173-4389-B134-AFC0F55B0120.webp",
        title: "Crypto Real Estate Demystified",
        excerpt: "The term Crypto Real Estate covers various innovative uses of crypto in real estate, from transactions to tokenization. Learn how."
    },
    {
        author: "Johnny Schiro", readTime: "2", imageUrl: "https://realopen.ghost.io/content/images/2024/05/buy-a-home-with-crypto.webp",
        title: "New Options for Buying Real Estate with Crypto",
        excerpt: "More flexibility, efficiency, and control: we've just added two new funding options for buying real estate with crypto."
    }
];

const faqData = [
    { question: "Can I buy property with crypto?", answer: "Yes, you can buy a home with cryptocurrency using BlockEstate's crypto-to-fiat service. The platform allows you to purchase any property—whether on-market or off-market—using Bitcoin, Ethereum, USDC, and other marketable cryptocurrencies." },
    { question: "Do escrow companies accept crypto for real estate purchases?", answer: "Most escrow companies do not directly accept cryptocurrency. To buy a home with crypto, you can leverage BlockEstate's crypto-to-fiat service to convert your crypto into fiat en route to escrow." },
    { question: "Where can I find listings that accept crypto?", answer: "BlockEstate allows you to purchase any property with crypto, so there's no need to limit your search to crypto-friendly listings. You can buy from any seller, and they will receive fiat at closing." },
    { question: "What if crypto prices drop during the transaction?", answer: "BlockEstate mitigates price volatility by converting your crypto at the time of closing. Our RealScore system assesses the stability of your offer, minimizing the risk of price fluctuations affecting your purchase." },
];


const LandingPage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <BuyAny />

                <div className="bg-custom text-ink">
                    <div className="max-w-screen-xl px-6 py-24 mx-auto space-y-32">
                        {featuresData.map((feature, index) => (
                            <AlternatingFeature key={index} {...feature} />
                        ))}
                    </div>
                </div>
                <LatestListings cities={listingsData.cities} listings={listingsData.listings} />
                <BlogSection blogPosts={blogPostsData} />
                <RealScoreSection />
                <FAQ faqData={faqData} />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;