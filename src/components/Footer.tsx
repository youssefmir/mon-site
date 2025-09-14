const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MF</span>
                </div>
                <span className="text-xl font-semibold text-secondary-foreground">Miage Forum</span>
              </div>
              <p className="text-secondary-foreground/80 mb-4 max-w-md">
                L'association étudiante de référence pour les futurs professionnels du numérique 
                et de l'informatique de gestion.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-smooth">
                  LinkedIn
                </a>
                <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-smooth">
                  Instagram
                </a>
                <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-smooth">
                  Twitter
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-secondary-foreground mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#events" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                    Événements
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-secondary-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>contact@miageforum.fr</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris-Dauphine</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-secondary-foreground/60">
              © 2024 Miage Forum. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;