/**
 * Configuration globale du site.
 * Modifiez uniquement ce fichier pour mettre à jour les coordonnées,
 * la navigation ou les réseaux sociaux.
 */

export const site = {
  name: "Media Three Points",
  shortName: "M3P",
  url: "https://mediathreepoints.com",
  description:
    "Agence de communication et studio créatif : stratégie de marque, création de contenus et diffusion média.",
  locale: "fr_MA",
  tagline: "Stratégie · Création · Diffusion",
  email: "contact@mediathreepoints.com",
  phone: "+212 6 00 00 00 00",
  address: {
    street: "Boulevard Pasteur",
    city: "Tanger",
    zip: "90000",
    country: "Maroc",
  },
  hours: "Lundi – Vendredi, 9h00 – 18h30",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
  ],
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "120+", label: "projets livrés" },
  { value: "38", label: "marques accompagnées" },
  { value: "9", label: "années d'expérience" },
  { value: "3", label: "points, une méthode" },
] as const;
