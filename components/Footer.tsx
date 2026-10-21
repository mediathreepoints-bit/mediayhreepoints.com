import Link from "next/link";

import { navigation, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="brand" aria-label={`${site.name} — accueil`}>
              <span className="brand__mark" aria-hidden="true">
                M3P
              </span>
              <span className="brand__name">Media Three Points</span>
            </Link>
            <p className="footer__about">
              Studio de communication basé à Tanger. Stratégie, création et
              diffusion : trois points pour faire compter votre marque.
            </p>
          </div>

          <div>
            <p className="footer__title">Navigation</p>
            <ul className="footer__list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__title">Services</p>
            <ul className="footer__list">
              <li>
                <Link href="/services">Stratégie de marque</Link>
              </li>
              <li>
                <Link href="/services">Identité visuelle</Link>
              </li>
              <li>
                <Link href="/services">Contenus & production</Link>
              </li>
              <li>
                <Link href="/services">Sites & expériences</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__title">Contact</p>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}, {site.address.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
          <ul className="footer__list" style={{ display: "flex", gap: 18 }}>
            {site.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer noopener">
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
