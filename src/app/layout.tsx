import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import ScrollProgress from '@/components/ui/scroll-progress'
import { CommandPalette } from '@/components/ui/command-palette'
import { SoundProvider } from '@/components/sound-provider'
import { LanguageProvider } from '@/components/language-provider'
import { MotionProvider } from '@/components/motion-provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sofian-ezahery.dev'),
  title: 'Sofian Ez-ahery - DevOps',
  description:
    'Portfolio de Sofian Ez-ahery, Administrateur Systèmes & Réseaux spécialisé DevOps : CI/CD, cloud (AWS, Azure), conteneurisation, IaC et automatisation.',
  keywords: [
    'Sofian Ez-ahery',
    'DevOps',
    'Administrateur Systèmes et Réseaux',
    'Ingénieur DevOps',
    'SRE',
    'Cloud AWS Azure',
    'CI/CD',
    'Docker Kubernetes',
    'Terraform Ansible',
    'Next.js portfolio',
  ],
  authors: [{ name: 'Sofian Ez-ahery', url: 'https://github.com/sofian-ezahery' }],
  creator: 'Sofian Ez-ahery',
  alternates: {
    canonical: 'https://sofian-ezahery.dev',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sofian-ezahery.dev',
    title: 'Sofian Ez-ahery — Ingénieur DevOps',
    description:
      'Administrateur Systèmes & Réseaux spécialisé DevOps : automatisation CI/CD, cloud, conteneurisation et Infrastructure as Code.',
    siteName: 'Sofian Ez-ahery Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sofian Ez-ahery Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofian Ez-ahery — Ingénieur DevOps',
    description:
      'Administrateur Systèmes & Réseaux spécialisé DevOps : automatisation CI/CD, cloud, conteneurisation et Infrastructure as Code.',
    creator: '@sofian_ezahery',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sofian Ez-ahery',
  url: 'https://sofian-ezahery.dev',
  jobTitle: 'Ingénieur DevOps',
  sameAs: [
    'https://github.com/sofian-ezahery',
    'https://www.linkedin.com/in/sofian-ezahery/',
  ],
  image: 'https://sofian-ezahery.dev/sofian.jpg',
  email: 'sofian.ezahery0@icloud.com',
  telephone: '+33685574887',
  description:
    'Administrateur Systèmes & Réseaux spécialisé DevOps : CI/CD, cloud, conteneurisation, IaC et automatisation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground custom-scrollbar overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SoundProvider>
              <MotionProvider>
                <ScrollProgress />
                <CommandPalette />
                <Navbar />
                {children}
                <Footer />
              </MotionProvider>
            </SoundProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
