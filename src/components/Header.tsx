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
            <a href="#interiors" className="text-foreground hover:text-accent transition-colors">Interiors</a>
            <a href="#work" className="text-foreground hover:text-accent transition-colors">Our Work</a>
            <a href="#properties" className="text-foreground hover:text-accent transition-colors">Properties</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <Button variant="elegant" size="sm">
              Book Consultation
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;