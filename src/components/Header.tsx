import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-foreground tracking-tight">MIAGE Forum</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-12">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">À propos</a>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#evenements" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Événements</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Se connecter
            </Button>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6">
              Rejoindre
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;