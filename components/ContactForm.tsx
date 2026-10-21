"use client";

import { useState, type FormEvent } from "react";

import { services } from "@/lib/services";

type Status = "idle" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    // Aucun backend n'est branché pour l'instant : on compose un e-mail.
    const subject = encodeURIComponent(
      `Nouveau projet — ${data.get("company") || name}`,
    );
    const body = encodeURIComponent(
      [
        `Nom : ${name}`,
        `E-mail : ${email}`,
        `Entreprise : ${data.get("company") || "—"}`,
        `Budget : ${data.get("budget") || "—"}`,
        `Besoin : ${data.get("service") || "—"}`,
        "",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:contact@mediathreepoints.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {status === "sent" && (
        <p className="form__success" role="status">
          Merci ! Votre logiciel de messagerie s'ouvre avec le récapitulatif.
          Nous revenons vers vous sous 24 heures ouvrées.
        </p>
      )}
      {status === "error" && (
        <p className="form__success" role="alert" style={{ borderColor: "rgba(255,107,74,.35)", background: "rgba(255,107,74,.08)", color: "#ffd0c4" }}>
          Merci de renseigner au minimum votre nom, votre e-mail et votre
          message.
        </p>
      )}

      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Nom complet *</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Amina El Fassi"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="company">Entreprise</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nom de votre société"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">E-mail *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@entreprise.com"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="budget">Budget estimé</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">À définir</option>
            <option value="8 000 – 20 000 MAD">8 000 – 20 000 MAD</option>
            <option value="20 000 – 60 000 MAD">20 000 – 60 000 MAD</option>
            <option value="60 000 MAD et +">60 000 MAD et +</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">Votre besoin principal</label>
        <select id="service" name="service" defaultValue="">
          <option value="">Sélectionnez un service</option>
          {services.map((service) => (
            <option value={service.title} key={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Parlez-nous de votre projet *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Contexte, objectifs, échéances…"
          required
        />
      </div>

      <button type="submit" className="button button--primary">
        Envoyer la demande
        <span className="button__icon" aria-hidden="true">
          ↗
        </span>
      </button>

      <p className="form__note">
        En envoyant ce formulaire, vous acceptez d'être recontacté au sujet de
        votre demande. Vos données ne sont ni revendues ni partagées.
      </p>
    </form>
  );
}
