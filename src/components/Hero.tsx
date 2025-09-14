import { Button } from "@/components/ui/button";
import studentPortrait from "@/assets/student-portrait.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                ASSOCIATION ÉTUDIANTE
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                L'excellence en informatique de gestion commence ici
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Miage Forum accompagne les étudiants vers l'excellence professionnelle 
              en créant des ponts durables entre formation académique et réussite en entreprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 font-semibold"
              >
                Découvrir nos services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 font-semibold"
              >
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-large">
              <img 
                src={studentPortrait}
                alt="Étudiant professionnel représentant l'excellence Miage Forum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;