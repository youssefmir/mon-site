import { useNavigate } from "react-router-dom";

import MiageForumLogo from "@/assets/Miage Forum.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: sectionId } });
      } else {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      return;
    }

    navigate(path);
  };

  return (
    <footer className="relative mt-24 bg-[#050b1a] py-16 text-slate-200">
      <div className="absolute inset-x-0 -top-10 flex justify-center">
        <div className="h-16 w-52 rounded-full bg-[linear-gradient(135deg,#5e426d,#312336)] opacity-40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <img src={MiageForumLogo} alt="MIAGE Forum" className="h-9 w-auto" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Miage Forum</span>
            </div>
            <p className="mt-6 max-w-md text-sm text-slate-400">
              L'association étudiante de référence pour les futurs professionnels du numérique et de l'informatique de gestion.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a
                href="https://www.linkedin.com/company/miage-forum"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/miageforum"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/miageforum"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors hover:text-white"
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">Liens rapides</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>
                <button type="button" onClick={() => handleNavigate("/#about")} className="transition-colors hover:text-white">
                  À propos
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavigate("/services")} className="transition-colors hover:text-white">
                  Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavigate("/evenements")} className="transition-colors hover:text-white">
                  Événements
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavigate("/contact")} className="transition-colors hover:text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">Contact</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>
                <a href="mailto:contact@miageforum.fr" className="transition-colors hover:text-white">
                  contact@miageforum.fr
                </a>
              </li>
              <li>
                <a href="tel:+33123456789" className="transition-colors hover:text-white">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/4Y8dXb9EJ1yXmaXW7"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Paris-Dauphine
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          © 2024 Miage Forum. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
