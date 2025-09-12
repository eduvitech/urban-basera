import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold">Urban Basera</h1>
            <span className="text-sm text-muted-foreground">Buy · Sell · Design</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#interiors" 
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('interiors')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Interiors
            </a>
            <a 
              href="#process" 
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Process
            </a>
            <a 
              href="#properties" 
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Properties
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <Button 
              variant="elegant" 
              size="sm"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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