import CustomLink from '@/components/general/customLink/CustomLink'
import { ProjectContent } from '@/types'

export const spotlightProjectContent: ProjectContent = {
  fr: [
    {
      key: 'origin',
      heading: 'Origine du projet',
      type: 'text',
      content: [
        'Spotlight est né de ma passion pour la musculation et de mon envie de suivre mes progrès de manière plus intuitive, sociale et personnalisée.',
        'Je n’ai trouvé aucune application satisfaisante qui me permette à la fois de programmer mes entraînements, d’enregistrer mes performances et de les partager dans un environnement stimulant.',
        'Spotlight a donc été pensé comme l’outil que j’aurais aimé avoir en tant qu’utilisateur, avec l’ambition d’en faire une plateforme de référence pour les passionnés de training français.',
      ],
    },
    {
      key: 'tech',
      heading: 'Technologies & apprentissages',
      type: 'text',
      content: [
        <p key="1">
          Spotlight m’a permis d’approfondir mes compétences sur Next JS, Tailwind CSS et
          TypeScript. Fort de mon projet avec{' '}
          <CustomLink newTab href="/projects/w2p">
            W2P
          </CustomLink>
          , j’i également réutilisé supabase et prisma pour la gestion des données et des sessions.
        </p>,
        'J’en ai profité pour découvrir l’écosystème React Native avec Expo, et concevoir une architecture mobile robuste et fluide.',
        'Le backend s’appuie sur Next.js et Supabase pour assurer la scalabilité, la sécurité des sessions et une API performante.',
        'J’ai aussi implémenté des fonctionnalités comme l’authentification Google, les notifications push, et la persistance des données locales dans l’application.',
      ],
      showTools: true,
    },
    {
      key: 'status',
      heading: 'Statut du projet',
      type: 'text',
      content: [
        '(juillet 2025) Spotlight est actuellement en phase de test auprès d’une petite dizaine d’utilisateurs. De nombreuses fonctionnalités restent à implémenter et plusieurs bugs doivent encore être corrigés.',
        'Je vise une première publication sur l’App Store et le Play Store d’ici fin 2025.',
        'Le projet est à ce jour personnel, sans modèle économique ni structure juridique associée. Il n’est donc pas prioritaire par rapport à ma recherche d’emploi actuelle.',
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
          content: [
            'Comme la plupart des applications modernes, Spotlight repose sur deux grandes briques : une application mobile (côté client) et une infrastructure backend pour la gestion des données et des utilisateurs.',
          ],
        },
        {
          key: 'app',
          heading: '1. Application mobile',
          type: 'text',
          content: [
            "Développée en React Native avec Expo, l'application mobile embarque toute la logique métier : création de séances, enregistrement des performances, navigation, interactions sociales, etc.",
            'L’architecture front-end est pensée pour fonctionner principalement en client-only : la majorité des traitements se fait côté client, avec des échanges réseau asynchrones. Seules les fonctionnalités sociales (commentaires, abonnements, likes...) nécessitent une communication syncrone avec le serveur.',
            'L’authentification est gérée par Supabase. Lorsqu’un utilisateur se connecte, un token de session est stocké localement et automatiquement inclus dans les en-têtes des requêtes HTTP, assurant une authentification sécurisée à chaque appel au backend.',
          ],
        },
        {
          key: 'backend',
          heading: '2. Backend & base de données',
          type: 'text',
          content: [
            'Le backend est développé en Next.js et déployé sur Vercel. Il agit comme une API REST/Edge Functions dédiée à la gestion des utilisateurs, des performances, des séances d’entraînement et des interactions sociales (notifications push).',
            'Supabase est utilisé comme backend-as-a-service : il fournit une base de données PostgreSQL, une couche d’authentification sécurisée, ainsi qu’un système de stockage de fichiers pour les éventuels contenus multimédias (avatars, miniatures, etc.).',
            'J’utilise Prisma comme ORM, ce qui permet une modélisation typée et robuste des données, tout en facilitant la maintenance et l’évolution du schéma de la base.',
            'L’ensemble des appels côté mobile vers le backend est pensé pour être résilient et non-bloquant, avec une gestion granulaire des erreurs.',
          ],
        },
      ],
    },
    {
      key: 'security',
      heading: 'Sécurité & persistance',
      type: 'text',
      content: [
        'L’authentification et la gestion des sessions sont assurées par Supabase, qui génère un token sécurisé stocké localement sur l’appareil. Ce token est automatiquement transmis dans les requêtes HTTP, garantissant un accès protégé aux données utilisateur.',
        'Des règles de sécurité (RLS) sont activées au niveau de la base de données, empêchant tout accès non autorisé aux données, même en cas de tentative directe sur l’API.',
        'L’application utilise également un système de cache local (via MMKV) pour assurer la persistance des données essentielles en mode hors-ligne. Cela permet à l’utilisateur de continuer à interagir avec l’application, même sans connexion internet.',
      ],
    },
    {
      key: 'note',
      heading: 'Informations complémentaires',
      type: 'text',
      content: [
        'Spotlight est un projet collaboratif que je développe avec deux amis.',
        'Je suis responsable de toute la partie technique : développement mobile, backend et base de données. Mes coéquipiers se concentrent principalement sur l’UI/UX et l’expérience utilisateur.',
        'Le projet reste à ce jour davantage une aventure passion qu’un produit commercial. Je reste néanmoins ouvert aux retours, suggestions ou opportunités de collaboration pour faire évoluer Spotlight dans la bonne direction.',
      ],
    },
  ],

  en: [
    {
      key: 'origin',
      heading: 'Project origin',
      type: 'text',
      content: [
        'Spotlight was born out of my passion for weight training and my desire to track my progress in a more intuitive, social, and personalized way.',
        'I couldn’t find any satisfying app that would let me both plan my workouts, log my performance, and share it in a motivating environment.',
        'Spotlight was therefore designed as the tool I would have liked to use as a user, with the ambition of becoming a go-to platform for French fitness enthusiasts.',
      ],
    },
    {
      key: 'tech',
      heading: 'Technologies & learnings',
      type: 'text',
      content: [
        <p key={1}>
          Spotlight allowed me to deepen my skills in Next JS, Tailwind CSS, and TypeScript.
          Building on my work with{' '}
          <CustomLink newTab href="/projects/w2p">
            W2P
          </CustomLink>
          , I also reused Supabase and Prisma to manage data and sessions.
        </p>,
        'I took this opportunity to explore the React Native ecosystem with Expo and design a robust and fluid mobile architecture.',
        'The backend relies on Next.js and Supabase to ensure scalability, secure sessions, and a performant API.',
        'I also implemented features like Google authentication, push notifications, and local data persistence within the app.',
      ],
      showTools: true,
    },
    {
      key: 'status',
      heading: 'Project status',
      type: 'text',
      content: [
        '(July 2025) Spotlight is currently in a testing phase with around ten users. Many features still need to be implemented, and several bugs remain to be fixed.',
        'I’m aiming for a first release on the App Store and Play Store by the end of 2025.',
        'The project is currently personal, with no business model or legal structure attached. As such, it is not a priority compared to my current job search.',
      ],
    },
    {
      key: 'structure',
      heading: 'Architecture & operation',
      type: 'group',
      content: [
        {
          key: 'intro',
          heading: '',
          type: 'text',
          content: [
            'Like most modern apps, Spotlight is built on two main pillars: a mobile application (client side) and a backend infrastructure for data and user management.',
          ],
        },
        {
          key: 'app',
          heading: '1. Mobile application',
          type: 'text',
          content: [
            'Built with React Native and Expo, the mobile app handles all the business logic: workout creation, performance tracking, navigation, social interactions, etc.',
            'The frontend architecture is designed to work mostly in a client-only mode: most processing happens on the client side, with asynchronous network calls. Only social features (comments, followers, likes...) require synchronous communication with the server.',
            'Authentication is handled by Supabase. When a user logs in, a session token is stored locally and automatically included in HTTP headers, ensuring secure authentication for each backend request.',
          ],
        },
        {
          key: 'backend',
          heading: '2. Backend & database',
          type: 'text',
          content: [
            'The backend is built with Next.js and deployed on Vercel. It acts as a REST API/Edge Functions service handling users, performances, workouts, and social interactions (push notifications).',
            'Supabase is used as a backend-as-a-service: it provides a PostgreSQL database, a secure authentication layer, and a file storage system for optional media content (avatars, thumbnails, etc.).',
            'I use Prisma as the ORM, which enables strongly typed and robust data modeling, while making schema maintenance and evolution easier.',
            'All mobile-to-backend requests are designed to be resilient and non-blocking, with granular error handling.',
          ],
        },
      ],
    },
    {
      key: 'security',
      heading: 'Security & persistence',
      type: 'text',
      content: [
        'Authentication and session management are handled by Supabase, which generates a secure token stored locally on the device. This token is automatically sent with HTTP requests, ensuring protected access to user data.',
        'Row-Level Security (RLS) rules are enabled at the database level, preventing unauthorized access to data, even in case of direct API calls.',
        'The app also uses a local caching system (via MMKV) to persist key data offline. This allows users to continue using the app even without an internet connection.',
      ],
    },
    {
      key: 'note',
      heading: 'Additional information',
      type: 'text',
      content: [
        'Spotlight is a collaborative project I’m building with two friends.',
        'I’m responsible for the entire technical stack: mobile development, backend, and database. My teammates focus mainly on UI/UX and user experience.',
        'The project is still more of a passion-driven adventure than a commercial product. That said, I remain open to feedback, suggestions, or collaboration opportunities to help Spotlight evolve in the right direction.',
      ],
    },
  ],
}
