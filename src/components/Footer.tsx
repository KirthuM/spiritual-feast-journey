
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="relative bg-spiritual-800 text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-display-text text-xl mb-6">Spiritual Dining</h2>
            <p className="text-white/70 mb-6">
              A first-of-its-kind vegetarian restaurant in Hyderabad, offering a unique spiritual dining experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display-text text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-white transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#experience" className="text-white/70 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#booking" className="text-white/70 hover:text-white transition-colors">Book a Table</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display-text text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="text-white/70">
                <span className="block font-medium text-white">Tuesday - Sunday</span>
                Lunch: 12:00 PM - 3:00 PM<br />
                Dinner: 7:00 PM - 10:00 PM
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Monday</span>
                Closed
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display-text text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-spiritual-400 mr-3 mt-1" />
                <span className="text-white/70">
                  Gachibowli, Hyderabad,<br />
                  Telangana 500032
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-spiritual-400 mr-3" />
                <a href="tel:+919848772991" className="text-white/70 hover:text-white transition-colors">
                  +91 98487 72991
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-spiritual-400 mr-3" />
                <a href="mailto:chakracuisine@spiritualdining.com" className="text-white/70 hover:text-white transition-colors break-all">
                  chakracuisine@spiritualdining.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Spiritual Dining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
