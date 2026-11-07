'use client'

import { FC } from 'react'
import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { certificationsData, Certification } from '@/constants'
import { useLanguage } from '@/components/language-provider'
import SectionWrapper from '@/components/ui/section-wrapper'

export const Certifications: FC = () => {
  const { t, language } = useLanguage()

  return (
    <SectionWrapper id="certifications" title={t.certifications.title} code="0x05">
      <div className="px-6 pb-10 pt-8">
        <div className="space-y-0 border-b border-border">
          {certificationsData.map((cert: Certification, idx: number) => (
            <div
              key={cert.examCode}
              className={`py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-muted/10 transition-colors duration-200 ${idx === 0 ? '' : 'border-t border-border'}`}
            >
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-md shrink-0 mt-0.5 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://skillicons.dev/icons?i=${cert.icon}`}
                    alt={cert.issuer}
                    className="size-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {cert.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-medium uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/25">
                      <BadgeCheck className="h-3 w-3" />
                      {cert.examCode}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    {cert.issuer} • {t.certifications.level}
                  </p>
                  <p className="font-mono text-[11px] text-muted-foreground/70 mt-1">
                    {t.certifications.issued} {cert.issued[language]} · {t.certifications.expires}{' '}
                    {cert.expires[language]}
                  </p>
                </div>
              </div>

              {/* Blueprint-style link cell, same look as the project links */}
              <a
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold text-brand-blue hover:bg-brand-blue/[0.07] transition-colors duration-200"
              >
                <span>{t.certifications.verify}</span>
                <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Certifications
