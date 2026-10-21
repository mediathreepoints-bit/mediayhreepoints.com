# mediathreepoints.com

Site vitrine de **Media Three Points** — studio de communication et média à Tanger.
Stratégie · Création · Diffusion.

Stack : **Next.js 16 (App Router) + React 19 + TypeScript**, styles en CSS natif
(aucune dépendance UI), site entièrement statique et prêt pour Vercel ou tout
hébergement Node.

---

## 1. Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # serveur de production
npm run typecheck
```

---

## 2. Organisation des fichiers

```
mediathreepoints.com/
├── app/                       # Routes (App Router) — 1 dossier = 1 URL
│   ├── layout.tsx             # <html>, header, footer, SEO global, JSON-LD
│   ├── page.tsx               # Accueil            → /
│   ├── services/page.tsx      # Expertises         → /services
│   ├── realisations/page.tsx  # Portfolio          → /realisations
│   ├── a-propos/page.tsx      # Studio & équipe    → /a-propos
│   ├── contact/page.tsx       # Formulaire         → /contact
│   ├── not-found.tsx          # Page 404
│   ├── robots.ts              # /robots.txt généré
│   ├── sitemap.ts             # /sitemap.xml généré
│   └── globals.css            # Toute la feuille de styles (voir §5)
│
├── components/                # Composants réutilisables
│   ├── Header.tsx             # Header sticky + menu mobile (client)
│   ├── Footer.tsx             # Pied de page
│   ├── CtaBand.tsx            # Bandeau d'appel à l'action
│   ├── ContactForm.tsx        # Formulaire de contact (client)
│   ├── ProjectCard.tsx        # Carte réalisation
│   ├── ServiceCard.tsx        # Carte service
│   ├── ServiceIcon.tsx        # Icônes SVG inline
│   └── ThreePoints.tsx        # Graphique « 3 points » de la marque
│
├── lib/                       # ⚠️ Tout le contenu éditorial vit ici
│   ├── site.ts                # Nom, coordonnées, réseaux, navigation, chiffres
│   ├── services.ts            # Liste des services + étapes de méthode
│   └── projects.ts            # Réalisations + témoignages
│
├── public/                    # Fichiers servis tels quels
│   ├── favicon.svg
│   └── images/                # Visuels des projets (voir §4)
│
├── next.config.ts             # Origines autorisées en dev (aperçu)
├── tsconfig.json              # TypeScript + alias « @/ » = racine du projet
└── package.json
```

### Règles de rangement

- **Une page = un dossier dans `app/`**, avec un `page.tsx` et son `metadata`
  (titre + description) pour le référencement.
- **Aucun texte en dur dans les pages** quand il est répété : tout ce qui est
  éditorial (services, projets, coordonnées) est centralisé dans `lib/`.
- **Un composant = un fichier** dans `components/`, en `PascalCase.tsx`.
  Les composants interactifs portent `"use client"` en première ligne.
- **Pas de CSS par composant** : les classes sont définies dans
  `app/globals.css`, organisé en 8 sections numérotées.
- Les imports utilisent l'alias `@/` (ex. `@/lib/services`), jamais de chemins
  relatifs du type `../../`.

---

## 3. Modifier le contenu

| Ce que vous voulez changer | Fichier |
| --- | --- |
| Nom, e-mail, téléphone, adresse, réseaux sociaux | `lib/site.ts` |
| Menu de navigation | `lib/site.ts` → `navigation` |
| Chiffres clés de l'accueil | `lib/site.ts` → `stats` |
| Services et livrables | `lib/services.ts` |
| Étapes de la méthode | `lib/services.ts` → `processSteps` |
| Réalisations | `lib/projects.ts` → `projects` |
| Témoignages | `lib/projects.ts` → `testimonials` |
| Couleurs, typographie, espacements | `app/globals.css` → section `1. Tokens` |
| Équipe / valeurs | `app/a-propos/page.tsx` |

---

## 4. Ajouter un visuel de réalisation

1. Déposer l'image dans `public/images/` (JPG ou WebP, ratio 16:10, ~1600 px
   de large, < 300 Ko).
2. Dans `lib/projects.ts`, renseigner le champ `image` du projet :

```ts
{
  slug: "maison-atlas",
  // ...
  image: "/images/maison-atlas.jpg",
}
```

Sans image, un dégradé défini par `gradient` est utilisé : le site reste
présentable même sans photos.

---

## 5. Feuille de styles (`app/globals.css`)

Fichier unique, organisé en sections pour rester lisible :

1. **Tokens** — variables CSS (couleurs, rayons, espacements, polices).
2. **Base** — reset léger, typographie, focus, lien d'évitement.
3. **Layout** — `.container`, `.section`, `.grid`.
4. **Composants** — boutons, badges, cartes, tags.
5. **Header / Footer**.
6. **Sections de l'accueil** — hero, « 3 points », bandeau défilant, chiffres,
   projets, méthode, témoignages, CTA.
7. **Pages intérieures** — en-têtes, services, équipe, contact, 404.
8. **Responsive & accessibilité** — points de rupture 1000 / 860 / 640 px et
   `prefers-reduced-motion`.

Toute nouvelle règle doit rejoindre la section correspondante, avec les tokens
plutôt que des valeurs codées en dur.

---

## 6. Formulaire de contact

`components/ContactForm.tsx` valide les champs côté client puis ouvre le
logiciel de messagerie avec un e-mail pré-rempli vers `contact@mediathreepoints.com`.

Pour recevoir les messages sans passer par la messagerie du visiteur, brancher
un service d'envoi (Resend, Formspree, route API Next.js…) à l'endroit indiqué
par le commentaire `// Aucun backend n'est branché…`.

---

## 7. SEO & accessibilité

- Métadonnées par page (`title`, `description`, `canonical`, Open Graph).
- `sitemap.xml` et `robots.txt` générés automatiquement.
- Données structurées `ProfessionalService` (JSON-LD) dans `layout.tsx`.
- Lien d'évitement, `aria-current` sur la navigation, `aria-expanded` sur le
  menu mobile, focus visible, contrastes vérifiés, respect de
  `prefers-reduced-motion`.

---

## 8. Déploiement

Le site est 100 % statique.

- **Vercel** : importer le dépôt, aucun réglage nécessaire.
- **Hébergement Node** : `npm run build` puis `npm start` (port 3000).
- Penser à mettre à jour `site.url` dans `lib/site.ts` après le branchement du
  nom de domaine.
