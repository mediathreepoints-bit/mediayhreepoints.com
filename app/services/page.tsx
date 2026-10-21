import type { Metadata } from "next";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";
import ServiceIcon from "@/components/ServiceIcon";
import { processSteps, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Stratégie de marque, identité visuelle, contenus, social media, sites web et campagnes : découvrez les six expertises de Media Three Points.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>Services</span>
          </nav>

          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Expertises</p>
              <h1 className="page-hero__title">
                Ce que nous faisons, et pourquoi.
              </h1>
            </div>
            <div className="page-hero__aside">
              <p>
                Pas de catalogue figé : nous assemblons les expertises utiles à
                votre situation, avec un interlocuteur unique et un calendrier
                lisible.
              </p>
              <p style={{ marginTop: 14 }}>
                Missions ponctuelles ou accompagnement mensuel — à partir de
                8 000 MAD.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Liste des services">
        <div className="container">
          {services.map((service, index) => (
            <article className="service-block" key={service.slug}>
              <div>
                <span className="service-block__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <p className="service-card__baseline">{service.baseline}</p>
                <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}>
                  {service.title}
                </h2>
              </div>

              <div className="service-block__aside">
                <p className="service-block__text" style={{ marginTop: 0 }}>
                  {service.description}
                </p>
                <ul className="detail-list">
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="method-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Déroulé</p>
              <h2 id="method-title">Quatre étapes, zéro zone d'ombre.</h2>
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

      <section className="section section--tight" aria-labelledby="packs-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Formats</p>
              <h2 id="packs-title">Trois façons de travailler ensemble.</h2>
            </div>
          </div>

          <div className="grid grid--3">
            {[
              {
                icon: "strategy" as const,
                title: "Sprint",
                text: "2 à 3 semaines pour cadrer une marque ou lancer un projet : atelier, positionnement, direction créative.",
              },
              {
                icon: "design" as const,
                title: "Projet",
                text: "Une mission complète, du brief à la livraison : identité, site, campagne ou film de marque.",
              },
              {
                icon: "growth" as const,
                title: "Accompagnement",
                text: "Un abonnement mensuel : contenus, social media et optimisation continue, avec reporting.",
              },
            ].map((pack, index) => (
              <article className="card service-card" key={pack.title}>
                <div className="service-card__top">
                  <span className="service-card__icon">
                    <ServiceIcon name={pack.icon} />
                  </span>
                  <span className="card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{pack.title}</h3>
                <p className="card__text">{pack.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Besoin d'un avis avant de choisir ?"
        text="Racontez-nous votre contexte : nous vous proposerons le format le plus adapté, sans engagement."
        secondaryLabel="Nous découvrir"
        secondaryHref="/a-propos"
      />
    </>
  );
}
