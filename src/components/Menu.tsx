
import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuCategories = [
  { id: "sattvic", name: "Sattvic Cuisine" },
  { id: "traditional", name: "Traditional Recipes" },
  { id: "specialties", name: "Chef's Specialties" },
];

const menuItems = {
  sattvic: [
    {
      name: "Divine Quinoa Bowl",
      description: "Nutrient-rich quinoa with fresh seasonal vegetables, herbs, and a light lemon dressing.",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Organic", "Gluten-Free"]
    },
    {
      name: "Sacred Millet Khichdi",
      description: "Ancient millet cooked with healing spices, lentils, and seasonal vegetables.",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Ayurvedic", "Protein-Rich"]
    },
    {
      name: "Mindful Vegetable Thali",
      description: "A balanced platter of seasonal preparations, served with hand-milled rice and millet bread.",
      price: "₹380",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Balanced", "Traditional"]
    },
  ],
  traditional: [
    {
      name: "Grandmother's Adai Dosa",
      description: "Multi-lentil dosa with traditional spices, served with homemade chutneys.",
      price: "₹250",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Heritage Recipe", "Protein-Rich"]
    },
    {
      name: "Temple Puliyogare",
      description: "Tamarind rice prepared in the tradition of South Indian temples, with slow-roasted spices.",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Temple-Style", "Tamarind"]
    },
    {
      name: "Vedic Sambar Rice",
      description: "Fragrant rice cooked with lentils and vegetables in a traditional sambar preparation.",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Vedic", "Nourishing"]
    },
  ],
  specialties: [
    {
      name: "Founder's Special Thali",
      description: "A curated selection of our founder's favorite dishes, representing the essence of spiritual dining.",
      price: "₹450",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Signature", "Complete Meal"]
    },
    {
      name: "Maharishi's Feast",
      description: "A royal preparation inspired by ancient texts, featuring nine complementary flavors.",
      price: "₹420",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Royal", "Festive"]
    },
    {
      name: "Seasonal Celebration",
      description: "A rotating special that honors the current season's harvest with Chef's creative touch.",
      price: "₹380",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Seasonal", "Chef's Special"]
    },
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("sattvic");
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
  }, [activeTab]);

  return (
    <section id="menu" className="section-padding bg-spiritual-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="tag mb-4 animate-reveal">Our Offerings</span>
          <h2 className="font-display text-3xl md:text-4xl mb-6 animate-reveal reveal-delay-200">
            Spiritual Dining Menu
          </h2>
          <p className="max-w-2xl mx-auto text-spiritual-800/80 mb-6 animate-reveal reveal-delay-400">
            Our menu features mindfully prepared vegetarian dishes using organic, locally sourced ingredients. Each dish is crafted with intention and devotion.
          </p>
          <div className="w-20 h-0.5 bg-spiritual-400 mx-auto animate-reveal reveal-delay-400"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="sattvic" className="w-full animate-reveal reveal-delay-200">
            <TabsList className="w-full flex mb-10 bg-transparent justify-center border-b border-spiritual-200">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="flex-1 max-w-[200px] data-[state=active]:border-b-2 data-[state=active]:border-spiritual-500 data-[state=active]:text-spiritual-800 data-[state=active]:shadow-none rounded-none bg-transparent py-4 font-display"
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid gap-8">
                  {items.map((item, index) => (
                    <div 
                      key={index} 
                      className="glass-card overflow-hidden flex flex-col md:flex-row animate-reveal"
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                      <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-display text-xl">{item.name}</h3>
                            <span className="font-medium text-spiritual-600">{item.price}</span>
                          </div>
                          <p className="text-spiritual-800/80 mb-4">{item.description}</p>
                          <div className="flex gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="tag text-xs">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-12 text-center animate-reveal reveal-delay-600">
            <p className="italic text-spiritual-800/80 mb-6">
              "Our menu changes seasonally to honor nature's rhythms and ensure the freshest ingredients."
            </p>
            <a href="#booking" className="btn btn-primary">
              Reserve Your Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
