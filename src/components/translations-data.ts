export const extraTranslations = {
  fr: {
    experience: {
      teleperformance: {
        role: 'Administrateur Systèmes & Réseaux',
        location: 'Belfort, France',
        date: 'Oct 2023 - Oct 2025',
        description: '1 an en alternance (Technicien Informatique OpenClassrooms, RNCP niveau 5), puis 1 an en CDI. Administration et automatisation du parc informatique.',
        achievements: [
          'Déploiement & automatisation du parc informatique (Windows, réseaux, imprimantes, serveurs).',
          'Administration Active Directory, GPO et sécurité (conformité ISO 27001, RGPD).',
          'Automatisation via scripts PowerShell et Bash, gestion des incidents et support N1/N2.',
          'Contribution aux projets IT (migration, conformité) et rédaction de la documentation technique.'
        ]
      },
      bugbusters: {
        role: 'Technicien Informatique',
        location: 'Bourgogne-Franche-Comté, France',
        date: 'Mai 2023 - Oct 2023',
        description: "Déploiement et administration d'infrastructures IT, diagnostic avancé et gestion des incidents.",
        achievements: [
          'Déploiement IT, administration des réseaux et des équipements.',
          'Diagnostic avancé, gestion des incidents et documentation technique.'
        ]
      }
    },
    projects: {
      labels: {
        problem: 'Le problème',
        approach: "L'approche",
        infra: 'Infrastructure & Stack',
        outcome: 'Résultat',
        code: 'Code',
        live: 'Voir'
      }
    },
    blogs: {
      title: 'Articles',
      latest: 'Dernier',
      read: 'Lire',
      minRead: 'min de lecture',
      scaling: {
        title: 'Automatiser un déploiement avec un pipeline CI/CD',
        excerpt: "Comment mettre en place un pipeline CI/CD simple avec GitHub Actions pour automatiser les tests et le déploiement continu d'une application.",
        content: `Lors de mon projet QResto, j'ai voulu supprimer les déploiements manuels, sources d'erreurs et de perte de temps. J'ai donc mis en place un pipeline CI/CD avec GitHub Actions.\n\nLe principe est simple : à chaque push sur la branche principale, un workflow se déclenche. Il installe les dépendances, exécute les tests, construit l'application, puis la déploie automatiquement sur Vercel. Chaque étape est décrite dans un fichier YAML versionné avec le code.\n\nL'intérêt est double : on gagne en fiabilité (les tests bloquent les régressions avant la mise en production) et en rapidité (le déploiement passe de plusieurs minutes manuelles à un processus totalement automatisé).\n\nAu-delà de l'outil, la vraie valeur du CI/CD est culturelle : livrer petit, livrer souvent, et détecter les problèmes au plus tôt. C'est le socle de toute démarche DevOps.`
      },
      websockets: {
        title: 'Docker : conteneuriser une application pas à pas',
        excerpt: 'Les bases de la conteneurisation avec Docker : Dockerfile, images, conteneurs et bonnes pratiques pour un environnement reproductible.',
        content: `Docker résout un problème classique : « ça marche sur ma machine ». En empaquetant une application et ses dépendances dans un conteneur, on obtient un environnement identique du poste de développement jusqu'à la production.\n\nTout commence par un Dockerfile : on part d'une image de base légère, on copie le code, on installe les dépendances, puis on définit la commande de démarrage. À partir de ce fichier, on construit une image, qui devient un modèle réutilisable pour lancer autant de conteneurs que nécessaire.\n\nQuelques bonnes pratiques que j'applique : utiliser des images de base minimales, tirer parti du cache des couches en ordonnant bien les instructions, et adopter le multi-stage build pour réduire la taille finale de l'image.\n\nLa conteneurisation est la première marche vers l'orchestration avec Kubernetes, que j'explore actuellement.`
      },
      zerotrust: {
        title: 'Infrastructure as Code avec Terraform : premiers pas',
        excerpt: "Pourquoi et comment décrire son infrastructure cloud sous forme de code versionné, reproductible et automatisable avec Terraform.",
        content: `L'Infrastructure as Code (IaC) consiste à décrire ses ressources cloud dans des fichiers de configuration plutôt que de les créer manuellement via une console web. Terraform est l'un des outils de référence pour cela.\n\nLe fonctionnement repose sur des fichiers déclaratifs : on décrit l'état souhaité de l'infrastructure (serveurs, réseaux, bases de données), et Terraform calcule les actions nécessaires pour l'atteindre. La commande plan montre les changements avant de les appliquer, ce qui évite les mauvaises surprises.\n\nLes bénéfices sont concrets : l'infrastructure devient versionnée dans Git, reproductible à l'identique entre environnements, et documentée par le code lui-même. Fini les configurations « à la main » impossibles à retracer.\n\nJe continue à monter en compétence sur Terraform et Ansible pour automatiser de bout en bout le provisionnement et la configuration.`
      }
    }
  },
  en: {
    experience: {
      teleperformance: {
        role: 'Systems & Network Administrator',
        location: 'Belfort, France',
        date: 'Oct 2023 - Oct 2025',
        description: '1 year apprenticeship (IT Technician, OpenClassrooms, RNCP level 5), then 1 year on a permanent contract. IT fleet administration and automation.',
        achievements: [
          'Deployment & automation of the IT fleet (Windows, networks, printers, servers).',
          'Active Directory and GPO administration, security (ISO 27001, GDPR compliance).',
          'Automation with PowerShell and Bash scripts, incident management and N1/N2 support.',
          'Contribution to IT projects (migration, compliance) and technical documentation.'
        ]
      },
      bugbusters: {
        role: 'IT Technician',
        location: 'Bourgogne-Franche-Comté, France',
        date: 'May 2023 - Oct 2023',
        description: 'IT infrastructure deployment and administration, advanced diagnostics and incident management.',
        achievements: [
          'IT deployment, network and equipment administration.',
          'Advanced diagnostics, incident management and technical documentation.'
        ]
      }
    },
    projects: {
      labels: {
        problem: 'The Problem',
        approach: 'The Approach',
        infra: 'Infrastructure & Stack',
        outcome: 'Outcome',
        code: 'Code',
        live: 'Visit'
      }
    },
    blogs: {
      title: 'Articles',
      latest: 'Latest',
      read: 'Read',
      minRead: 'min read',
      scaling: {
        title: 'Automating deployment with a CI/CD pipeline',
        excerpt: 'How to set up a simple CI/CD pipeline with GitHub Actions to automate testing and continuous deployment of an application.',
        content: `On my QResto project, I wanted to remove manual deployments, a source of errors and wasted time. So I set up a CI/CD pipeline with GitHub Actions.\n\nThe idea is simple: on every push to the main branch, a workflow triggers. It installs dependencies, runs the tests, builds the application, then deploys it automatically to Vercel. Each step is described in a YAML file versioned alongside the code.\n\nThe benefit is twofold: more reliability (tests block regressions before production) and more speed (deployment goes from several manual minutes to a fully automated process).\n\nBeyond the tooling, the real value of CI/CD is cultural: ship small, ship often, and catch issues as early as possible. It is the foundation of any DevOps approach.`
      },
      websockets: {
        title: 'Docker: containerizing an application step by step',
        excerpt: 'The basics of containerization with Docker: Dockerfile, images, containers and best practices for a reproducible environment.',
        content: `Docker solves a classic problem: "it works on my machine". By packaging an application and its dependencies into a container, you get an identical environment from the developer workstation all the way to production.\n\nIt all starts with a Dockerfile: you begin from a lightweight base image, copy the code, install dependencies, then define the startup command. From this file you build an image, which becomes a reusable blueprint to launch as many containers as needed.\n\nA few best practices I apply: use minimal base images, leverage layer caching by ordering instructions well, and adopt multi-stage builds to reduce the final image size.\n\nContainerization is the first step toward orchestration with Kubernetes, which I am currently exploring.`
      },
      zerotrust: {
        title: 'Infrastructure as Code with Terraform: getting started',
        excerpt: 'Why and how to describe your cloud infrastructure as versioned, reproducible and automatable code with Terraform.',
        content: `Infrastructure as Code (IaC) means describing your cloud resources in configuration files rather than creating them manually through a web console. Terraform is one of the reference tools for this.\n\nIt works with declarative files: you describe the desired state of the infrastructure (servers, networks, databases), and Terraform computes the actions needed to reach it. The plan command shows the changes before applying them, which avoids nasty surprises.\n\nThe benefits are concrete: infrastructure becomes versioned in Git, reproducible identically across environments, and documented by the code itself. No more untraceable "by hand" configurations.\n\nI keep growing my skills on Terraform and Ansible to automate provisioning and configuration end to end.`
      }
    }
  }
}
