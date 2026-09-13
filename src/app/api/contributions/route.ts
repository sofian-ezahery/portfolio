export const runtime = 'edge'

// GitHub username whose contribution calendar we expose.
const GITHUB_USERNAME = 'sofian-ezahery'

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface GraphQLDay {
  date: string
  contributionCount: number
  contributionLevel: string
}

interface GraphQLWeek {
  contributionDays: GraphQLDay[]
}

interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number
          weeks: GraphQLWeek[]
        }
      }
    }
  }
  errors?: unknown
}

// Map GitHub's textual level to the 0-4 scale used by react-activity-calendar.
const LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return new Response(
      JSON.stringify({ error: 'GITHUB_TOKEN is not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'portfolio-contributions',
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
      // Cache the upstream response for 1 hour to stay well within rate limits.
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: 'GitHub API request failed' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const json = (await res.json()) as GraphQLResponse

    if (json.errors) {
      return new Response(
        JSON.stringify({ error: 'GitHub GraphQL error' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar

    if (!calendar) {
      return new Response(
        JSON.stringify({ error: 'No contribution data found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const contributions: ContributionDay[] = calendar.weeks.flatMap((week: GraphQLWeek) =>
      week.contributionDays.map((day: GraphQLDay) => ({
        date: day.date,
        count: day.contributionCount,
        level: LEVEL_MAP[day.contributionLevel] ?? 0,
      })),
    )

    return new Response(
      JSON.stringify({
        total: calendar.totalContributions,
        contributions,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    )
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch contributions' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
