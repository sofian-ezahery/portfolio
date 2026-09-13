'use client'

import React, { useEffect, useState } from 'react'
import { ActivityCalendar, type Activity, type ThemeInput } from 'react-activity-calendar'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'

import SectionWrapper from '@/components/ui/section-wrapper'

// GitHub-green contribution ramp (5 levels: empty -> densest).
const RAMP: ThemeInput = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
}

interface ContributionsResponse {
  total: number
  contributions: Activity[]
}

export const GithubActivity: React.FC = () => {
  const { theme } = useTheme()
  const [data, setData] = useState<Activity[] | null>(null)
  const [total, setTotal] = useState<number | null>(null)
  const [error, setError] = useState(false)
  const { t } = useLanguage()

  const scheme = theme === 'dark' ? 'dark' : 'light'
  const swatches = (scheme === 'dark' ? RAMP.dark : RAMP.light) ?? RAMP.light!

  useEffect(() => {
    let cancelled = false

    fetch('/api/contributions')
      .then((res) => {
        if (!res.ok) throw new Error('request failed')
        return res.json() as Promise<ContributionsResponse>
      })
      .then((json) => {
        if (cancelled) return
        setData(json.contributions)
        setTotal(json.total)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <SectionWrapper id="github-activity" title={t.contributions.title} code="0x02">
      <div className="px-6 pb-10 pt-8">
        <div className="w-full">
          {/* Grid: natural-size + hidden-scrollbar scroll on mobile; scales to fit on desktop */}
          <div className="w-full overflow-x-auto scrollbar-hide">
            {error ? (
              <div className="text-destructive font-mono text-xs py-6">
                [ERROR] {t.contributions.loading}
              </div>
            ) : data ? (
              <ActivityCalendar
                data={data}
                colorScheme={scheme}
                theme={RAMP}
                blockSize={12}
                blockMargin={4}
                blockRadius={0}
                fontSize={13}
                showColorLegend={false}
                showTotalCount={false}
                className="min-[880px]:w-full min-[880px]:[&_svg]:!h-auto min-[880px]:[&_svg]:!w-full min-[880px]:[&_svg]:!max-w-none"
                style={{ color: 'var(--muted-foreground)' }}
                labels={{
                  totalCount: `{{count}} ${t.contributions.totalCount}`,
                }}
              />
            ) : (
              <div className="font-mono text-xs text-muted-foreground/60 py-6 animate-pulse">
                {t.contributions.loading}
              </div>
            )}
          </div>

          {/* Footer: total count (left) + Less -> More legend (right) */}
          <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold tabular-nums truncate">
              {total !== null ? (
                `${total.toLocaleString()} ${t.contributions.totalCount}`
              ) : (
                <span className="animate-pulse">{t.contributions.loading}</span>
              )}
            </span>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                Less
              </span>
              <div className="flex items-center gap-1">
                {swatches.map((color, i) => (
                  <span
                    key={i}
                    className="h-[11px] w-[11px] border border-border/40"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                More
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default GithubActivity
