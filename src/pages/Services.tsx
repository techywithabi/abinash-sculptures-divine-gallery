
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <ParallaxSection 
        backgroundImage="public/lovable-uploads/c5824a61-ae59-4bc9-8a13-4f04607e14b8.png"
        overlayOpacity={0.6}
        minHeight="400px"
        className="mt-16"
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-divine-cream mb-4">
            Our Divine Services
          </h1>
          <p className="text-divine-cream/90 max-w-2xl mx-auto">
            Discover the sacred art of stone carving through our specialized services, 
            each created with devotion and expertise.
          </p>
        </div>
      </ParallaxSection>
      
      {/* Hindu Gods Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Hindu Gods" 
                subtitle="Divine deities carved with devotion"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our Hindu deity sculptures are created following traditional iconographic principles 
                  and proportions prescribed in ancient texts. Each deity is imbued with their unique 
                  attributes and expressions, capturing their divine essence.
                </p>
                <p>
                  From the elephant-headed Ganesha, the remover of obstacles, to the goddess Lakshmi 
                  bestowing prosperity, our collection includes a wide range of deities to suit different 
                  spiritual practices and preferences.
                </p>
                <p>
                  These sculptures are ideal for temples, home shrines, or as art pieces that radiate
                  spiritual energy in any space. Each sculpture can be customized in size, posture, and 
                  detail according to your requirements.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/booking">
                  <Button className="bg-divine-copper hover:bg-divine-copper/80">
                    Commission a Deity
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="public/lovable-uploads/c5824a61-ae59-4bc9-8a13-4f04607e14b8.png" 
                alt="Hindu deity sculpture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stone Temples Section */}
      <section className="bg-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <img 
                src="public/lovable-uploads/1c081dc7-6577-4550-a007-f84afb9d9962.png" 
                alt="Stone temple architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader 
                title="Stone Temples" 
                subtitle="Sacred architectural elements for divine spaces"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our temple architectural elements bring the grandeur and spiritual significance of 
                  traditional temple design to modern spaces. From ornate pillars to intricately 
                  carved doorways, each piece follows sacred geometric principles.
                </p>
                <p>
                  We create temple components of all sizes, from small shrines for homes to complete 
                  stone temples. Our works feature traditional motifs including lotus flowers, celestial 
                  beings, and geometric patterns that hold cosmic significance.
                </p>
                <p>
                  Our team can work closely with architects and spiritual advisors to ensure that 
                  all elements are not only beautiful but also adhere to traditional guidelines 
                  for sacred architecture.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/booking">
                  <Button className="bg-divine-copper hover:bg-divine-copper/80">
                    Inquire About Temple Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Buddha Sculptures */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Buddha Sculptures" 
                subtitle="Serenity carved in stone"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our Buddha sculptures embody tranquility and inner peace, each created to inspire 
                  meditation and mindfulness. We offer various mudras (hand positions) and postures, 
                  each carrying their own spiritual significance.
                </p>
                <p>
                  From the meditation pose (Dhyana mudra) to the earth-touching pose (Bhumisparsha mudra), 
                  our sculptures capture the essence of the Buddha's teachings through their serene 
                  expressions and perfect proportions.
                </p>
                <p>
                  These sculptures are suitable for meditation spaces, gardens, or as focal points in 
                  any environment where a sense of peace and mindfulness is desired.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/booking">
                  <Button className="bg-divine-copper hover:bg-divine-copper/80">
                    Order a Buddha Sculpture
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="public/lovable-uploads/56b5158f-7ff1-4361-930f-7b417cf8b303.png" 
                alt="Buddha sculpture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Orders */}
      <section className="bg-divine-beige/20 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader 
            title="Custom Commissions" 
            subtitle="Bringing your vision to divine reality"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Beyond our standard offerings, we specialize in creating custom sculptures and architectural 
            elements based on your specific requirements. Whether you have a particular deity, a 
            special pose, or a unique design in mind, our artisans can bring your vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold font-playfair mb-3">Consultation</h3>
              <p className="text-muted-foreground">
                We begin with a detailed consultation to understand your vision, requirements, 
                and the space where the sculpture will be placed.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold font-playfair mb-3">Design Approval</h3>
              <p className="text-muted-foreground">
                Our designers create sketches and detailed plans for your approval before 
                the carving process begins.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold font-playfair mb-3">Creation & Delivery</h3>
              <p className="text-muted-foreground">
                Once approved, our master artisans bring your vision to life with meticulous 
                carving, followed by careful packaging and delivery.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/booking">
              <Button className="bg-divine-copper hover:bg-divine-copper/80">
                Start Your Custom Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
