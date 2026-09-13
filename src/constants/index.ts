export interface Experience {
  id: number
  role: string
  company: string
  location: string
  date: string
  description: string
  achievements: string[]
  tags: string[]
  translationKey?: string
}

export const experienceData: Experience[] = [
  {
    id: 0,
    role: 'Administrateur Systèmes & Réseaux',
    company: 'Teleperformance France',
    location: 'Belfort, France',
    date: 'Oct 2023 - Oct 2025',
    description:
      "1 an en alternance dans le cadre de la formation Technicien Informatique OpenClassrooms (RNCP niveau 5), puis 1 an en CDI. Administration et automatisation du parc informatique.",
    achievements: [
      'Déploiement & automatisation du parc informatique (Windows, réseaux, imprimantes, serveurs).',
      'Administration Active Directory, GPO et sécurité (conformité ISO 27001, RGPD).',
      'Automatisation via scripts PowerShell et Bash, gestion des incidents et support N1/N2.',
      'Contribution aux projets IT (migration, conformité) et rédaction de la documentation technique.',
    ],
    tags: ['Windows Server', 'Active Directory', 'PowerShell', 'Bash', 'ISO 27001', 'RGPD'],
  },
  {
    id: 1,
    role: 'Technicien Informatique',
    company: 'Bugbusters Group',
    location: 'Bourgogne-Franche-Comté, France',
    date: 'Mai 2023 - Oct 2023',
    description:
      "Déploiement et administration d'infrastructures IT, diagnostic avancé et gestion des incidents.",
    achievements: [
      'Déploiement IT, administration des réseaux et des équipements.',
      'Diagnostic avancé, gestion des incidents et documentation technique.',
    ],
    tags: ['Réseaux', 'Support IT', 'Diagnostic', 'Documentation'],
  },
]

export interface Project {
  title: string
  description: string
  date: string
  problem: string
  approach: string
  infra: string
  challenge: string
  outcome: string
  github: string
  live: string
  tags: string[]
}

export const projectsData: Project[] = [
  {
    title: 'Autopilot',
    description: 'Application de gestion intelligente de véhicule (Next.js + mobile) déployée sur un cluster Kubernetes HA auto-hébergé, provisionné et opéré en GitOps.',
    date: '03.2026',
    problem: 'Déployer une application full-stack sur une infrastructure bare-metal fiable et hautement disponible, sans dépendre d\'un cloud managé, tout en gardant un déploiement reproductible et automatisé.',
    approach: 'Provisionnement de 5 VMs Ubuntu sur Proxmox avec Terraform (HCL, Cloud-Init), configuration via Ansible (Keepalived, K3s), et déploiement continu en GitOps avec ArgoCD (App of Apps) et Kustomize.',
    infra: 'Proxmox · Terraform · Ansible · K3s HA (etcd/Raft) · ArgoCD (GitOps) · MetalLB · Ingress Nginx · Cert-Manager · Prometheus · Grafana · Loki · Velero · HPA · Docker',
    challenge: 'Mettre en place la haute disponibilité du control-plane (quorum etcd sur 3 masters, IP virtuelle Keepalived) et fiabiliser le déploiement Helm/Kustomize dans ArgoCD.',
    outcome: 'Cluster K3s hautement disponible auto-géré : montée en charge automatique (HPA jusqu\'à 10 pods), certificats SSL automatisés, supervision Prometheus/Grafana/Loki et sauvegardes Velero.',
    github: 'https://github.com/sofian-ezahery/Autopilot',
    live: 'https://autopilot.ovh/',
    tags: ['Terraform', 'Ansible', 'Kubernetes', 'ArgoCD', 'Docker', 'Prometheus', 'Grafana', 'Next.js'],
  },
  {
    title: 'QResto',
    description: 'Plateforme SaaS de commande en ligne avec système de QR code, déployée sur une infrastructure cloud-native.',
    date: '12.2025',
    problem: 'Les restaurants ont besoin d\'un système de commande rapide et sans contact, réduisant le temps de traitement et la charge du personnel.',
    approach: 'Développement d\'une application web full-stack (No-Code) de commande en ligne avec génération de QR codes, déployée avec un pipeline CI/CD automatisé.',
    infra: 'Next.js · Vercel · CI/CD · Sentry (monitoring) · QR Code',
    challenge: 'Automatiser le déploiement, garantir la fiabilité de l\'infrastructure et mettre en place un monitoring efficace tout en sécurisant la plateforme.',
    outcome: 'Réduction du temps de traitement des commandes de 50%, avec une infrastructure cloud-native automatisée, monitorée via Sentry et sécurisée.',
    github: 'https://github.com/sofian-ezahery',
    live: 'https://qresto-one.vercel.app/',
    tags: ['Next.js', 'Vercel', 'CI/CD', 'Sentry', 'DevOps', 'SRE'],
  },
]

