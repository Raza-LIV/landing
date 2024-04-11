import {
	createI18nMiddleware,
} from 'next-international/middleware'
import type {
	NextResponse,
} from 'next/server'
import type {
	NextRequest,
} from 'next/server'

import {
	locales,
} from './shared/constants/internatialization.constants'

const i18Middleware = createI18nMiddleware({
	locales,
	defaultLocale: locales[0],
},)

export function middleware(req: NextRequest,): NextResponse {
	return i18Middleware(req,)
}

export const config = {
	matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',],
}
