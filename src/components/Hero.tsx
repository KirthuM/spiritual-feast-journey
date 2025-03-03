
import { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-reveal');
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      if (observerRef.current) {
        elements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image - optimized for smooth loading */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center animate-scale-in" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block tag text-sm uppercase tracking-wider mb-4 animate-reveal font-medium text-white bg-primary/30">
            Welcome to Spiritual Dining
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6 animate-reveal reveal-delay-200 drop-shadow-lg">
            Food prepared with sincerity, devotion, and love brings its own reward.
          </h1>
          <p className="font-serif text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-reveal reveal-delay-400 drop-shadow-md">
            Experience a first-of-its-kind vegetarian restaurant in Hyderabad that nourishes both body and soul.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal reveal-delay-600">
            <a href="#booking" className="btn btn-primary">
              Book a Table
            </a>
            <a href="#menu" className="btn btn-outline text-white border-white hover:bg-white/20 hover:text-white bg-white/10">
              Explore Menu
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/80 hover:text-white transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDownCircle className="h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;
