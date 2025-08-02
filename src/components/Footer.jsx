import { Logo } from "./Icons";

const Footer = () => (
    <footer className="bg-primary text-muted">
        <div className="px-6 py-16 mx-auto max-w-7xl">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                    <a href="#" className="flex items-center gap-3">
                        <Logo className="h-8 w-auto" />
                        <span className="text-2xl font-semibold text-ink">BlockEstate</span>
                    </a>
                    <p className="text-base">Connecting Crypto with Real Estate</p>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-12 xl:col-span-2 xl:mt-0 md:grid-cols-4">
                    <div>
                        <h3 className="font-semibold text-ink">For Buyers</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="hover:text-ink">How it works</a></li>
                            <li><a href="#" className="hover:text-ink">Buyer's portal</a></li>
                            <li><a href="#" className="hover:text-ink">Agent directory</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-ink">For Sellers</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="hover:text-ink">How it works</a></li>
                            <li><a href="#" className="hover:text-ink">Seller's portal</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-ink">For Agents</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="hover:text-ink">Find out more</a></li>
                            <li><a href="#" className="hover:text-ink">Connect with us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-ink">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="hover:text-ink">About</a></li>
                            <li><a href="#" className="hover:text-ink">Contact</a></li>
                            <li><a href="#" className="hover:text-ink">Press & News</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-8 mt-12 text-sm text-center border-t border-gray-800">
                <p>&copy; {new Date().getFullYear()} BlockEstate, Inc. All Rights Reserved.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="hover:text-ink">Privacy Policy</a>
                    <a href="#" className="hover:text-ink">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;