export interface Blog {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
}

export const blogsData: Blog[] = [
  {
    id: 1,
    title: 'Automatiser un déploiement avec un pipeline CI/CD',
    excerpt: 'Comment mettre en place un pipeline CI/CD simple avec GitHub Actions pour automatiser les tests et le déploiement continu d\'une application.',
    date: '11.2025',
    content: `Lors de mon projet QResto, j'ai voulu supprimer les déploiements manuels, sources d'erreurs et de perte de temps. J'ai donc mis en place un pipeline CI/CD avec GitHub Actions.\n\nLe principe est simple : à chaque push sur la branche principale, un workflow se déclenche. Il installe les dépendances, exécute les tests, construit l'application, puis la déploie automatiquement sur Vercel. Chaque étape est décrite dans un fichier YAML versionné avec le code.\n\nL'intérêt est double : on gagne en fiabilité (les tests bloquent les régressions avant la mise en production) et en rapidité (le déploiement passe de plusieurs minutes manuelles à un processus totalement automatisé).\n\nAu-delà de l'outil, la vraie valeur du CI/CD est culturelle : livrer petit, livrer souvent, et détecter les problèmes au plus tôt. C'est le socle de toute démarche DevOps.`,
  },
  {
    id: 2,
    title: 'Docker : conteneuriser une application pas à pas',
    excerpt: 'Les bases de la conteneurisation avec Docker : Dockerfile, images, conteneurs et bonnes pratiques pour un environnement reproductible.',
    date: '09.2025',
    content: `Docker résout un problème classique : « ça marche sur ma machine ». En empaquetant une application et ses dépendances dans un conteneur, on obtient un environnement identique du poste de développement jusqu'à la production.\n\nTout commence par un Dockerfile : on part d'une image de base légère, on copie le code, on installe les dépendances, puis on définit la commande de démarrage. À partir de ce fichier, on construit une image, qui devient un modèle réutilisable pour lancer autant de conteneurs que nécessaire.\n\nQuelques bonnes pratiques que j'applique : utiliser des images de base minimales, tirer parti du cache des couches en ordonnant bien les instructions, et adopter le multi-stage build pour réduire la taille finale de l'image.\n\nLa conteneurisation est la première marche vers l'orchestration avec Kubernetes, que j'explore actuellement.`,
  },
  {
    id: 3,
    title: 'Infrastructure as Code avec Terraform : premiers pas',
    excerpt: 'Pourquoi et comment décrire son infrastructure cloud sous forme de code versionné, reproductible et automatisable avec Terraform.',
    date: '07.2025',
    content: `L'Infrastructure as Code (IaC) consiste à décrire ses ressources cloud dans des fichiers de configuration plutôt que de les créer manuellement via une console web. Terraform est l'un des outils de référence pour cela.\n\nLe fonctionnement repose sur des fichiers déclaratifs : on décrit l'état souhaité de l'infrastructure (serveurs, réseaux, bases de données), et Terraform calcule les actions nécessaires pour l'atteindre. La commande plan montre les changements avant de les appliquer, ce qui évite les mauvaises surprises.\n\nLes bénéfices sont concrets : l'infrastructure devient versionnée dans Git, reproductible à l'identique entre environnements, et documentée par le code lui-même. Fini les configurations « à la main » impossibles à retracer.\n\nJe continue à monter en compétence sur Terraform et Ansible pour automatiser de bout en bout le provisionnement et la configuration.`,
  },
]
