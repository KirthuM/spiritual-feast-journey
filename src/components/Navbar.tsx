
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-10",
        isScrolled 
          ? "py-3 glass shadow-sm border-b border-white/20" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <h1 className="font-display text-xl md:text-2xl font-medium">
            <span className="text-spiritual-600">Spiritual</span> Dining
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="menu-link">Home</Link>
          <Link to="/#about" className="menu-link">About</Link>
          <Link to="/#menu" className="menu-link">Menu</Link>
          <Link to="/#experience" className="menu-link">Experience</Link>
          <Link to="/#contact" className="menu-link">Contact</Link>
          <a href="#booking" className="btn btn-primary">Book a Table</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-spiritual-800" />
          ) : (
            <Menu className="h-6 w-6 text-spiritual-800" />
          )}
        </button>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}>
          <nav className="flex flex-col items-center space-y-6">
            <Link 
              to="/" 
              className="menu-link text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="menu-link text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#menu" 
              className="menu-link text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#experience" 
              className="menu-link text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="menu-link text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#booking" 
              className="btn btn-primary mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Table
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
