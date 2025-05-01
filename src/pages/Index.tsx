import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ImageWithOverlay from "../components/ImageWithOverlay";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-divine-beige/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
        <div className="container mx-auto px-4 z-10 text-center py-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
            <span className="text-divine-copper">Divine</span> Sculptures by Abinash
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Make Your Divine Presence With Abinash Sculptures - Crafting spiritual elegance 
            through traditional stone artistry in Mamallapuram, Tamil Nadu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/works">
              <Button className="bg-divine-copper hover:bg-divine-copper/80">
                Explore Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-divine-copper text-divine-copper hover:bg-divine-copper/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Divine Services" subtitle="Traditional craftsmanship with spiritual significance" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-divine-copper rounded-full flex items-center justify-center mb-4">
                <span className="text-divine-cream text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Hindu Gods</h3>
              <p className="text-muted-foreground mb-4">
                Intricately carved deities that embody divine energy and spiritual significance,
                crafted with precision and devotion.
              </p>
              <Link to="/services" className="text-divine-copper font-medium hover:underline">
                Learn More &rarr;
              </Link>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-divine-copper rounded-full flex items-center justify-center mb-4">
                <span className="text-divine-cream text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Stone Temples</h3>
              <p className="text-muted-foreground mb-4">
                Architectural marvels that create sacred spaces, designed with traditional 
                principles and executed with master craftsmanship.
              </p>
              <Link to="/services" className="text-divine-copper font-medium hover:underline">
                Learn More &rarr;
              </Link>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-divine-copper rounded-full flex items-center justify-center mb-4">
                <span className="text-divine-cream text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Buddhas</h3>
              <p className="text-muted-foreground mb-4">
                Serene and peaceful Buddha sculptures that radiate tranquility, 
                each piece carefully crafted to inspire meditation and mindfulness.
              </p>
              <Link to="/services" className="text-divine-copper font-medium hover:underline">
                Learn More &rarr;
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-divine-copper text-divine-copper hover:bg-divine-copper/10">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Works */}
      <section className="bg-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="Featured Works" subtitle="Discover our divine sculptures and architectural creations" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImageWithOverlay src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb" alt="Hindu God sculpture" title="Lord Ganesha" description="Intricately carved statue of Lord Ganesha, the remover of obstacles." linkTo="/works" className="aspect-square" />
            <ImageWithOverlay src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" alt="Stone temple architecture" title="Temple Architecture" description="Traditional stone temple entrance with detailed carvings." linkTo="/works" className="aspect-square" />
            <ImageWithOverlay src="https://images.unsplash.com/photo-1527576539890-dfa815648363" alt="Buddha statue" title="Meditating Buddha" description="Peaceful Buddha sculpture radiating serenity and mindfulness." linkTo="/works" className="aspect-square" />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/works">
              <Button className="bg-divine-copper hover:bg-divine-copper/80">
                View All Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625" overlayOpacity={0.7} minHeight="500px" className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
          <div className="max-w-3xl mx-auto text-center text-divine-cream">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">What Our Clients Say</h2>
            <div className="mb-6">
              <p className="text-xl italic mb-6">
                "The craftsmanship on our Ganesha statue is extraordinary. Every detail has been 
                carved with devotion and precision. It now serves as the centerpiece of our family temple."
              </p>
              <div className="flex items-center justify-center">
                <span className="font-medium">Rajesh Kumar</span>
                <span className="mx-2">•</span>
                <span className="text-divine-cream/80">Chennai, India</span>
              </div>
            </div>
            
            <Link to="/testimonials">
              <Button variant="outline" className="border-divine-cream text-divine-cream mt-4 bg-zinc-950 hover:bg-zinc-800">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </ParallaxSection>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-divine-beige/30 rounded-lg p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">
                  Ready to Commission Your Divine Sculpture?
                </h2>
                <p className="text-muted-foreground">
                  Contact us today to discuss your vision for a custom sculpture or architectural piece. 
                  Our master artisans are ready to bring your spiritual vision to life.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <Button className="bg-divine-copper hover:bg-divine-copper/80">
                    Book an Order
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-divine-copper text-divine-copper hover:bg-divine-copper/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;