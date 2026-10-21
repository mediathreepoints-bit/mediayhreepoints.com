import type { Metadata } from "next";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import ThreePoints from "@/components/ThreePoints";
import { projects, testimonials } from "@/lib/projects";
import { processSteps, services } from "@/lib/services";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const clients = [
  "Maison Atlas",
  "Fret Ligne",
  "Nour Market",
  "Atelier Lumen",
  "Riad Zéphyr",
  "Kasbah Studio",
  "Détroit Média",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div>
            <span className="badge">
              <span className="badge__dot" aria-hidden="true" />
              Studio créatif & média — Tanger
            </span>

            <h1 id="hero-title" className="hero__title">
              Trois points. Une marque qui <em>compte</em>.
            </h1>

            <p className="lead">
              Stratégie, création, diffusion : nous relions les trois points qui
              transforment une bonne idée en marque mémorable. De la première
              intuition à la dernière campagne.
            </p>

            <div className="hero__actions">
              <Link href="/contact" className="button button--primary">
                Démarrer un projet
                <span className="button__icon" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <Link href="/realisations" className="button button--ghost">
                Voir nos réalisations
              </Link>
            </div>

            <div className="hero__meta">
              <span>
                <strong>120+</strong> projets livrés
              </span>
              <span>
                <strong>38</strong> marques accompagnées
              </span>
              <span>
                Réponse sous <strong>24 h</strong>
              </span>
            </div>
          </div>

          <ThreePoints />
        </div>
      </section>

      {/* Bandeau clients */}
      <div className="marquee" aria-label="Ils nous font confiance">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__group" key={copy} aria-hidden={copy === 1}>
              {clients.map((client) => (
                <span className="marquee__item" key={`${copy}-${client}`}>
                  {client}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Chiffres */}
      <section className="section section--tight" aria-label="Quelques chiffres">
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

      {/* Services */}
      <section className="section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Ce que nous faisons</p>
              <h2 id="services-title">Trois points, six façons d'agir.</h2>
            </div>
            <p className="muted" style={{ maxWidth: "34ch" }}>
              Chaque mission commence par une question simple : quel est le
              point de bascule pour votre marque ?
            </p>
          </div>

          <div className="grid grid--3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <p style={{ marginTop: 32 }}>
            <Link href="/services" className="button button--ghost">
              Tous nos services
              <span className="button__icon" aria-hidden="true">
                ↗
              </span>
            </Link>
          </p>
        </div>
      </section>

      {/* Processus */}
      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Notre méthode</p>
              <h2 id="process-title">Un chemin clair, du brief au résultat.</h2>
            </div>
          </div>

          <div className="steps">
            {processSteps.map((step) => (
              <div className="step" key={step.number}>
                <span className="step__number">{step.number}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="section" aria-labelledby="projects-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Réalisations</p>
              <h2 id="projects-title">Des marques qui prennent position.</h2>
            </div>
            <Link href="/realisations" className="button button--ghost">
              Tout le portfolio
              <span className="button__icon" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>

          <div className="projects">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section" aria-labelledby="quotes-title">
        <div className="container">
          <div className="section-head section-head--center">
            <div>
              <p className="eyebrow" style={{ justifyContent: "center" }}>
                Ils témoignent
              </p>
              <h2 id="quotes-title">La confiance se construit point par point.</h2>
            </div>
          </div>

          <div className="quotes">
            {testimonials.map((quote) => (
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

      <CtaBand />
    </>
  );
}
