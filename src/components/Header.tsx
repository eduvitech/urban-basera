import { Button } from "@/components/ui/button";
import { redirectWhatsApp } from "@/shared/helper";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Urban Basera Logo" className="h-20 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#interiors"
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("interiors")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Interiors
            </a>

            <a
              href="#process"
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Process
            </a>

            <a
              href="#properties"
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Properties
            </a>

            <a
              href="#about"
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>

            {/* ✅ Navigate to /testimonials (SPA) */}
            <Link
              to="/testimonials"
              className="text-foreground hover:text-accent transition-colors"
            >
              Testimonials
            </Link>

            <Button
              variant="elegant"
              size="sm"
              onClick={() => {
                redirectWhatsApp();
              }}
            >
              Book Consultation
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
