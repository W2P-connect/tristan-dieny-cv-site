import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const theme = request.cookies.get('tdcv-theme')
  const locale = request.cookies.get('tdcv-locale')

  const defaultLocale = 'fr'

  const headers = new Headers(request.headers)
  headers.set('x-theme', theme?.value ?? 'dark')
  headers.set('x-locale', locale?.value ?? defaultLocale)

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale?.value ?? defaultLocale}`, request.url))
  }

  return NextResponse.next({
    request: {
      headers: headers,
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
