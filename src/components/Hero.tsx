import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import studentPortrait from "@/assets/student-portrait.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-36 pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(49,35,54,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(112,80,124,0.16),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-hero" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-soft">
              <span className="h-2 w-2 rounded-full bg-primary" />
              ASSOCIATION ÉTUDIANTE
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
              L'excellence en informatique de gestion commence ici
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              Miage Forum accompagne les étudiants vers l'excellence professionnelle en créant des ponts durables entre formation académique et réussite en entreprise.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button size="lg" className="px-9" onClick={() => navigate('/services')}>
                Découvrir nos services
              </Button>
              <Button variant="outline" size="lg" className="px-9" onClick={() => navigate('/evenements')}>
                En savoir plus
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                500+ étudiants accompagnés
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary/70" />
                50+ entreprises partenaires
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[2.4rem] border border-primary/10 bg-gradient-card blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/90 p-2 shadow-elevated backdrop-blur-sm">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={studentPortrait}
                  alt="Étudiant professionnel représentant l'excellence Miage Forum"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/40 bg-white/80 px-4 py-3 text-sm font-medium text-foreground/80 shadow-soft backdrop-blur">
                Faire rayonner les talents MIAGE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
