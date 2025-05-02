
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

// Sample portfolio data - updated with real images
const portfolioItems = [
  {
    id: 1,
    title: "Lord Ganesha",
    image: "public/lovable-uploads/7060ef89-5cc5-4a1a-a301-1683d3446f7a.png",
  },
  {
    id: 2,
    title: "Temple Structure",
    image: "public/lovable-uploads/1808cfbc-178b-4cca-9ec7-8bef88cb69dd.png",
  },
  {
    id: 3,
    title: "Meditating Buddha",
    image: "public/lovable-uploads/86cb314e-a1a7-49fc-a513-e2fdd3d41bf8.png",
  },
  {
    id: 4,
    title: "Goddess Mariamman",
    image: "public/lovable-uploads/8c53f04a-1e32-4a72-9267-97b36cf888d5.png",
  },
  {
    id: 5,
    title: "Standing Buddha",
    image: "public/lovable-uploads/a40e6766-b363-4d69-901c-f152d75e8a65.png",
  },
  {
    id: 6,
    title: "Lord Shiva and Parvati",
    image: "public/lovable-uploads/43539b7e-0525-477c-b6d8-c15967a962f7.png",
  }
];

const Works = () => {
  const [items, setItems] = useState(portfolioItems);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <ParallaxSection 
        backgroundImage="public/lovable-uploads/43539b7e-0525-477c-b6d8-c15967a962f7.png"
        overlayOpacity={0.7}
        minHeight="400px"
        className="mt-16"
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-divine-cream mb-4">
            Our Divine Works
          </h1>
          <p className="text-divine-cream/90 max-w-2xl mx-auto">
            Explore our gallery of spiritual sculptures and architectural elements, 
            each crafted with devotion and masterful technique.
          </p>
        </div>
      </ParallaxSection>
      
      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
          
          {items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <ParallaxSection 
        backgroundImage="public/lovable-uploads/1808cfbc-178b-4cca-9ec7-8bef88cb69dd.png"
        overlayOpacity={0.7}
        minHeight="400px"
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-divine-cream mb-6">
            Interested in a Custom Piece?
          </h2>
          <p className="text-divine-cream/90 max-w-2xl mx-auto mb-8">
            Our master sculptors can create a divine piece tailored to your specific requirements.
            Contact us to discuss your vision for a custom sculpture or architectural element.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking">
              <Button className="bg-divine-copper hover:bg-divine-copper/80">
                Book an Order
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-divine-cream text-divine-cream hover:bg-divine-cream/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </ParallaxSection>
      
      <Footer />
    </div>
  );
};

// Portfolio Item Component with Parallax Effect
const PortfolioItem = ({ item }: { item: typeof portfolioItems[0] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={itemRef} 
      className={cn(
        "bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ 
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        transitionDelay: `${Math.random() * 0.3}s`
      }}
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-auto object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-bold font-playfair text-center">{item.title}</h3>
      </div>
    </div>
  );
};

export default Works;
