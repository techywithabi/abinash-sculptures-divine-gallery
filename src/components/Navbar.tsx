
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { cn } from "../lib/utils";
import { X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Works", path: "/works" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
  { name: "Book Order", path: "/booking" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Control body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        scrolled 
          ? "py-2 bg-background/90 backdrop-blur-md shadow-md" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-playfair font-bold text-2xl text-divine-copper">
            Abinash <span className="text-divine-brown">Sculptures</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-divine-copper"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={cn(
                  "w-full h-0.5 bg-foreground transition-all duration-300",
                  isOpen && "translate-y-2 rotate-45"
                )}
              />
              <span 
                className={cn(
                  "w-full h-0.5 bg-foreground transition-all duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span 
                className={cn(
                  "w-full h-0.5 bg-foreground transition-all duration-300",
                  isOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-foreground hover:text-divine-copper transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-background transform transition-all duration-300 ease-in-out md:hidden",
          isOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center gap-6 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-md focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} className="text-foreground" />
          </button>
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-playfair text-foreground hover:text-divine-copper transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
