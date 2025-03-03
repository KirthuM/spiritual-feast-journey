
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 animate-reveal">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl mb-6 animate-reveal reveal-delay-200">
              The Vision Behind Spiritual Dining
            </h2>
            <div className="w-20 h-0.5 bg-spiritual-400 mx-auto animate-reveal reveal-delay-400"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-reveal reveal-delay-200">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-glow">
                  <img 
                    src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Spiritual Dining Founder" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cream-100 rounded-xl -z-10"></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-2xl mb-4 animate-reveal">
                Srinivas Chakravarthy Mutyala
              </h3>
              <p className="text-spiritual-800/80 italic mb-6 animate-reveal reveal-delay-200">
                "My 25-year journey in brand promotion and spiritual practice led me to create a space where dining becomes a sacred experience."
              </p>
              <div className="space-y-4 animate-reveal reveal-delay-400">
                <p className="text-balance">
                  The concept of Bhojanalayam is deeply rooted in the teachings of Bhagavan Sri Ramana Maharshi, emphasizing mindfulness and devotion in every aspect of life, including the preparation and consumption of food.
                </p>
                <p className="text-balance">
                  At Spiritual Dining, we believe that food is more than sustenance—it's a vehicle for spiritual growth and community connection. Our restaurant embodies this philosophy through thoughtfully prepared vegetarian cuisine, a sacred dining environment, and practices that honor the food we eat.
                </p>
              </div>
              
              <div className="mt-8 animate-reveal reveal-delay-600">
                <a href="#experience" className="btn btn-outline">
                  Learn More About Our Experience
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-20 glass-card p-8 md:p-12 animate-reveal reveal-delay-400">
            <h3 className="font-display text-2xl mb-6 text-center">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-spiritual-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-spiritual-600">1</span>
                </div>
                <h4 className="font-display text-lg mb-2">Mindfulness</h4>
                <p className="text-sm text-spiritual-800/80">
                  Being present and intentional in food preparation and consumption.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-spiritual-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-spiritual-600">2</span>
                </div>
                <h4 className="font-display text-lg mb-2">Devotion</h4>
                <p className="text-sm text-spiritual-800/80">
                  Approaching food with reverence and gratitude for its life-giving properties.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-spiritual-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-spiritual-600">3</span>
                </div>
                <h4 className="font-display text-lg mb-2">Holistic Living</h4>
                <p className="text-sm text-spiritual-800/80">
                  Nurturing body, mind, and spirit through conscious food choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
