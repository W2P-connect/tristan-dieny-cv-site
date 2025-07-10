import { ProjectContent } from "@/types";

export const w2pProjectContent: ProjectContent = {
  fr: [
    {
      key: "origin",
      heading: "Origine du projet",
      type: "text",
      content: [
        "L'idée de W2P est née lors de mon expérience chez LLFC, une entreprise spécialisée dans le chanvre.",
        "Dans le cadre de la digitalisation des opérations commerciales, nous avions un besoin crucial : synchroniser les données de WooCommerce avec notre CRM Pipedrive.",
        "Aucune solution existante n’était suffisamment fiable ou adaptée. J’ai donc créé W2P pour répondre à ce besoin métier concret, puis l’ai transformé en produit réutilisable et commercialisable."
      ]
    },
    {
      key: "tech",
      heading: "Technologies & apprentissages",
      type: "text",
      content: [
        "J’ai profité de ce projet pour explorer des outils modernes comme Next.js, Tailwind CSS et TypeScript.",
        "Cela m’a permis de consolider mes compétences full-stack et de mettre en place une architecture claire, robuste et scalable."
      ]
    },
    {
      key: "status",
      heading: "Statut du projet",
      type: "text",
      content: [
        "W2P est aujourd’hui en production, utilisé par plusieurs clients et source de revenus récurrents.",
        "La phase de test est terminée, le système est stable. Je n’ai plus qu’à intervenir ponctuellement pour du support ou de légères évolutions."
      ]
    },
    {
      key: "structure",
      heading: "Architecture & fonctionnement",
      type: "group",
      content: [
        {
          key: "intro",
          heading: "",
          type: "text",
          content: [
            "W2P se compose de deux entités indépendantes mais connectées :"
          ]
        },
        {
          key: "plugin",
          heading: "1. Plugin client",
          type: "text",
          content: [
            "Développé en PHP pour l'intégration WordPress, avec une interface React dans l’admin WooCommerce."
          ]
        },
        {
          key: "website",
          heading: "2. Site de validation",
          type: "text",
          content: [
            "Développé avec Next.js, il gère la vérification des abonnements via Stripe, et agit comme proxy sécurisé vers l’API de Pipedrive."
          ]
        },
        {
          key: "api",
          heading: "Communication API",
          type: "text",
          content: [
            "Les deux entités communiquent via une API REST que j’ai conçue pour être simple, performante et sécurisée."
          ]
        }
      ]
    },
    {
      key: "security",
      heading: "Sécurité des données",
      type: "text",
      content: [
        "Les clés API Pipedrive ne sont jamais stockées sur mon serveur.",
        "Elles sont encodées côté client, transmises temporairement pour chaque requête, puis immédiatement oubliées.",
        "Cette approche garantit la confidentialité et réduit les risques de compromission."
      ]
    },
    {
      key: "note",
      heading: "Informations complémentaires",
      type: "text",
      content: [
        "W2P est opéré sous ma société **W2P** (SASU, SIREN : 929227171).",
        "Le code source est privé mais je peux accorder un accès sur demande. Aucune donnée sensible n'y figure.",
        "Ce projet démontre ma capacité à créer, structurer et maintenir un produit SaaS professionnel, sécurisé et exploité commercialement."
      ]
    }
  ],

  en: [
    {
      key: "origin",
      heading: "Project origins",
      type: "text",
      content: [
        "The idea for W2P was born during my time at LLFC, a French company specialized in hemp products.",
        "We needed to sync WooCommerce sales data with our Pipedrive CRM, but no existing solution met our needs.",
        "I created W2P to solve that real business problem—then turned it into a commercial and reusable product."
      ]
    },
    {
      key: "tech",
      heading: "Technologies & learnings",
      type: "text",
      content: [
        "This project was a great opportunity to master tools like Next.js, Tailwind CSS, and TypeScript.",
        "It helped me solidify my full-stack expertise and implement a clean, scalable and maintainable architecture."
      ]
    },
    {
      key: "status",
      heading: "Project status",
      type: "text",
      content: [
        "W2P is now live in production, generating recurring revenue.",
        "The test phase is over, the system is stable, and I only handle occasional support or minor improvements."
      ]
    },
    {
      key: "structure",
      heading: "Architecture & system design",
      type: "group",
      content: [
        {
          key: "intro",
          heading: "",
          type: "text",
          content: [
            "W2P consists of two distinct yet connected entities:"
          ]
        },
        {
          key: "plugin",
          heading: "1. Client plugin",
          type: "text",
          content: [
            "Built with PHP (WordPress back-end) and React inside the WooCommerce admin panel."
          ]
        },
        {
          key: "website",
          heading: "2. Validation website",
          type: "text",
          content: [
            "Built with Next.js, it verifies subscriptions via Stripe and acts as a secure proxy to the Pipedrive API."
          ]
        },
        {
          key: "api",
          heading: "API communication",
          type: "text",
          content: [
            "Both parts communicate via a custom REST API, designed to be lightweight, fast and secure."
          ]
        }
      ]
    },
    {
      key: "security",
      heading: "Data security",
      type: "text",
      content: [
        "Pipedrive API keys are never stored on my server.",
        "They are encrypted and saved locally on the client, sent temporarily during each request, then discarded.",
        "This ensures full confidentiality and minimizes the risk of leaks or misuse."
      ]
    },
    {
      key: "note",
      heading: "Additional info",
      type: "text",
      content: [
        "W2P is owned and managed under my company **W2P** (SASU, SIREN: 929227171).",
        "The source code is private but accessible upon request. No sensitive data is present in the repository.",
        "This project showcases my ability to build and operate a secure SaaS product from scratch."
      ]
    }
  ]
};
