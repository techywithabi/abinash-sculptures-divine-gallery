
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

// FAQ data
const faqCategories = [
  {
    id: "products",
    name: "Products & Services",
    questions: [
      {
        id: 1,
        question: "What types of sculptures do you create?",
        answer: "We specialize in creating Hindu deities, Buddha sculptures, and stone temple architectural elements. Our artisans are skilled in traditional carving techniques that bring divine energy to each piece."
      },
      {
        id: 2,
        question: "What materials do you use for your sculptures?",
        answer: "We primarily work with various types of stone including granite, marble, sandstone, and soapstone. Each material is carefully selected based on the specific requirements of the sculpture and traditional guidelines."
      },
      {
        id: 3,
        question: "Can you create custom sculptures based on my requirements?",
        answer: "Yes, we specialize in creating custom sculptures tailored to your specific requirements. Whether you have a particular deity, pose, size, or design in mind, our master artisans can bring your vision to life."
      }
    ]
  },
  {
    id: "ordering",
    name: "Ordering & Customization",
    questions: [
      {
        id: 4,
        question: "How do I place an order for a custom sculpture?",
        answer: "You can place an order by contacting us through our website, email, or phone. We'll schedule a consultation to discuss your requirements, provide a quote, and create a design for your approval before beginning work."
      },
      {
        id: 5,
        question: "How long does it take to complete a sculpture?",
        answer: "The timeline varies depending on the complexity, size, and detail of the sculpture. Small pieces may take 1-2 months, while larger or more intricate works can take 3-6 months or longer. We'll provide a specific timeline during the consultation."
      },
      {
        id: 6,
        question: "Do you ship internationally?",
        answer: "Yes, we ship our sculptures worldwide. We use specialized packaging to ensure your sculpture arrives safely. International shipping costs and delivery times vary based on destination and the size/weight of the piece."
      }
    ]
  },
  {
    id: "maintenance",
    name: "Care & Maintenance",
    questions: [
      {
        id: 7,
        question: "How should I care for my stone sculpture?",
        answer: "Stone sculptures require minimal maintenance. For indoor sculptures, regular dusting with a soft cloth is usually sufficient. For outdoor pieces, we provide specific care instructions based on the type of stone used and your climate conditions."
      },
      {
        id: 8,
        question: "Can your sculptures be placed outdoors?",
        answer: "Yes, many of our sculptures can be placed outdoors. We select appropriate stone types and apply treatments to enhance durability for outdoor conditions. We'll discuss the best options for outdoor placement during the consultation."
      },
      {
        id: 9,
        question: "Do you offer installation services?",
        answer: "Yes, for local clients or larger commissions, we offer installation services to ensure your sculpture is properly and safely placed. For international clients, we provide detailed installation guidelines and can recommend specialists in your area."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  
  const toggleQuestion = (questionId: number) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId) 
        : [...prev, questionId]
    );
  };

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
            Frequently Asked Questions
          </h1>
          <p className="text-divine-cream/90 max-w-2xl mx-auto">
            Find answers to common questions about our sculptures, ordering process,
            customization options, and more.
          </p>
        </div>
      </ParallaxSection>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="How Can We Help You?" 
            subtitle="Browse our frequently asked questions to find quick answers"
          />
          
          <div className="mt-12 flex flex-col lg:flex-row gap-8">
            {/* Category Navigation */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-md transition-colors",
                      activeCategory === category.id
                        ? "bg-divine-copper text-divine-cream"
                        : "bg-card hover:bg-divine-copper/10"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQ Accordion */}
            <div className="lg:w-3/4">
              <div className="space-y-6">
                {faqCategories
                  .find(cat => cat.id === activeCategory)?.questions
                  .map(faq => (
                    <div 
                      key={faq.id}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-accent/30 transition-colors"
                        onClick={() => toggleQuestion(faq.id)}
                      >
                        <h3 className="text-lg font-medium">{faq.question}</h3>
                        <span className="transform transition-transform">
                          {openQuestions.includes(faq.id) ? (
                            <MinusIcon />
                          ) : (
                            <PlusIcon />
                          )}
                        </span>
                      </button>
                      
                      {openQuestions.includes(faq.id) && (
                        <div className="p-6 pt-0 border-t border-border">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="bg-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            If you couldn't find the answer to your question, please feel free to contact us.
            We're here to help you with any inquiries about our sculptures and services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-divine-copper hover:bg-divine-copper/80">
                Contact Us
              </Button>
            </Link>
            <a href="tel:+919444425392">
              <Button variant="outline" className="border-divine-copper text-divine-copper hover:bg-divine-copper/10">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Icon Components
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default FAQ;
