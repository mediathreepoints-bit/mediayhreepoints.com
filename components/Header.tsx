"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Referme le menu mobile à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} — accueil`}>
          <span className="brand__mark" aria-hidden="true">
            M3P
          </span>
          <span className="brand__name">
            Media Three Points
            <span>{site.tagline}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav__link ${isActive(item.href) ? "nav__link--active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link href="/contact" className="button button--primary">
            Démarrer un projet
            <span className="button__icon" aria-hidden="true">
              ↗
            </span>
          </Link>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}
      >
        <nav aria-label="Navigation mobile">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav__link"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button button--primary">
            Démarrer un projet
          </Link>
        </nav>
      </div>
    </header>
  );
}
