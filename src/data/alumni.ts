import type { LucideIcon } from "lucide-react";

export type AlumniIconKey = "Compass" | "BriefcaseBusiness" | "Globe2" | "Users";

export interface AlumniCTA {
  label: string;
  href: string;
  style: "primary" | "secondary";
}

export interface AlumniPillar {
  id: string;
  icon: AlumniIconKey;
  title: string;
  description: string;
  badge?: string;
}

export interface AlumniStat {
  id: string;
  value: string;
  label: string;
}

export interface AlumniEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  registrationUrl: string;
}

export interface AlumniAdhesion {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  contactEmail: string;
}

export interface AlumniFooterLink {
  id: string;
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface AlumniFooter {
  contacts: { label: string; email: string }[];
  socials: AlumniFooterLink[];
  disclaimer: string;
}

export interface AlumniContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctas: AlumniCTA[];
  };
  pillars: AlumniPillar[];
  stats: AlumniStat[];
  agendaHeading: string;
  events: AlumniEvent[];
  adhesion: AlumniAdhesion;
  footer: AlumniFooter;
}

export const alumniContent: AlumniContent = {
  meta: {
    title: "MIAGE Forum Alumni — Carrières, réseau et international",
    description:
      "Découvrez le programme MIAGE Forum Alumni : mentoring, employabilité, mobilité internationale et un réseau actif pour accélérer votre carrière.",
  },
  hero: {
    eyebrow: "MIAGE Forum Alumni",
    title: "MIAGE Forum Alumni — Carrières. Réseau. International.",
    subtitle: "Un service de l’association des étudiants & alumni MIAGE d’Orsay pour accélérer ta trajectoire.",
    ctas: [
      {
        label: "Rejoindre l’association",
        href: "#adhesion",
        style: "primary",
      },
      {
        label: "Voir l’agenda",
        href: "#agenda",
        style: "secondary",
      },
    ],
  },
  pillars: [
    {
      id: "career-project",
      icon: "Compass",
      title: "Mieux définir ton projet pro",
      description: "Ateliers CV/LinkedIn sur mesure, simulations d’entretien et mentoring individuel avec nos alumni experts.",
    },
    {
      id: "employability",
      icon: "BriefcaseBusiness",
      title: "Renforcer ton employabilité",
      description:
        "Diffusion d’offres de jobs & stages, workshops techniques (SQL, Python, Power BI) et préparation intensive aux entretiens.",
    },
    {
      id: "international",
      icon: "Globe2",
      title: "International & mobilité",
      description:
        "Témoignages d’alumni à l’étranger, ressources pratiques (visa, logement) et mise en relation avec des contacts clés.",
      badge: "#GoingGlobal",
    },
    {
      id: "network",
      icon: "Users",
      title: "Réseau & communauté",
      description:
        "Newsletter dédiée, groupe LinkedIn, afterworks et conférences thématiques pour fédérer la communauté MIAGE.",
    },
  ],
  stats: [
    {
      id: "alumni",
      value: "+200",
      label: "alumni MIAGE Orsay engagés",
    },
    {
      id: "partners",
      value: "50+",
      label: "entreprises partenaires",
    },
    {
      id: "offers",
      value: "100+",
      label: "offres/an (stages, alternances, CDI)",
    },
    {
      id: "events",
      value: "Événements",
      label: "mensuels (on-campus & online)",
    },
  ],
  agendaHeading: "Agenda des rencontres",
  events: [
    {
      id: "event-1",
      title: "Atelier CV & LinkedIn avec des alumni RH",
      date: "Jeudi 14 mars 2024 — 18h30",
      location: "Campus Orsay, Salle B101",
      registrationUrl: "https://example.com/inscription-cv-linkedin",
    },
    {
      id: "event-2",
      title: "Talk international : réussir son VIE en Europe",
      date: "Mardi 26 mars 2024 — 19h00",
      location: "Zoom",
      registrationUrl: "https://example.com/inscription-talk-international",
    },
    {
      id: "event-3",
      title: "Afterwork alumni x partenaires data & IA",
      date: "Jeudi 4 avril 2024 — 19h30",
      location: "Station F, Paris",
      registrationUrl: "https://example.com/inscription-afterwork",
    },
  ],
  adhesion: {
    heading: "Prêt·e à rejoindre MIAGE Forum Alumni ?",
    description:
      "L’adhésion te donne accès à tous nos services exclusifs : offres, mentoring, événements, ressources premium et une communauté bienveillante prête à t’épauler.",
    buttonLabel: "Adhérer – 10€/an",
    buttonUrl: "https://example.com/adhesion",
    contactEmail: "careers@miage-forum.fr",
  },
  footer: {
    contacts: [
      { label: "Contact carrières", email: "careers@miage-forum.fr" },
      { label: "Contact communication", email: "communication@miage-forum.fr" },
    ],
    socials: [
      {
        id: "linkedin",
        label: "LinkedIn — MIAGE Forum Orsay",
        href: "https://www.linkedin.com/company/miage-forum-orsay",
        ariaLabel: "Rejoindre le LinkedIn MIAGE Forum Orsay",
      },
      {
        id: "instagram",
        label: "Instagram — @miage_forum",
        href: "https://www.instagram.com/miage_forum",
        ariaLabel: "Suivre MIAGE Forum sur Instagram",
      },
    ],
    disclaimer: "MIAGE Forum Alumni est un programme porté par l’association des étudiants et diplômés MIAGE d’Orsay.",
  },
};

export type AlumniIconMap = Record<AlumniIconKey, LucideIcon>;
