import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-2">Urban Basera</h3>
            <p className="text-sm mb-4 opacity-80">Buy · Sell · Design</p>
            <p className="text-sm opacity-70 leading-relaxed max-w-md">
              At Urban Basera, a home is more than four walls. We help you buy, sell, 
              and design spaces that reflect who you are—blending comfort, beauty, 
              and cherished memories into every property.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about-us" className="block opacity-70 hover:opacity-100 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/buy" className="block opacity-70 hover:opacity-100 hover:text-accent transition-colors">
                Buy Properties
              </Link>
              <Link to="/sell" className="block opacity-70 hover:opacity-100 hover:text-accent transition-colors">
                Sell Properties
              </Link>
              <Link to="/design" className="block opacity-70 hover:opacity-100 hover:text-accent transition-colors">
                Design Services
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="opacity-80">+91 72045 98621</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="opacity-80">urbanbasera01@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <span className="opacity-80 leading-relaxed">
                  NH 207, Taluk, Kasaba Hobli, Devanahally, Bengaluru, Karnataka 562110
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Urban Basera. All rights reserved.
          </p>
          
          {/* <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Facebook className="h-5 w-5 text-accent-foreground" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Instagram className="h-5 w-5 text-accent-foreground" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Twitter className="h-5 w-5 text-accent-foreground" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
