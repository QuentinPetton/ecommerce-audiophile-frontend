# 🎧 Audiophile e-commerce (Frontend)

Site e-commerce fictif dédié à la vente de produits audio haut de gamme (casques, écouteurs, enceintes) avec tunnel de vente complet.

![Aperçu du site](https://i.postimg.cc/Zqcsb3Jy/Capture-d-e-cran-2025-05-21-a-09-29-52.png)

Ce projet s’inscrit dans une démarche de montée en compétences en développement web moderne.

**WIP : le projet est encore en cours de développement, certaines fonctionnalités sont en amélioration continue**

## Déploiement

Le projet est hébergé via Coolify v4 sur un VPS Hostinger.
🔗 Lien de production : [https://audiophile.quentinpetton.com](https://audiophile.quentinpetton.com)

## Stack technique

```bash
- Framework : Angular v19
- Style : Tailwind CSS v4
- Structure : Single File Components (SFC)
- Langage : TypeScript
- Gestion d’état : signal()
- Déploiement : Docker + Coolify
- Qualité du code: prettier
```

### Fonctionnalités

- Navigation par catégories : casques, écouteurs, enceintes
- Tunnel d’achat complet : ajout panier, quantité, résumé commande, confirmation de commande
- Détails produit avec galerie, description, fonctionnalités et contenu du packaging
- Données dynamiques via une API (JAVA Spring Boot)
- Responsive : Mobile, tablette, desktop

### Fonctionnalités à venir

- Chatbot IA intelligent connecté à l’API produits
- Automatisations no-code avec n8n pour le support client

## Structure du projet

```bash
src/
├── app/
│ ├── components/
│ ├── guards/
│ ├── services/
│ ├── models/
│ ├── pipes/
│ ├── environments/
│ └── app.config.ts
└── assets/
```

### Lancer en local

```bash
pnpm install
ng serve
```

Assurez-vous que le backend (Spring Boot) soit démarré et que le CORS soit activé pour les requêtes Angular.

### Auteur

Projet réalisé par Quentin Petton
Profil LinkedIn : [https://www.linkedin.com/in/quentin-petton/](https://www.linkedin.com/in/quentin-petton/)

Backend JAVA Spring Boot du projet disponible ici : [https://github.com/QuentinPetton/ecommerce-audiophile-backend](https://github.com/QuentinPetton/ecommerce-audiophile-backend)
