import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-2">Urban Basera</h3>
            <p className="text-sm mb-4 opacity-80">Buy · Sell · Design</p>
            <p className="text-sm opacity-70 leading-relaxed max-w-md">
              Creating exceptional interior spaces and connecting people with their perfect properties. 
              From concept to creation - we bring your vision to life.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#interiors" className="block opacity-70 hover:opacity-100 hover:text-golden-sand transition-colors">Interiors</a>
              <a href="#work" className="block opacity-70 hover:opacity-100 hover:text-golden-sand transition-colors">Our Work</a>
              <a href="#properties" className="block opacity-70 hover:opacity-100 hover:text-golden-sand transition-colors">Buy & Sell</a>
              <a href="#about" className="block opacity-70 hover:opacity-100 hover:text-golden-sand transition-colors">About Us</a>
              <a href="#contact" className="block opacity-70 hover:opacity-100 hover:text-golden-sand transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-golden-sand" />
                <span className="opacity-70">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-golden-sand" />
                <span className="opacity-70">hello@urbanbasera.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-golden-sand" />
                <span className="opacity-70">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70 mb-4 md:mb-0">
            © 2024 Urban Basera. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-golden-sand transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-golden-sand transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-golden-sand transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;