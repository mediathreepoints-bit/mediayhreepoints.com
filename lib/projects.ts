export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  services: string[];
  /** Dégradé utilisé comme visuel de remplacement (aucune image requise). */
  gradient: string;
  /** Ajoutez ici le chemin d'une image dans /public/images pour remplacer le dégradé. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "maison-atlas",
    client: "Maison Atlas",
    title: "Une maison d'hôtes qui raconte Tanger",
    category: "Identité · Web",
    year: "2026",
    summary:
      "Refonte complète de l'identité et du site de réservation : un univers chaleureux, une expérience mobile irréprochable et +64 % de réservations directes.",
    services: ["Stratégie", "Identité visuelle", "Site web"],
    gradient: "linear-gradient(135deg, #ff8a3d 0%, #ff3d77 55%, #7c5cff 100%)",
  },
  {
    slug: "fret-ligne",
    client: "Fret Ligne",
    title: "Le fret maritime expliqué simplement",
    category: "Contenu · Campagne",
    year: "2025",
    summary:
      "Une série de films courts et une campagne sociale pour rendre un secteur technique limpide. 2,4 M de vues et 190 leads qualifiés.",
    services: ["Contenu", "Social media", "Achat média"],
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 55%, #67e8f9 100%)",
  },
  {
    slug: "nour-market",
    client: "Nour Market",
    title: "Le quartier dans votre poche",
    category: "Produit · Web",
    year: "2025",
    summary:
      "Design d'un service de livraison de proximité et site vitrine trilingue, avec un parcours de commande en moins de 40 secondes.",
    services: ["UX/UI", "Site web", "Copywriting"],
    gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 50%, #d9f99d 100%)",
  },
  {
    slug: "studio-3-points",
    client: "Atelier Lumen",
    title: "Un studio qui montre ses process",
    category: "Contenu · Social",
    year: "2024",
    summary:
      "Direction artistique et production d'un format documentaire mensuel pour une audience de créatifs : +32 % d'abonnés en six mois.",
    services: ["Direction artistique", "Vidéo", "Social media"],
    gradient: "linear-gradient(135deg, #4c1d95 0%, #a855f7 50%, #fbcfe8 100%)",
  },
];

export const testimonials = [
  {
    quote:
      "Une équipe qui pose les bonnes questions avant de dessiner. Notre nouvelle identité est enfin à la hauteur de ce que nous sommes.",
    author: "Salma Bennani",
    role: "Fondatrice, Maison Atlas",
  },
  {
    quote:
      "Nous avons gagné en clarté et en visibilité. Les reportings sont simples, les décisions rapides, les résultats mesurables.",
    author: "Youssef El Amrani",
    role: "Directeur marketing, Fret Ligne",
  },
  {
    quote:
      "Trois points, une méthode. On sait toujours où l'on en est, ce qui vient ensuite et pourquoi. C'est rare et précieux.",
    author: "Inès Toufik",
    role: "CEO, Nour Market",
  },
] as const;
