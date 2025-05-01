
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

// Form steps
const steps = [
  {
    id: "personal",
    name: "Personal Information"
  },
  {
    id: "requirements",
    name: "Project Requirements"
  },
  {
    id: "details",
    name: "Additional Details"
  },
  {
    id: "review",
    name: "Review & Submit"
  }
];

// Sculpture categories
const categories = [
  { id: "hindu-gods", name: "Hindu Gods" },
  { id: "stone-temples", name: "Stone Temples" },
  { id: "buddhas", name: "Buddhas" },
  { id: "other", name: "Other" }
];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    country: "",
    
    // Project Requirements
    category: "",
    customType: "",
    size: "",
    budget: "",
    timeline: "",
    
    // Additional Details
    specificRequirements: "",
    referenceImages: [],
    installationNeeds: "",
    additionalInfo: ""
  });
  
  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, like sending an email or saving to a database
    alert("Thank you for your order! We will contact you soon to discuss the details.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <ParallaxSection 
        backgroundImage="public/lovable-uploads/7060ef89-5cc5-4a1a-a301-1683d3446f7a.png"
        overlayOpacity={0.7}
        minHeight="400px"
        className="mt-16"
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-divine-cream mb-4">
            Book Your Divine Sculpture
          </h1>
          <p className="text-divine-cream/90 max-w-2xl mx-auto">
            Fill out the form below to start your journey of commissioning a custom 
            sculpture crafted with traditional expertise and spiritual devotion.
          </p>
        </div>
      </ParallaxSection>
      
      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Your Custom Order" 
            subtitle="Tell us about your vision, and we'll bring it to life"
          />
          
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center relative flex-1"
                >
                  <div 
                    className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center text-divine-cream z-10",
                      currentStep >= index ? "bg-divine-copper" : "bg-muted"
                    )}
                  >
                    {index + 1}
                  </div>
                  <span className={cn(
                    "mt-2 text-sm hidden md:block",
                    currentStep >= index ? "text-divine-copper" : "text-muted-foreground"
                  )}>
                    {step.name}
                  </span>
                  
                  {/* Line connecting steps */}
                  {index < steps.length - 1 && (
                    <div className={cn(
                      "absolute top-5 w-full h-[2px] -right-1/2",
                      currentStep > index ? "bg-divine-copper" : "bg-muted"
                    )} />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Form Content */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-playfair mb-6">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
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
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="country" className="block text-sm font-medium">
                        Country/Location *
                      </label>
                      <input
                        type="text"
                        id="country"
                        value={formData.country}
                        onChange={(e) => updateFormData("country", e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 2: Project Requirements */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-playfair mb-6">Project Requirements</h3>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium mb-2">
                      Sculpture Category *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {categories.map(category => (
                        <div 
                          key={category.id}
                          className={cn(
                            "border rounded-md p-4 cursor-pointer transition-all",
                            formData.category === category.id
                              ? "border-divine-copper bg-divine-copper/5"
                              : "border-border hover:border-divine-copper/50"
                          )}
                          onClick={() => updateFormData("category", category.id)}
                        >
                          <div className="flex items-center justify-between">
                            <span>{category.name}</span>
                            {formData.category === category.id && (
                              <div className="h-4 w-4 rounded-full bg-divine-copper" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {formData.category === "other" && (
                    <div className="space-y-2">
                      <label htmlFor="customType" className="block text-sm font-medium">
                        Please Specify *
                      </label>
                      <input
                        type="text"
                        id="customType"
                        value={formData.customType}
                        onChange={(e) => updateFormData("customType", e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label htmlFor="size" className="block text-sm font-medium">
                      Approximate Size/Dimensions
                    </label>
                    <input
                      type="text"
                      id="size"
                      value={formData.size}
                      onChange={(e) => updateFormData("size", e.target.value)}
                      placeholder="e.g., 2 feet tall, 3x4 feet, etc."
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-sm font-medium">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => updateFormData("budget", e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="">Select a budget range</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-3000">$1,000 - $3,000</option>
                        <option value="3000-5000">$3,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="block text-sm font-medium">
                        Preferred Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => updateFormData("timeline", e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="">Select a timeline</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Additional Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-playfair mb-6">Additional Details</h3>
                  
                  <div className="space-y-2">
                    <label htmlFor="specificRequirements" className="block text-sm font-medium">
                      Specific Requirements/Description
                    </label>
                    <textarea
                      id="specificRequirements"
                      rows={5}
                      value={formData.specificRequirements}
                      onChange={(e) => updateFormData("specificRequirements", e.target.value)}
                      placeholder="Please describe your vision for the sculpture in detail, including any specific iconography, postures, expressions, etc."
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="installationNeeds" className="block text-sm font-medium">
                      Installation Requirements (if any)
                    </label>
                    <input
                      type="text"
                      id="installationNeeds"
                      value={formData.installationNeeds}
                      onChange={(e) => updateFormData("installationNeeds", e.target.value)}
                      placeholder="e.g., Indoor/Outdoor, Temple installation, etc."
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="additionalInfo" className="block text-sm font-medium">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                      placeholder="Any other details that might help us understand your requirements better"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    ></textarea>
                  </div>
                </div>
              )}
              
              {/* Step 4: Review & Submit */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-playfair mb-6">Review Your Order</h3>
                  
                  <div className="space-y-8">
                    <div className="bg-accent/20 p-6 rounded-lg">
                      <h4 className="font-medium text-lg mb-3">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Name</p>
                          <p>{formData.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p>{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p>{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Country/Location</p>
                          <p>{formData.country}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-accent/20 p-6 rounded-lg">
                      <h4 className="font-medium text-lg mb-3">Project Requirements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Category</p>
                          <p>
                            {formData.category === "hindu-gods" && "Hindu Gods"}
                            {formData.category === "stone-temples" && "Stone Temples"}
                            {formData.category === "buddhas" && "Buddhas"}
                            {formData.category === "other" && formData.customType}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Size/Dimensions</p>
                          <p>{formData.size || "Not specified"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Budget Range</p>
                          <p>
                            {formData.budget === "under-1000" && "Under $1,000"}
                            {formData.budget === "1000-3000" && "$1,000 - $3,000"}
                            {formData.budget === "3000-5000" && "$3,000 - $5,000"}
                            {formData.budget === "5000-10000" && "$5,000 - $10,000"}
                            {formData.budget === "10000-plus" && "$10,000+"}
                            {!formData.budget && "Not specified"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Timeline</p>
                          <p>
                            {formData.timeline === "1-3-months" && "1-3 months"}
                            {formData.timeline === "3-6-months" && "3-6 months"}
                            {formData.timeline === "6-12-months" && "6-12 months"}
                            {formData.timeline === "flexible" && "Flexible"}
                            {!formData.timeline && "Not specified"}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-accent/20 p-6 rounded-lg">
                      <h4 className="font-medium text-lg mb-3">Additional Details</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Specific Requirements</p>
                          <p>{formData.specificRequirements || "None provided"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Installation Requirements</p>
                          <p>{formData.installationNeeds || "None specified"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Additional Information</p>
                          <p>{formData.additionalInfo || "None provided"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-muted-foreground mb-4">
                      By submitting this form, you agree to be contacted by our team regarding your 
                      custom sculpture order. We will provide a detailed quote and timeline after reviewing 
                      your requirements.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={currentStep === 0 ? "opacity-0" : "border-divine-copper text-divine-copper hover:bg-divine-copper/10"}
                >
                  Previous
                </Button>
                
                {currentStep < steps.length - 1 ? (
                  <Button 
                    type="button"
                    onClick={handleNext}
                    className="bg-divine-copper hover:bg-divine-copper/80"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="bg-divine-copper hover:bg-divine-copper/80"
                  >
                    Submit Order
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Booking;
