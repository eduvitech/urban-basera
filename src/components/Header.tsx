import { Button } from "@/components/ui/button";
import { redirectWhatsApp } from "@/shared/helper";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-7xl mx-auto container-padding">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                        <img
                            src="/logo.png"
                            alt="Urban Basera Logo"
                            className="h-20 w-auto"
                        />
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/about-us"
                            className="text-foreground hover:text-accent transition-colors"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/buy"
                            className="text-foreground hover:text-accent transition-colors"
                        >
                            Buy
                        </Link>
                        <Link
                            to="/sell"
                            className="text-foreground hover:text-accent transition-colors"
                        >
                            Sell
                        </Link>
                        <Link
                            to="/design"
                            className="text-foreground hover:text-accent transition-colors"
                        >
                            Design
                        </Link>

                        {/* ✅ Navigate to /testimonials (SPA) */}
                        {/* <Link
              to="/testimonials"
              className="text-foreground hover:text-accent transition-colors"
            >
              Testimonials
            </Link> */}

                        <Button
                            variant="elegant"
                            size="sm"
                            onClick={() => {
                                redirectWhatsApp();
                            }}
                        >
                            Contact
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
