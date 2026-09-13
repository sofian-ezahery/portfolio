# 👋 Bonjour, je suis Sofian Ez-ahery

**_`DevOps`_ · _`SRE`_ · _`Administrateur Systèmes & Réseaux`_ · _`Cloud`_ · _`Automatisation`_**

> _Automatiser, fiabiliser et faire évoluer l'infrastructure._

## À propos

Administrateur Systèmes & Réseaux en certification RNCP niveau 6, spécialisé **DevOps** : automatisation (CI/CD), cloud (**AWS**, **Azure**), virtualisation (VMware, Hyper-V), conteneurisation (**Docker**, **Kubernetes**), Infrastructure as Code (**Terraform**, **Ansible**) et sécurité (ISO 27001, RGPD).

Fort d'une expérience en gestion de projets IT, support N1/N2, digitalisation et optimisation continue, je suis passionné par la transformation IT. Mon ambition : évoluer vers des rôles **DevOps**, **Cloud** ou **SRE**.

## 🎓 Formation

- **DataScientest** — Diplôme d'ingénieur DevOps (RNCP niveau 6) · _En cours_
- **OpenClassrooms** — Technicien Informatique (RNCP niveau 5) · _Octobre 2024_
- **Lycée Luxembourg (Vesoul)** — Baccalauréat professionnel MEI · _Juin 2017_

## 💼 Expérience

- **Teleperformance France** — Administrateur Systèmes & Réseaux · _Oct 2023 – Oct 2025_
- **Bugbusters Group** — Technicien Informatique · _Mai 2023 – Oct 2023_

## 🚀 Projet

**QResto** — Plateforme SaaS de commande en ligne (Next.js, DevOps / SRE) : application web full-stack déployée sur une infrastructure cloud-native avec pipeline CI/CD automatisé (Vercel) et monitoring (Sentry). Réduction du temps de traitement des commandes de 50%.

## 🛠️ Stack technique

| Domaine | Technologies |
|---|---|
| Systèmes & Réseaux | Windows Server, Linux (Debian/Ubuntu) |
| Cloud & Virtualisation | AWS, Azure, VMware, Hyper-V |
| Automatisation & IaC | Bash, PowerShell, Ansible, Terraform |
| Conteneurisation | Docker, Kubernetes |
| CI/CD | GitHub Actions, GitLab CI, Jenkins |
| Monitoring | Grafana, Prometheus, Sentry |
| Bases de données | MySQL, PostgreSQL, MongoDB, Redis |
| Outils | Git, GitHub |

## 🌍 Langues

- **Français** : Natif
- **Anglais** : A2 (formation Wall Street English, 13 mois)

## 📫 Me contacter

- Email : sofian.ezahery0@icloud.com
- LinkedIn : [sofian-ezahery](https://www.linkedin.com/in/sofian-ezahery/)
- Téléphone : +33 6 85 57 48 87

---

## Développement local

Ce portfolio est construit avec [Next.js](https://nextjs.org).

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement
npm run build    # build de production
npm run lint     # analyse statique
```

### Variables d'environnement

Copie `.env.example` en `.env.local` puis renseigne les valeurs. Ce fichier est ignoré par git.

### Contributions GitHub (privées incluses)

La section « Contributions » affiche le calendrier GitHub via l'API GraphQL, ce qui inclut les contributions des dépôts privés (contrairement aux API publiques).

Pour l'activer, il faut un token GitHub en lecture seule :

1. Va sur https://github.com/settings/tokens
2. Génère un **Fine-grained token** (ou un token classique) :
   - Fine-grained : accès en lecture seule, permission « Read » sur ton profil suffit pour le calendrier.
   - Classic : coche uniquement le scope `read:user`.
3. Copie le token et colle-le dans `.env.local` :
   ```
   GITHUB_TOKEN=ton_token_ici
   ```
4. Active aussi sur ton profil GitHub : Settings → Public profile → **Include private contributions on my profile**.
5. Redémarre le serveur (`npm run dev`).

En production (Vercel/Cloudflare), ajoute `GITHUB_TOKEN` dans les variables d'environnement du projet.
