
import { useEffect, useRef } from 'react';

const experiences = [
  {
    title: "Spiritual Food Practices",
    description: "Before each meal, a moment of gratitude is observed. Food is blessed and honored for its journey from earth to table.",
    icon: "🙏",
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Sacred Dining Environment",
    description: "Our space is designed to promote mindfulness, with natural materials, soft lighting, and elements that connect to nature.",
    icon: "✨",
    imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Open Kitchen Concept",
    description: "Watch as your food is prepared with intention and care. Our transparent kitchen embodies our commitment to honesty and purity.",
    icon: "👨‍🍳",
    imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const testimonials = [
  {
    quote: "Dining here was truly a transformative experience. The mindfulness and intention behind every aspect was palpable.",
    author: "Priya M.",
    role: "Wellness Coach"
  },
  {
    quote: "The food nourished not just my body but my soul. I left feeling centered and at peace. A must-visit in Hyderabad.",
    author: "Anand R.",
    role: "Spiritual Practitioner"
  },
  {
    quote: "As someone deeply interested in the connection between food and spirituality, this restaurant exceeded all my expectations.",
    author: "Lakshmi K.",
    role: "Ayurvedic Doctor"
  }
];

const Experience = () => {
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
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="tag mb-4 animate-reveal">Our Unique Approach</span>
          <h2 className="font-display text-3xl md:text-4xl mb-6 animate-reveal reveal-delay-200">
            The Spiritual Dining Experience
          </h2>
          <p className="max-w-2xl mx-auto text-spiritual-800/80 mb-6 animate-reveal reveal-delay-400">
            More than a meal, we offer a holistic experience that honors ancient wisdom while creating a modern, mindful space for nourishment.
          </p>
          <div className="w-20 h-0.5 bg-spiritual-400 mx-auto animate-reveal reveal-delay-400"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="glass-card p-8 animate-reveal"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="h-48 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={exp.imageSrc} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-xl mb-4">{exp.title}</h3>
                <p className="text-spiritual-800/80">{exp.description}</p>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="bg-cream-50 rounded-xl p-10 mb-14 animate-reveal reveal-delay-200">
            <h3 className="font-display text-2xl mb-8 text-center">
              Voices of Transformation
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-soft animate-reveal"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <svg 
                    className="w-10 h-10 text-spiritual-300 mb-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                  <p className="italic mb-4 text-spiritual-800/90">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-spiritual-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Workshops & Events */}
          <div className="glass-card p-10 animate-reveal reveal-delay-400">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="font-display text-2xl mb-4">Workshops & Events</h3>
                <p className="mb-6 text-spiritual-800/80">
                  Join us for immersive workshops on mindful eating, spiritual cooking, and holistic living. We regularly host events that deepen your connection to food and its sacred role in our lives.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-spiritual-600 mr-2">•</span> 
                    <span>Monthly cooking demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-spiritual-600 mr-2">•</span> 
                    <span>Seasonal celebration feasts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-spiritual-600 mr-2">•</span> 
                    <span>Mindful eating workshops</span>
                  </li>
                </ul>
                <a href="#contact" className="btn btn-outline">
                  Inquire About Events
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                    <img 
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Workshop at Spiritual Dining" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-spiritual-100 rounded-xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
