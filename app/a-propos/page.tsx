import type { Metadata } from "next";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";
import ThreePoints from "@/components/ThreePoints";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Media Three Points est un studio de communication basé à Tanger : une équipe pluridisciplinaire, une méthode en trois points et une exigence simple, le résultat.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    num: "01",
    title: "Clarté",
    text: "Pas de jargon inutile. Nous expliquons nos choix, les options écartées et ce qu'elles impliquent.",
  },
  {
    num: "02",
    title: "Craft",
    text: "Le détail fait la différence : typographie, rythme, ton, performance. Nous soignons chaque point de contact.",
  },
  {
    num: "03",
    title: "Impact",
    text: "Une belle création qui ne sert à rien ne nous intéresse pas. Nous mesurons, apprenons et ajustons.",
  },
];

const team = [
  {
    name: "Yasmine Aitali",
    role: "Direction de création",
    bio: "12 ans en identité de marque, passée par Casablanca et Paris. Elle dessine les systèmes graphiques et veille au cap artistique.",
  },
  {
    name: "Mehdi Ouazzani",
    role: "Stratégie & contenus",
    bio: "Ancien journaliste économique, il traduit les enjeux business en récits clairs et en lignes éditoriales tenables.",
  },
  {
    name: "Lina Berrada",
    role: "Production & diffusion",
    bio: "Elle orchestre les projets, les tournages et les activations média. C'est elle qui tient le calendrier — et les promesses.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>À propos</span>
          </nav>

          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Le studio</p>
              <h1 className="page-hero__title">
                Trois points, une conviction.
              </h1>
            </div>
            <div className="page-hero__aside">
              <p>
                Une marque ne se résume pas à un logo. Elle se construit à
                l'intersection de ce qu'elle dit, de ce qu'elle montre et de la
                façon dont elle rejoint les gens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="story-title">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Notre histoire</p>
            <h2 id="story-title">
              Née à Tanger, tournée vers le détroit.
            </h2>
            <p className="lead">
              Media Three Points a été fondé en 2017 par trois profils
              complémentaires : une directrice de création, un stratège et une
              productrice. D'où le nom — et la méthode.
            </p>
            <p className="muted" style={{ marginTop: 18, maxWidth: "56ch" }}>
              Depuis, nous accompagnons des marques marocaines et
              internationales, de l'hôtellerie au transport, en passant par le
              commerce de proximité. Notre terrain de jeu : les projets où la
              culture locale et les standards de création se rencontrent.
            </p>

            <div className="hero__meta">
              <span>
                <strong>2017</strong> création du studio
              </span>
              <span>
                <strong>{site.address.city}</strong> {site.address.country}
              </span>
              <span>
                <strong>FR / AR / EN</strong> langues de travail
              </span>
            </div>
          </div>

          <ThreePoints />
        </div>
      </section>

      <section className="section section--tight" aria-label="Chiffres clés">
        <div className="container">
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <p className="stat__value">{stat.value}</p>
                <p className="stat__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Nos valeurs</p>
              <h2 id="values-title">Trois principes, jamais négociés.</h2>
            </div>
          </div>

          <div className="grid grid--3">
            {values.map((value) => (
              <article className="value" key={value.num}>
                <span className="value__num">{value.num}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">L'équipe</p>
              <h2 id="team-title">Des interlocuteurs, pas un standard.</h2>
            </div>
            <p className="muted" style={{ maxWidth: "32ch" }}>
              Une équipe resserrée, épaulée par un réseau de photographes,
              développeurs et monteurs selon les projets.
            </p>
          </div>

          <div className="team">
            {team.map((person) => (
              <article className="person" key={person.name}>
                <span className="person__avatar" aria-hidden="true">
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <h3>{person.name}</h3>
                <p className="person__role">{person.role}</p>
                <p className="person__bio">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Envie de travailler avec nous ?"
        text="Nous sélectionnons nos collaborations pour rester disponibles et impliqués. Parlons de votre projet."
        secondaryLabel="Voir nos services"
        secondaryHref="/services"
      />
    </>
  );
}
