
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-accent/30 border-t border-accent">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Abinash Sculptures</h3>
            <p className="text-muted-foreground">
              Make Your Divine Presence With Abinash Sculptures
            </p>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <div className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>Mamallapuram, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Phone:</span>
                <a href="tel:+919444425392" className="hover:text-divine-copper transition-colors">
                  +91 9444425392
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:abinashsculptures@gmail.com" className="hover:text-divine-copper transition-colors">
                  abinashsculptures@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  Hindu Gods
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  Stone Temples
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  Buddhas
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/works" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  Works
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-divine-copper transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abinash Sculptures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
