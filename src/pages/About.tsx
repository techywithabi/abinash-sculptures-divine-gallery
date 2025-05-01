
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <ParallaxSection 
        backgroundImage="public/lovable-uploads/43539b7e-0525-477c-b6d8-c15967a962f7.png"
        overlayOpacity={0.6}
        minHeight="400px"
        className="mt-16"
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-divine-cream mb-4">
            About Abinash Sculptures
          </h1>
          <p className="text-divine-cream/90 max-w-2xl mx-auto">
            Discover our story, our passion for divine artistry, and our commitment to preserving 
            traditional craftsmanship in Mamallapuram, Tamil Nadu.
          </p>
        </div>
      </ParallaxSection>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Our Story" 
                subtitle="A legacy of divine craftsmanship"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Abinash Sculptures was established with a vision to preserve and promote the rich tradition 
                  of stone carving that has been practiced in Mamallapuram for centuries. Our founder, a master 
                  sculptor trained in traditional techniques, started this studio to create divine art that 
                  connects people with their spiritual heritage.
                </p>
                <p>
                  What began as a small workshop has now grown into a renowned studio specializing in 
                  Hindu deities, Buddha sculptures, and architectural elements for temples. Each piece 
                  we create carries with it not just artistic excellence, but also the spiritual essence 
                  that has been the hallmark of Indian sculptural traditions.
                </p>
                <p>
                  Our artisans work with locally sourced stones, using techniques passed down through 
                  generations, combined with contemporary tools to achieve the perfect balance of 
                  tradition and precision.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                alt="Abinash Sculptures workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="bg-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Mission" 
            subtitle="Preserving divine artistry for generations to come"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair mb-3">Preserving Tradition</h3>
              <p className="text-muted-foreground">
                We are dedicated to preserving the ancient art of stone sculpting, ensuring these 
                sacred techniques continue to thrive in the modern world.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair mb-3">Spiritual Artistry</h3>
              <p className="text-muted-foreground">
                Our sculptures are created not just as art pieces but as vessels of divine energy, 
                crafted with reverence and spiritual intention.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-playfair mb-3">Empowering Artisans</h3>
              <p className="text-muted-foreground">
                We support local artisans by providing training, fair compensation, and opportunities 
                to showcase their exceptional skills to a global audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Process" 
            subtitle="From stone selection to divine completion"
          />
          
          <div className="mt-12 space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="h-24 w-24 bg-divine-copper rounded-full flex items-center justify-center">
                  <span className="text-divine-cream text-3xl font-bold">1</span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold font-playfair mb-3">Stone Selection</h3>
                <p className="text-muted-foreground">
                  We carefully select the finest stones, considering texture, durability, and 
                  spiritual properties. Each stone is chosen specifically for the deity or figure 
                  it will become, honoring traditional associations.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center md:order-last">
                <div className="h-24 w-24 bg-divine-copper rounded-full flex items-center justify-center">
                  <span className="text-divine-cream text-3xl font-bold">2</span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold font-playfair mb-3">Design & Ritual</h3>
                <p className="text-muted-foreground">
                  Before carving begins, we create detailed designs following scriptural guidelines 
                  for proportions and iconography. Traditional rituals are performed to honor the 
                  stone and invite divine energy into the creative process.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="h-24 w-24 bg-divine-copper rounded-full flex items-center justify-center">
                  <span className="text-divine-cream text-3xl font-bold">3</span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold font-playfair mb-3">Masterful Carving</h3>
                <p className="text-muted-foreground">
                  Our master artisans work with precision and devotion, using both traditional and 
                  modern tools. The rough shape is first created, followed by detailed carving and 
                  fine embellishments that bring the sculpture to life.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center md:order-last">
                <div className="h-24 w-24 bg-divine-copper rounded-full flex items-center justify-center">
                  <span className="text-divine-cream text-3xl font-bold">4</span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold font-playfair mb-3">Finishing & Consecration</h3>
                <p className="text-muted-foreground">
                  The completed sculpture undergoes polishing and final touches to enhance its 
                  beauty. For sculptures destined for temples, traditional consecration rituals 
                  may be performed to infuse the deity with life force.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-divine-beige/20 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Ready to Commission Your Divine Sculpture?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let us bring your vision to life with our expertise in traditional sculpture.
            Each piece is crafted with devotion and attention to detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
