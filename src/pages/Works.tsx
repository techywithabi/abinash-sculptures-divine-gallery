
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

// Portfolio items with the new images and no titles
const portfolioItems = [
  {
    id: 1,
    image: "public/lovable-uploads/0457c075-c729-42a2-836b-bbf3df54d2c9.png",
  },
  {
    id: 2,
    image: "public/lovable-uploads/b2ebf3a9-2000-46ff-b11a-43e28b87b75a.png",
  },
  {
    id: 3,
    image: "public/lovable-uploads/6d09b764-aa75-44ec-96fa-db1eb2263f23.png",
  },
  {
    id: 4,
    image: "public/lovable-uploads/d38e1f03-7cfe-44d6-b937-ec2e904f0ba8.png",
  },
  {
    id: 5,
    image: "public/lovable-uploads/2ac6deb5-31c6-4148-8510-c4bf6c6acd02.png",
  },
  {
    id: 6,
    image: "public/lovable-uploads/7060ef89-5cc5-4a1a-a301-1683d3446f7a.png",
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

// Portfolio Item Component with Parallax Effect - removed title display
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
        alt="Divine sculpture" 
        className="w-full h-auto object-cover" 
      />
    </div>
  );
};

export default Works;
