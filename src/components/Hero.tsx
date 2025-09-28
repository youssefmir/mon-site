import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#312336]";

const stats = [
  { value: "500+", label: "étudiants accompagnés" },
  { value: "50+", label: "entreprises partenaires" },
  { value: "15", label: "événements premium / an" },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f9f8fb]">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Fond abstrait Miage Forum"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/65 to-white/80 backdrop-blur-[6px]" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 py-32 text-center">

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#1f1a2a] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
          Accélère ta carrière numérique avec une communauté d’excellence
        </h1>

        <p className="max-w-2xl text-lg text-[#4f4a59] sm:text-xl">
          Mentorat, opportunités, événements premium : nous connectons étudiants et alumni MIAGE pour créer des trajectoires ambitieuses et durables.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className={`${focusRing} rounded-full border-0 bg-[#312336] px-10 py-3 text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(49,35,54,0.6)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#463454]`}
            onClick={() => navigate('/services')}
          >
            Découvrir nos services
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={`${focusRing} rounded-full border-[#312336]/20 bg-white/70 px-10 py-3 text-base font-semibold text-[#312336] shadow-[0_10px_25px_-20px_rgba(49,35,54,0.6)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/90`}
            onClick={() => navigate('/evenements')}
          >
            Voir les événements
          </Button>
        </div>

        <div className="mt-6 grid w-full gap-6 text-sm text-[#4f4a59] sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/60 bg-white/80 px-6 py-5 shadow-[0_24px_45px_-30px_rgba(0,0,0,0.45)] backdrop-blur transition duration-200 hover:-translate-y-1"
            >
              <p className="text-2xl font-semibold text-[#312336]">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#6f697a]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
