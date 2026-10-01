import { NextResponse } from 'next/server'

// 'unsafe-inline' requis pour les scripts : les pages sont pré-rendues statiquement,
// donc pas de nonce par requête (le nonce transformerait toutes les pages en dynamique).
// img-src skillicons.dev : icônes de skills (Hero.tsx, Projects.tsx).
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://skillicons.dev",
  "font-src 'self'",
  "connect-src 'self'",
  "worker-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ')

const SECURITY_HEADERS: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Frame-Options': 'DENY',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'credentialless',
}

export function middleware() {
  const response = NextResponse.next()
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value)
  }
  // Pas de CSP en dev : React refresh utilise eval et un websocket localhost.
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Content-Security-Policy', CSP)
  }
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
