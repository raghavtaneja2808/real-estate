import { useState } from 'react';
import { Logo, ArrowRight, MenuIcon } from './Icons';
import { Link } from 'react-router-dom';

const navLinks = ["Buy", "Sell", "Agents", "Contact", "Blog", "About"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-secondary sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center gap-3">
            <Logo className="h-8 w-auto" />
            <span className="text-2xl font-semibold text-ink">BlockEstate</span>
          </a>
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-muted hover:text-ink transition-colors duration-200">{link}</a>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Link to='/get_started' > <a href="#" className="flex items-center gap-2 bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Get started <ArrowRight className="text-black" />
            </a>
            </Link>
        </div>
        <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3">
          {navLinks.map(link => (
              <a key={link} href="#" className="text-muted hover:text-ink transition-colors duration-200">{link}</a>
          ))}
          <a href="#" className="flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition-colors mt-2">
            Get started <ArrowRight className="text-black" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;