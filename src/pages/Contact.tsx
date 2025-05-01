
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <ParallaxSection 
        backgroundImage="public/lovable-uploads/a40e6766-b363-4d69-901c-f152d75e8a65.png"
        overlayOpacity={0.6}
        minHeight="400px"
        className="mt-16"
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-divine-cream mb-4">
            Contact Us
          </h1>
          <p className="text-divine-cream/90 max-w-2xl mx-auto">
            Connect with our team to discuss your divine sculpture requirements, 
            inquire about our services, or schedule a visit to our studio.
          </p>
        </div>
      </ParallaxSection>
      
      {/* Contact Info and Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <SectionHeader 
                title="Get in Touch" 
                subtitle="We're here to answer your inquiries"
                centered={false}
              />
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-card rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-divine-copper/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-divine-copper">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">Feel free to call us for inquiries or to schedule a visit</p>
                    <a href="tel:+919444425392" className="text-divine-copper font-medium hover:underline">
                      +91 9444425392
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-card rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-divine-copper/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-divine-copper">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">Send us an email and we'll get back to you promptly</p>
                    <a href="mailto:abinashsculptures@gmail.com" className="text-divine-copper font-medium hover:underline">
                      abinashsculptures@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-card rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-divine-copper/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-divine-copper">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Our studio is located in the historic sculpture town</p>
                    <p className="text-divine-copper font-medium">
                      Mamallapuram, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-medium mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold font-playfair mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-divine-copper hover:bg-divine-copper/80">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Find Us" 
            subtitle="Visit our studio in the historic town of Mamallapuram"
          />
          
          <div className="mt-8 h-96 bg-muted rounded-lg overflow-hidden">
            {/* This would be where you embed a Google Map - for now, we'll use a placeholder */}
            <div className="h-full w-full bg-accent flex items-center justify-center">
              <p className="text-muted-foreground">
                Map of Mamallapuram, Tamil Nadu, India - An interactive map would be embedded here in production.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
