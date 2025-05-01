
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { cn } from "../lib/utils";

// Sample testimonial data - this would typically come from a CMS or API
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Chennai, India",
    content: "The craftsmanship on our Ganesha statue is extraordinary. Every detail has been carved with devotion and precision. It now serves as the centerpiece of our family temple.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai, India",
    content: "We commissioned a custom temple entrance for our home, and Abinash Sculptures exceeded our expectations. The intricate details and spiritual essence of their work is unmatched.",
    rating: 5
  },
  {
    id: 3,
    name: "David Johnson",
    location: "San Francisco, USA",
    content: "The Buddha sculpture I purchased radiates such peace and tranquility. You can feel the devotion that went into creating it. It's not just art - it's a spiritual presence in my home.",
    rating: 5
  },
  {
    id: 4,
    name: "Lakshmi Venkatesh",
    location: "Bangalore, India",
    content: "Our temple committee chose Abinash Sculptures for our renovation project. The quality, attention to traditional details, and their deep understanding of temple architecture made them the perfect choice.",
    rating: 5
  },
  {
    id: 5,
    name: "Michael Wong",
    location: "Singapore",
    content: "I've collected sculptures from around the world, but the Saraswati piece I commissioned from Abinash has a special quality. The stone seems to come alive with divine energy.",
    rating: 5
  },
  {
    id: 6,
    name: "Amrita Patel",
    location: "Delhi, India",
    content: "Working with Abinash Sculptures was a seamless experience from consultation to installation. They listened carefully to our requirements and delivered a masterpiece that exceeded our expectations.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <ParallaxSection 
        backgroundImage="public/lovable-uploads/8c53f04a-1e32-4a72-9267-97b36cf888d5.png"
        overlayOpacity={0.7}
        minHeight="400px"
        className="mt-16"
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-divine-cream mb-4">
            Client Testimonials
          </h1>
          <p className="text-divine-cream/90 max-w-2xl mx-auto">
            Read what our clients have to say about their experience with Abinash Sculptures
            and the divine artwork we've created for them.
          </p>
        </div>
      </ParallaxSection>
      
      {/* Featured Testimonial */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="Voices of appreciation for our divine creations"
          />
          
          <div className="mt-12 bg-divine-beige/20 rounded-lg p-8 md:p-12 relative">
            <div className="text-divine-copper text-9xl font-serif absolute top-0 left-0 transform -translate-y-1/2 opacity-20">"</div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-playfair italic mb-8">
                "The craftsmanship on our Ganesha statue is extraordinary. Every detail has been 
                carved with devotion and precision. It now serves as the centerpiece of our 
                family temple."
              </p>
              
              <div className="flex items-center">
                <div>
                  <p className="font-bold">Rajesh Kumar</p>
                  <p className="text-muted-foreground">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Submit Testimonial Section */}
      <section className="bg-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader 
            title="Share Your Experience" 
            subtitle="We value your feedback about our divine creations"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            If you've purchased a sculpture or architectural element from us, we would love to hear 
            about your experience. Your testimonial helps us improve our craft and share the 
            divine experience with others.
          </p>
          
          <div className="bg-card rounded-lg p-8 md:p-12 max-w-2xl mx-auto shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="testimonial" className="block text-sm font-medium">
                  Your Testimonial
                </label>
                <textarea
                  id="testimonial"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <StarIcon key={rating} filled={true} />
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                className="bg-divine-copper hover:bg-divine-copper/80 text-divine-cream px-4 py-2 rounded-md transition-colors"
              >
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Star Icon Component
const StarIcon = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? "#B87333" : "none"}
      stroke={filled ? "#B87333" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      className={cn(
        "bg-card rounded-lg p-6 shadow-md h-full",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ 
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        transitionDelay: `${Math.random() * 0.3}s`
      }}
    >
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} filled={true} />
        ))}
      </div>
      <p className="italic mb-6">{testimonial.content}</p>
      <div>
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-muted-foreground text-sm">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default Testimonials;
