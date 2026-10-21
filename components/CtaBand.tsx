import Link from "next/link";

export default function CtaBand({
  title = "Un projet en tête ? Parlons-en.",
  text = "Un brief, une intuition, une envie de changement : nous vous répondons sous 24 heures ouvrées avec une première lecture de votre besoin.",
  primaryLabel = "Démarrer un projet",
  primaryHref = "/contact",
  secondaryLabel = "Voir nos réalisations",
  secondaryHref = "/realisations",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section section--tight" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta">
          <div className="cta__grid">
            <div>
              <p className="eyebrow">Prochaine étape</p>
              <h2 id="cta-title" className="cta__title">
                {title}
              </h2>
              <p className="cta__text">{text}</p>
            </div>
            <div className="hero__actions" style={{ marginTop: 0 }}>
              <Link href={primaryHref} className="button button--primary">
                {primaryLabel}
                <span className="button__icon" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <Link href={secondaryHref} className="button button--ghost">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
