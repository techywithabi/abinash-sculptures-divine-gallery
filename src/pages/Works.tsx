
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
    category: "Hindu Gods",
    image: "public/lovable-uploads/7060ef89-5cc5-4a1a-a301-1683d3446f7a.png",
    description: "Intricately carved Ganesha statue with traditional iconography and posture."
  },
  {
    id: 2,
    title: "Temple Structure",
    category: "Stone Temples",
    image: "public/lovable-uploads/1808cfbc-178b-4cca-9ec7-8bef88cb69dd.png",
    description: "Ornate temple entrance with detailed carvings following sacred geometry principles."
  },
  {
    id: 3,
    title: "Meditating Buddha",
    category: "Buddhas",
    image: "public/lovable-uploads/86cb314e-a1a7-49fc-a513-e2fdd3d41bf8.png",
    description: "Serene Buddha statue in meditation pose, radiating peace and tranquility."
  },
  {
    id: 4,
    title: "Goddess Mariamman",
    category: "Hindu Gods",
    image: "public/lovable-uploads/8c53f04a-1e32-4a72-9267-97b36cf888d5.png",
    description: "Beautiful black stone sculpture of Goddess adorned with traditional attire."
  },
  {
    id: 5,
    title: "Standing Buddha",
    category: "Buddhas",
    image: "public/lovable-uploads/a40e6766-b363-4d69-901c-f152d75e8a65.png",
    description: "Elegant standing Buddha sculpture with Abhaya Mudra, symbolizing protection and fearlessness."
  },
  {
    id: 6,
    title: "Lord Shiva and Parvati",
    category: "Hindu Gods",
    image: "public/lovable-uploads/43539b7e-0525-477c-b6d8-c15967a962f7.png",
    description: "Divine couple Shiva and Parvati sculpture, symbolizing cosmic balance and eternal love."
  }
];

const categories = ["All", "Hindu Gods", "Stone Temples", "Buddhas"];

const Works = () => {
  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState(portfolioItems);
  
  // Filter items based on selected category
  useEffect(() => {
    if (filter === "All") {
      setItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(item => item.category === filter);
      setItems(filtered);
    }
  }, [filter]);

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
      
      {/* Portfolio Filter */}
      <section className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={cn(
                  filter === category 
                    ? "bg-divine-copper hover:bg-divine-copper/90" 
                    : "border-divine-copper text-divine-copper hover:bg-divine-copper/10"
                )}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
          
          {items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found in this category.</p>
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
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
          style={{ backgroundImage: `url(${item.image})` }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-playfair">{item.title}</h3>
          <span className="text-sm text-divine-copper px-2 py-1 bg-divine-copper/10 rounded-full">
            {item.category}
          </span>
        </div>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <Button variant="link" className="text-divine-copper p-0">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Works;
