export type Service = {
  slug: string;
  title: string;
  baseline: string;
  description: string;
  deliverables: string[];
  icon: "strategy" | "design" | "content" | "media" | "web" | "growth";
};

export const services: Service[] = [
  {
    slug: "strategie-de-marque",
    title: "Stratégie de marque",
    baseline: "Point 1 — Comprendre et positionner",
    description:
      "Nous posons les fondations : audience, concurrence, promesse et territoire de marque. Un cap clair avant toute production.",
    deliverables: [
      "Ateliers de cadrage",
      "Positionnement & promesse",
      "Plateforme de marque",
      "Plan d'action 12 mois",
    ],
    icon: "strategy",
  },
  {
    slug: "identite-visuelle",
    title: "Identité visuelle",
    baseline: "Point 2 — Créer et donner forme",
    description:
      "Logotype, palette, typographie, système graphique : une identité cohérente, déclinée sur tous vos supports.",
    deliverables: [
      "Logo & déclinaisons",
      "Charte graphique",
      "Gabarits réseaux sociaux",
      "Kit print & signalétique",
    ],
    icon: "design",
  },
  {
    slug: "contenus",
    title: "Contenus & production",
    baseline: "Point 2 — Créer et donner forme",
    description:
      "Photo, vidéo, motion, copywriting : des contenus pensés pour capter l'attention et raconter votre différence.",
    deliverables: [
      "Shooting photo",
      "Films de marque",
      "Motion design",
      "Ligne éditoriale",
    ],
    icon: "content",
  },
  {
    slug: "social-media",
    title: "Social media",
    baseline: "Point 3 — Diffuser et amplifier",
    description:
      "Stratégie de contenu, community management et publicité sociale pour construire une audience qui compte vraiment.",
    deliverables: [
      "Calendrier éditorial",
      "Community management",
      "Ads Meta & TikTok",
      "Reporting mensuel",
    ],
    icon: "media",
  },
  {
    slug: "sites-web",
    title: "Sites & expériences",
    baseline: "Point 3 — Diffuser et amplifier",
    description:
      "Des sites rapides, accessibles et faciles à mettre à jour, qui prolongent l'expérience de votre marque en ligne.",
    deliverables: [
      "UX & wireframes",
      "Design d'interface",
      "Développement Next.js",
      "SEO technique",
    ],
    icon: "web",
  },
  {
    slug: "campagnes",
    title: "Campagnes & croissance",
    baseline: "Point 3 — Diffuser et amplifier",
    description:
      "Nous orchestrons vos lancements et optimisons chaque point de contact, du premier clic à la conversion.",
    deliverables: [
      "Concept de campagne",
      "Achat média",
      "A/B testing",
      "Tableau de bord KPI",
    ],
    icon: "growth",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Écouter",
    text: "Un atelier de cadrage pour comprendre votre marché, vos objectifs et vos contraintes.",
  },
  {
    number: "02",
    title: "Cadrer",
    text: "Une stratégie claire, un budget maîtrisé et un calendrier réaliste validés ensemble.",
  },
  {
    number: "03",
    title: "Créer",
    text: "Design, production et itérations rapides : vous suivez l'avancement à chaque étape.",
  },
  {
    number: "04",
    title: "Diffuser",
    text: "Mise en ligne, activation média et mesure des résultats pour progresser en continu.",
  },
] as const;
