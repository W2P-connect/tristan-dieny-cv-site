import CustomLink from '@/components/general/customLink/CustomLink'
import { ProjectContent } from '@/types'
import Link from 'next/link'

export const w2pProjectContent: ProjectContent = {
  fr: [
    {
      key: 'origin',
      heading: 'Origine du projet',
      type: 'text',
      content: [
        <p key="1">
          L’idée de W2P est née lors de mon expérience chez une entreprise spécialisée dans le
          chanvre (<CustomLink href={'/projects/llfc'}>voir l’expérience</CustomLink>).
        </p>,
        'Dans le cadre de la digitalisation des opérations commerciales, nous avions un besoin crucial : synchroniser les données de WooCommerce avec notre CRM, Pipedrive, afin de centraliser les informations et faciliter le suivi client.',
        'Aucune solution existante (Zapier, autres plugins) n’était suffisamment fiable ou adaptée. J’ai donc développé un plugin sur mesure pour le LLFC, répondant à ce besoin métier concret.',
        'Une fois mon expérience au LLFC terminée, j’ai transformé ce plugin en un produit réutilisable et commercialisable : W2P. J’ai bien entendu obtenu l’accord de mon employeur, et le produit final est entièrement distinct (aucune ligne de code n’a été reprise). Il n’y a donc eu aucun problème lié à la propriété intellectuelle.',
      ],
    },
    {
      key: 'tech',
      heading: 'Technologies & apprentissages',
      type: 'text',
      content: [
        'Ce projet m’a permis d’explorer des technologies modernes telles que Next.js, Tailwind CSS et TypeScript.',
        'J’ai également utilisé Supabase pour une gestion simplifiée des données et des sessions utilisateur, que j’ai couplé avec Prisma, un ORM extrêmement pratique en environnement TypeScript.',
        'Ce projet a renforcé mes compétences full-stack et m’a permis de mettre en place une architecture claire, robuste et scalable.',
      ],
      showTools: true,
    },
    {
      key: 'status',
      heading: 'Statut du projet',
      type: 'text',
      content: [
        'W2P est aujourd’hui en production, utilisé par plusieurs clients et génère des revenus récurrents.',
        'Le plugin a été accepté dans le catalogue officiel des extensions WordPress, ce qui atteste de sa conformité aux bonnes pratiques de sécurité et de développement.',
        'La phase de test est terminée et le système est stable. Je n’interviens plus que ponctuellement pour du support ou des évolutions mineures.',
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
            <p key="1">W2P se compose de deux entités indépendantes mais interconnectées :</p>,
            <ul key="2">
              <li>
                Le plugin installé chez le client, qui prétraite les requêtes à synchroniser avec
                Pipedrive.
              </li>
              <li>
                Le site <Link href={'https://woocommerce-to-pipedrive.com/'}>W2P</Link> qui
                réceptionne, valide, puis transmet les requêtes à Pipedrive. La réponse de l’API
                Pipedrive est ensuite renvoyée au plugin du client.
              </li>
            </ul>,
          ],
        },
        {
          key: 'plugin',
          heading: '1. Plugin client',
          type: 'text',
          content: [
            <>
              <p>Le plugin client est lui-même structuré en deux parties :</p>
              <ul>
                <li>
                  Un backend en PHP, qui capte les événements et données de WooCommerce et
                  WordPress.
                </li>
                <li>
                  Un frontend en React, permettant de configurer la synchronisation : champs à
                  transmettre, déclencheurs, etc.
                </li>
              </ul>
            </>,
          ],
        },
        {
          key: 'website',
          heading: '2. Site de validation (et gestion des abonnements)',
          type: 'text',
          content: [
            <>
              <p>Développé avec Next.js, le site gère deux aspects principaux :</p>
              <ul>
                <li>
                  La partie e-commerce : présentation de l’outil (fonctionnalités, avis, contact,
                  tutoriels), commande d’abonnements via Stripe, espace client avec accès aux
                  factures.
                </li>
                <li>
                  La vérification des abonnements : chaque requête envoyée par un plugin actif est
                  validée via Stripe avant d’être transmise à Pipedrive. Cela garantit que seuls les
                  clients abonnés peuvent utiliser l’API, tout en agissant comme proxy sécurisé.
                </li>
              </ul>
            </>,
          ],
        },
        {
          key: 'api',
          heading: 'Communication API',
          type: 'text',
          content: [
            'Les deux entités communiquent via une API REST : côté client pour recevoir les réponses de Pipedrive, et côté site W2P pour traiter les requêtes entrantes.',
            `Cette architecture introduit une certaine complexité liée à l’asynchronisme des échanges : des requêtes peuvent transiter entre le client, Pipedrive et le site W2P. 
          Chacune de ces entités peut être temporairement indisponible (maintenance, réseau, etc.). 
          Il faut donc mettre en place des systèmes de file d’attente ou de rétentions temporaires, tout en évitant de renvoyer indéfiniment les mêmes requêtes en cas d’erreur (ex : mauvaise configuration).`,
          ],
        },
      ],
    },
    {
      key: 'security',
      heading: 'Sécurité des données',
      type: 'text',
      content: [
        `Les clés API Pipedrive des clients ne sont jamais stockées sur mon serveur. 
      Elles sont chiffrées côté client et transmises temporairement à chaque requête, garantissant la confidentialité des données.`,
        `Les clés API W2P (utilisées pour communiquer avec le site de validation) sont, elles, stockées à la fois sur le serveur et sur le plugin client.
      Par sécurité, elles sont chiffrées dans les bases de données des deux côtés.`,
      ],
    },
    {
      key: 'note',
      heading: 'Informations complémentaires',
      type: 'text',
      content: [
        'W2P est exploité sous ma société **W2P** (SASU, SIREN : 929227171).',
        'Le code source du site W2P est privé, mais un accès peut être accordé sur demande. Aucune donnée sensible n’y est présente.',
        'Il m’a fallu environ un an entre la première ligne de code et la mise en production du projet (de janvier à décembre 2024). À noter que j’étais à temps plein au LLFC jusqu’au 30 juin, puis à mi-temps de juillet à novembre 2024.',
        `Ce projet témoigne de ma capacité à concevoir, structurer et maintenir un produit SaaS professionnel, sécurisé et commercialisé.
    Il m’a permis de consolider mes compétences full-stack, tout en mettant en place une architecture moderne, évolutive et maintenable — avec une vision à long terme.`,
      ],
    },
  ],

  en: [
    {
      key: 'origin',
      heading: 'Project Origin',
      type: 'text',
      content: [
        <p key="1">
          The idea behind W2P was born during my experience at a company specialized in hemp (
          <CustomLink href={'/projects/llfc'}>see experience</CustomLink>).
        </p>,
        'As part of the digitalization of our commercial operations, we had a crucial need: to synchronize data from WooCommerce with our CRM, Pipedrive, in order to centralize information and improve customer follow-up.',
        'No existing solution (Zapier or other plugins) was reliable or well-suited enough. So I developed a custom plugin for LLFC, tailored to meet this specific business need.',
        'Once my experience at LLFC ended, I turned this plugin into a reusable and marketable product: W2P. I obviously obtained approval from my employer, and the final product is entirely distinct (no code was reused). Therefore, there were no intellectual property concerns.',
      ],
    },
    {
      key: 'tech',
      heading: 'Technologies & Learnings',
      type: 'text',
      content: [
        'This project allowed me to explore modern technologies such as Next.js, Tailwind CSS, and TypeScript.',
        'I also used Supabase for simplified data and session management, which I combined with Prisma — an extremely practical ORM in a TypeScript environment.',
        'This experience strengthened my full-stack skills and allowed me to build a clear, robust, and scalable architecture.',
      ],
      showTools: true,
    },
    {
      key: 'status',
      heading: 'Project Status',
      type: 'text',
      content: [
        'W2P is currently live, used by several clients, and generates recurring revenue.',
        'The plugin has been accepted into the official WordPress plugin directory, which confirms its compliance with coding and security standards.',
        'The testing phase is over, and the system is stable. I now only intervene occasionally for support or minor improvements.',
      ],
    },
    {
      key: 'structure',
      heading: 'Architecture & Functioning',
      type: 'group',
      content: [
        {
          key: 'intro',
          heading: '',
          type: 'text',
          content: [
            <p key="1">W2P is made up of two independent but interconnected entities:</p>,
            <ul key="2">
              <li>
                The plugin installed on the client’s site, which pre-processes requests to be synced
                with Pipedrive.
              </li>
              <li>
                The <Link href={'https://woocommerce-to-pipedrive.com/'}>W2P website</Link>, which
                receives, validates, and forwards these requests to Pipedrive. The response from the
                Pipedrive API is then sent back to the client’s plugin.
              </li>
            </ul>,
          ],
        },
        {
          key: 'plugin',
          heading: '1. Client Plugin',
          type: 'text',
          content: [
            <>
              <p>The client plugin is structured in two parts:</p>
              <ul>
                <li>A PHP backend that captures WooCommerce and WordPress events and data.</li>
                <li>
                  A React frontend that allows configuration of synchronization settings: fields to
                  send, event triggers, etc.
                </li>
              </ul>
            </>,
          ],
        },
        {
          key: 'website',
          heading: '2. Validation Website (and Subscription Management)',
          type: 'text',
          content: [
            <>
              <p>Built with Next.js, the website handles two main aspects:</p>
              <ul>
                <li>
                  The e-commerce interface: showcasing the tool (features, reviews, contact,
                  tutorials), processing subscription payments via Stripe, and offering a customer
                  dashboard with access to invoices.
                </li>
                <li>
                  Subscription verification: each request sent by an active plugin is validated
                  through Stripe before being forwarded to Pipedrive. This ensures that only
                  subscribed users can access the API, while also acting as a secure proxy.
                </li>
              </ul>
            </>,
          ],
        },
        {
          key: 'api',
          heading: 'API Communication',
          type: 'text',
          content: [
            'The two entities communicate via a REST API: on the client side to receive Pipedrive responses, and on the W2P site to handle incoming requests.',
            `This architecture introduces some complexity due to asynchronous communication: requests may transit between the client, Pipedrive, and the W2P site.
          Each of these entities can temporarily be unavailable (maintenance, network, etc.).
          Therefore, systems must be in place to queue or temporarily store requests, while avoiding infinite retries in the case of misconfiguration.`,
          ],
        },
      ],
    },
    {
      key: 'security',
      heading: 'Data Security',
      type: 'text',
      content: [
        `Clients’ Pipedrive API keys are never stored on my server.
      They are encrypted on the client side and transmitted temporarily with each request, ensuring data confidentiality.`,
        `W2P API keys (used to communicate with the validation server) are stored both on my server and in the client’s plugin.
      For security, these keys are encrypted in both databases.`,
      ],
    },
    {
      key: 'note',
      heading: 'Additional Information',
      type: 'text',
      content: [
        'W2P is operated under my company **W2P** (SASU, SIREN: 929227171).',
        'The source code of the W2P website is private, but access can be granted upon request. No sensitive data is stored there.',
        'It took me about one year from the first line of code to production launch (from January to December 2024). I was working full-time at LLFC until June 30, then part-time from July to November.',
        `This project showcases my ability to design, structure, and maintain a professional, secure, and commercially viable SaaS product.
      It allowed me to consolidate my full-stack skills and implement a modern, scalable, and maintainable architecture — with a long-term vision.`,
      ],
    },
  ],
}
