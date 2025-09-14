import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MF</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Miage Forum</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">À propos</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">Services</a>
            <a href="#events" className="text-muted-foreground hover:text-foreground transition-smooth">Événements</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
          </nav>

          <Button variant="default" className="bg-primary hover:bg-primary-glow transition-smooth">
            Rejoindre
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;