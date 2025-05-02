
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import ParallaxSection from "../components/ParallaxSection";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { supabase } from "../integrations/supabase/client";

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

// Booking form schema with validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Phone number must be at least 5 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  category: z.string().min(1, "Please select a category"),
  customType: z.string().optional(),
  size: z.string().optional(),
  specificRequirements: z.string().optional(),
  installationNeeds: z.string().optional(),
  additionalInfo: z.string().optional(),
});

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      category: "",
      customType: "",
      size: "",
      specificRequirements: "",
      installationNeeds: "",
      additionalInfo: ""
    },
  });

  const { watch } = form;
  const categoryValue = watch("category");
  
  const updateFormData = (field: string, value: string) => {
    form.setValue(field as any, value);
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
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Send data to Supabase
      const { error } = await supabase
        .from('bookings')
        .insert([{
          name: values.name,
          email: values.email,
          phone: values.phone,
          country: values.country,
          category: values.category,
          custom_type: values.customType,
          size: values.size,
          specific_requirements: values.specificRequirements,
          installation_needs: values.installationNeeds,
          additional_info: values.additionalInfo
        }]);
      
      if (error) throw error;
      
      toast.success("Thank you for your order! We will contact you soon to discuss the details.");
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Step 1: Personal Information */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-playfair mb-6">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input {...field} type="tel" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country/Location *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}
                
                {/* Step 2: Project Requirements */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-playfair mb-6">Project Requirements</h3>
                    
                    <div className="space-y-2">
                      <FormLabel>Sculpture Category *</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map(category => (
                          <div 
                            key={category.id}
                            className={cn(
                              "border rounded-md p-4 cursor-pointer transition-all",
                              categoryValue === category.id
                                ? "border-divine-copper bg-divine-copper/5"
                                : "border-border hover:border-divine-copper/50"
                            )}
                            onClick={() => updateFormData("category", category.id)}
                          >
                            <div className="flex items-center justify-between">
                              <span>{category.name}</span>
                              {categoryValue === category.id && (
                                <div className="h-4 w-4 rounded-full bg-divine-copper" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      {form.formState.errors.category && (
                        <p className="text-sm font-medium text-destructive mt-2">{form.formState.errors.category.message}</p>
                      )}
                    </div>
                    
                    {categoryValue === "other" && (
                      <FormField
                        control={form.control}
                        name="customType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Please Specify *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormField
                      control={form.control}
                      name="size"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Approximate Size/Dimensions</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g., 2 feet tall, 3x4 feet, etc." />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {/* Step 3: Additional Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-playfair mb-6">Additional Details</h3>
                    
                    <FormField
                      control={form.control}
                      name="specificRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Specific Requirements/Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={5}
                              placeholder="Please describe your vision for the sculpture in detail, including any specific iconography, postures, expressions, etc."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="installationNeeds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Installation Requirements (if any)</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="e.g., Indoor/Outdoor, Temple installation, etc."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={3}
                              placeholder="Any other details that might help us understand your requirements better"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                            <p>{form.getValues("name")}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p>{form.getValues("email")}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p>{form.getValues("phone")}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Country/Location</p>
                            <p>{form.getValues("country")}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-accent/20 p-6 rounded-lg">
                        <h4 className="font-medium text-lg mb-3">Project Requirements</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Category</p>
                            <p>
                              {form.getValues("category") === "hindu-gods" && "Hindu Gods"}
                              {form.getValues("category") === "stone-temples" && "Stone Temples"}
                              {form.getValues("category") === "buddhas" && "Buddhas"}
                              {form.getValues("category") === "other" && form.getValues("customType")}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Size/Dimensions</p>
                            <p>{form.getValues("size") || "Not specified"}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-accent/20 p-6 rounded-lg">
                        <h4 className="font-medium text-lg mb-3">Additional Details</h4>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Specific Requirements</p>
                            <p>{form.getValues("specificRequirements") || "None provided"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Installation Requirements</p>
                            <p>{form.getValues("installationNeeds") || "None specified"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Additional Information</p>
                            <p>{form.getValues("additionalInfo") || "None provided"}</p>
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
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Order"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Booking;
