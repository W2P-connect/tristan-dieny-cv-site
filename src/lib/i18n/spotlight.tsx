import { ProjectContent } from '@/types'

export const spotlightProjectContent: ProjectContent = {
  fr: [
    {
      key: 'origin',
      heading: 'Origine du projet',
      type: 'text',
      content: [
        'Spotlight est né de ma passion pour la musculation et de mon envie de suivre mes progrès de manière plus intuitive, sociale et personnalisée.',
        'Je n’ai trouvé aucune application qui me permette à la fois de programmer mes entraînements, d’enregistrer mes performances et de les partager dans un environnement stimulant.',
        'J’ai donc conçu Spotlight comme l’outil que j’aurais voulu utiliser moi-même, avec l’ambition d’en faire une plateforme de référence pour les passionnés de training.',
      ],
    },
    {
      key: 'tech',
      heading: 'Technologies & apprentissages',
      type: 'text',
      content: [
        'Spotlight m’a permis d’approfondir mes compétences sur l’écosystème React Native avec Expo, et de concevoir une architecture mobile robuste et fluide.',
        'Le backend est construit avec Next.js et Supabase (auth, base de données, stockage), garantissant une bonne scalabilité et une gestion sécurisée des sessions.',
        'J’ai également implémenté l’authentification Google, les notifications push et la persistance des données locales côté app.',
      ],
    },
    {
      key: 'status',
      heading: 'Statut du projet',
      type: 'text',
      content: [
        'Spotlight est actuellement en phase de test.',
        'Je vise une publication prochaine sur l’App Store et le Play Store.',
        'Le projet est personnel, sans entreprise ou modèle économique associé à ce jour.',
      ],
    },
    {
      key: 'structure',
      heading: 'Architecture & fonctionnement',
      type: 'group',
      content: [
        {
          key: 'intro',
          heading: '',
          type: 'text',
          content: ['Spotlight repose sur deux briques principales :'],
        },
        {
          key: 'app',
          heading: '1. Application mobile',
          type: 'text',
          content: [
            'Développée en React Native avec Expo. Elle gère toute la logique métier : création de séances, enregistrement de performances, réseau social, navigation et animations.',
          ],
        },
        {
          key: 'backend',
          heading: '2. Backend & base de données',
          type: 'text',
          content: [
            'Développé en Next.js, hébergé sur Vercel, avec Supabase pour les données, le stockage de fichiers, l’authentification et la sécurité des sessions.',
          ],
        },
      ],
    },
    {
      key: 'security',
      heading: 'Sécurité & persistance',
      type: 'text',
      content: [
        'Les données utilisateurs sont protégées par Supabase et les sessions sont sécurisées par des tokens.',
        'Un cache local a été mis en place pour assurer la persistance des données même hors-ligne.',
      ],
    },
    {
      key: 'note',
      heading: 'Informations complémentaires',
      type: 'text',
      content: [
        'Spotlight est un projet collaboratif que je mène avec deux amis.',
        "Je suis en charge de tout l'aspect développement (mobile, backend, base de données), tandis que mes coéquipiers s’occupent de l’UI/UX.",
        'Leur implication est plus ponctuelle, ce qui me permet d’assurer la continuité du projet au quotidien.',
        'Je reste ouvert aux retours et aux opportunités de collaboration pour faire évoluer Spotlight.',
      ],
    },
  ],

  en: [
    {
      key: 'origin',
      heading: 'Project origins',
      type: 'text',
      content: [
        'Spotlight was born from my passion for weight training and my desire to track my progress in a more intuitive, social, and personalized way.',
        'I couldn’t find any app that allowed me to plan workouts, log performances, and share them in a motivating environment—all in one place.',
        'So I built Spotlight as the tool I wished existed, with the ambition of making it a go-to platform for training enthusiasts.',
      ],
    },
    {
      key: 'tech',
      heading: 'Technologies & learnings',
      type: 'text',
      content: [
        'This project allowed me to deepen my skills with the React Native + Expo stack and design a robust and smooth mobile architecture.',
        'The backend is built with Next.js and Supabase (auth, database, file storage), ensuring scalability and secure session management.',
        'I also implemented Google authentication, push notifications, and offline persistence on the client side.',
      ],
    },
    {
      key: 'status',
      heading: 'Project status',
      type: 'text',
      content: [
        'Spotlight is currently in its testing phase.',
        'A public release on the App Store and Play Store is planned.',
        'This is a personal project, not tied to any company or revenue model at the moment.',
      ],
    },
    {
      key: 'structure',
      heading: 'Architecture & system design',
      type: 'group',
      content: [
        {
          key: 'intro',
          heading: '',
          type: 'text',
          content: ['Spotlight is based on two main components:'],
        },
        {
          key: 'app',
          heading: '1. Mobile app',
          type: 'text',
          content: [
            'Built with React Native and Expo. It handles core logic: workout creation, performance logging, social features, navigation and animations.',
          ],
        },
        {
          key: 'backend',
          heading: '2. Backend & database',
          type: 'text',
          content: [
            'Built with Next.js (hosted on Vercel) and powered by Supabase for data management, file storage, authentication, and secure sessions.',
          ],
        },
      ],
    },
    {
      key: 'security',
      heading: 'Security & persistence',
      type: 'text',
      content: [
        'User data is secured with Supabase, and sessions are protected using secure tokens.',
        'Local caching ensures data remains available even offline.',
      ],
    },
    {
      key: 'note',
      heading: 'Additional info',
      type: 'text',
      content: [
        'Spotlight is a collaborative project built with two friends.',
        'I’m in charge of all development aspects (mobile app, backend, database), while my teammates handle the UI/UX design.',
        'Their involvement is more occasional, so I ensure the project moves forward on a daily basis.',
        "I'm open to feedback and collaboration to help Spotlight evolve.",
      ],
    },
  ],
}
