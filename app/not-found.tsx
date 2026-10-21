import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container notfound">
      <div>
        <p className="notfound__code">404</p>
        <h1 style={{ marginTop: 20, fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}>
          Ce point n'existe pas encore.
        </h1>
        <p className="muted" style={{ marginTop: 16, maxWidth: "44ch", marginInline: "auto" }}>
          La page que vous cherchez a peut-être été déplacée. Revenons sur un
          chemin connu.
        </p>
        <div
          className="hero__actions"
          style={{ justifyContent: "center", marginTop: 30 }}
        >
          <Link href="/" className="button button--primary">
            Retour à l'accueil
          </Link>
          <Link href="/contact" className="button button--ghost">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
