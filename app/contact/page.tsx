import type { Metadata } from "next";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet : contactez Media Three Points à Tanger par e-mail, téléphone ou via le formulaire. Réponse sous 24 heures ouvrées.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>Contact</span>
          </nav>

          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h1 className="page-hero__title">Parlons de votre prochain point.</h1>
            </div>
            <div className="page-hero__aside">
              <p>
                Décrivez votre contexte en quelques lignes : nous revenons vers
                vous sous 24 heures ouvrées avec une première lecture et une
                proposition de rendez-vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Formulaire et coordonnées">
        <div className="container contact-grid">
          <ContactForm />

          <aside>
            <div className="info-card">
              <h3>Coordonnées</h3>
              <div className="info-list">
                <div className="info-row">
                  <span>E-mail</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
                <div className="info-row">
                  <span>Téléphone</span>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                    {site.phone}
                  </a>
                </div>
                <div className="info-row">
                  <span>Adresse</span>
                  <span style={{ textAlign: "right" }}>
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                  </span>
                </div>
                <div className="info-row">
                  <span>Horaires</span>
                  <span style={{ textAlign: "right" }}>{site.hours}</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Réseaux</h3>
              <div className="info-list">
                {site.socials.map((social) => (
                  <div className="info-row" key={social.label}>
                    <span>{social.label}</span>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Suivre ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3>Vous cherchez un stage ?</h3>
              <p>
                Nous accueillons deux stagiaires par an en création et en
                production. Envoyez votre portfolio à{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
