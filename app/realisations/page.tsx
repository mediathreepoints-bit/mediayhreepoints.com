import type { Metadata } from "next";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";
import ProjectCard from "@/components/ProjectCard";
import { projects, testimonials } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Une sélection de projets : identités de marque, sites web, contenus et campagnes réalisés par Media Three Points à Tanger.",
  alternates: { canonical: "/realisations" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>Réalisations</span>
          </nav>

          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h1 className="page-hero__title">
                Des projets qui racontent quelque chose.
              </h1>
            </div>
            <div className="page-hero__aside">
              <p>
                Quatre cas récents, choisis pour leur diversité : hospitalité,
                logistique, commerce de proximité et création indépendante.
              </p>
              <p style={{ marginTop: 14 }}>
                Vous voulez un dossier complet par secteur ? Écrivez-nous.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Projets">
        <div className="container">
          <div className="projects">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="results-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Résultats</p>
              <h2 id="results-title">Ce que ces projets ont changé.</h2>
            </div>
          </div>

          <div className="grid grid--3">
            {[
              {
                value: "+64 %",
                label: "de réservations directes",
                text: "Maison Atlas, après refonte de l'identité et du parcours de réservation.",
              },
              {
                value: "2,4 M",
                label: "de vues cumulées",
                text: "Fret Ligne, sur une campagne de six films courts diffusés en organique et en paid.",
              },
              {
                value: "40 s",
                label: "pour passer commande",
                text: "Nour Market, grâce à un parcours mobile repensé de bout en bout.",
              },
            ].map((result) => (
              <article className="value" key={result.label}>
                <p className="stat__value" style={{ fontSize: "2.4rem" }}>
                  {result.value}
                </p>
                <p className="quote__name" style={{ marginTop: 8 }}>
                  {result.label}
                </p>
                <p>{result.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="proof-title">
        <div className="container">
          <div className="quotes">
            {testimonials.slice(0, 2).map((quote) => (
              <figure className="quote" key={quote.author}>
                <span className="quote__mark" aria-hidden="true">
                  “
                </span>
                <blockquote className="quote__text">{quote.quote}</blockquote>
                <figcaption className="quote__author">
                  <p className="quote__name">{quote.author}</p>
                  <p className="quote__role">{quote.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Votre projet sera le prochain ?"
        text="Envoyez-nous deux ou trois références que vous aimez et votre objectif principal : nous revenons vers vous avec une première piste."
      />
    </>
  );
}
