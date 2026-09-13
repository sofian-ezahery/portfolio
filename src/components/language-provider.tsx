'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { extraTranslations } from './translations-data'

export type Language = 'fr' | 'en'

type TranslationDict = {
  nav: {
    about: string
    experience: string
    projects: string
    blogs: string
    contact: string
  }
  hero: {
    title: string
    description: string
    ctaTouch: string
    ctaResume: string
    powerOn: string
    powerOff: string
    location: string
    name: string
  }
  skills: {
    title: string
  }
  experience: {
    title: string
  }
  projects: {
    title: string
    taglines: {
      snappy: string
      deeptab: string
      shopxindia: string
      socialpedia: string
    }
  }
  resume: {
    title: string
    subtitle: string
    download: string
    view: string
  }
  contact: {
    title: string
    heading: string
    subtitle: string
    name: string
    email: string
    subject: string
    message: string
    send: string
    sending: string
    success: string
    error: string
  }
  contributions: {
    title: string
    totalCount: string
    loading: string
  }
  commandPalette: {
    searchPlaceholder: string
    langFrTitle: string
    langFrSubtitle: string
    langEnTitle: string
    langEnSubtitle: string
  }
  extra: typeof extraTranslations.fr
}

const translations: Record<Language, TranslationDict> = {
  fr: {
    nav: {
      about: 'profil',
      experience: 'expérience',
      projects: 'projets',
      blogs: 'articles',
      contact: 'contact',
    },
    hero: {
      title: 'Ingénieur DevOps / SRE',
      description: 'Administrateur Systèmes & Réseaux spécialisé DevOps : automatisation CI/CD, cloud (AWS, Azure), conteneurisation et Infrastructure as Code. Passionné par la transformation IT et l\'optimisation continue.',
      ctaTouch: 'Me contacter',
      ctaResume: 'Voir le CV',
      powerOn: 'Système : ON',
      powerOff: 'Système : OFF',
      location: 'Belfort, France 90000',
      name: 'Sofian Ez-ahery',
    },
    skills: {
      title: 'Compétences & Stack Technique',
    },
    experience: {
      title: 'Expérience Professionnelle',
    },
    projects: {
      title: 'Projets',
      taglines: {
        snappy: 'Plateforme SaaS de commande en ligne avec système de QR code.',
        deeptab: 'Application de gestion de véhicule sur cluster Kubernetes HA opéré en GitOps.',
        shopxindia: 'Infrastructure cloud-native automatisée et sécurisée.',
        socialpedia: 'Système de commande optimisé réduisant le temps de traitement de 50%.',
      },
    },
    resume: {
      title: 'Mon CV',
      subtitle: 'Consultez ou téléchargez mon CV professionnel complet.',
      download: 'Télécharger le PDF',
      view: 'Plein écran',
    },
    contact: {
      title: 'Me Contacter',
      heading: 'Construisons quelque chose ensemble',
      subtitle: 'Une question ou envie de collaborer ? Laissez-moi un message et je vous répondrai.',
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès !',
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
    contributions: {
      title: 'Contributions',
      totalCount: 'contributions sur la dernière année',
      loading: 'Chargement...',
    },
    commandPalette: {
      searchPlaceholder: 'Rechercher une section ou une action…',
      langFrTitle: 'Passer en français',
      langFrSubtitle: 'Mode français',
      langEnTitle: 'Switch to English',
      langEnSubtitle: 'English language mode',
    },
    extra: extraTranslations.fr,
  },
  en: {
    nav: {
      about: 'profile',
      experience: 'experience',
      projects: 'projects',
      blogs: 'articles',
      contact: 'contact',
    },
    hero: {
      title: 'DevOps / SRE Engineer',
      description: 'Systems & Network Administrator specialized in DevOps: CI/CD automation, cloud (AWS, Azure), containerization and Infrastructure as Code. Passionate about IT transformation and continuous improvement.',
      ctaTouch: 'Get in Touch',
      ctaResume: 'View Resume',
      powerOn: 'System: ON',
      powerOff: 'System: OFF',
      location: 'Belfort, France 90000',
      name: 'Sofian Ez-ahery',
    },
    skills: {
      title: 'Skills & Tech Stack',
    },
    experience: {
      title: 'Work Experience',
    },
    projects: {
      title: 'Projects',
      taglines: {
        snappy: 'SaaS online ordering platform with a QR code system.',
        deeptab: 'Vehicle management app on a HA Kubernetes cluster operated with GitOps.',
        shopxindia: 'Automated and secured cloud-native infrastructure.',
        socialpedia: 'Optimized ordering system cutting processing time by 50%.',
      },
    },
    resume: {
      title: 'My Resume',
      subtitle: 'View or download my full professional resume.',
      download: 'Download PDF',
      view: 'Full Screen',
    },
    contact: {
      title: 'Get In Touch',
      heading: "Let's Build Something Together",
      subtitle: "Have a question or want to work together? Drop a message and I'll get back to you.",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
    },
    contributions: {
      title: 'Contributions',
      totalCount: 'contributions in the last year',
      loading: 'Loading...',
    },
    commandPalette: {
      searchPlaceholder: 'Search for a section or action…',
      langFrTitle: 'Passer en français',
      langFrSubtitle: 'French language mode',
      langEnTitle: 'Switch to English',
      langEnSubtitle: 'English language mode',
    },
    extra: extraTranslations.en,
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationDict
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')

  // Load language preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('language_pref') as Language
    if (saved === 'fr' || saved === 'en') {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language_pref', lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
