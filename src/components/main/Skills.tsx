'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { useLanguage } from '@/components/language-provider'
import SectionWrapper from '@/components/ui/section-wrapper'

const SKILLS_LIST =
  'linux,windows,bash,powershell,python,ansible,terraform,docker,kubernetes,aws,azure,githubactions,gitlab,jenkins,grafana,prometheus,git,github,mysql,postgres,mongodb,redis,nginx,vscode'

// Curated core stack on mobile (16 = 2 rows of 8) so each icon renders larger
const SKILLS_LIST_MOBILE =
  'linux,bash,powershell,python,ansible,terraform,docker,kubernetes,aws,azure,githubactions,jenkins,grafana,prometheus,git,mysql'

const SKILLICONS_URL_MOBILE = `https://skillicons.dev/icons?i=${SKILLS_LIST_MOBILE}&perline=8`
const SKILLICONS_URL_DESKTOP = `https://skillicons.dev/icons?i=${SKILLS_LIST}&perline=12`

export const Skills: FC = () => {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="skills" title={t.skills.title} code="0x01">
      <div className="px-6 pb-10 pt-8">
        {/* Skillicons strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SKILLICONS_URL_MOBILE}
            alt="Tech Stack"
            width="100%"
            className="block min-[880px]:hidden w-full h-auto"
            loading="lazy"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SKILLICONS_URL_DESKTOP}
            alt="Tech Stack"
            width="100%"
            className="hidden min-[880px]:block w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Skills
