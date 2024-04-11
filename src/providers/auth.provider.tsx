'use client'

import React from 'react'
import {
	usePathname,
	useRouter,
} from 'next/navigation'

import {
	useAuth,
} from '../store/auth'
import {
	authService,
} from '../services/auth/auth.service'
import type {
	AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'

const DEFAULT_PRIVATE_ROUTE = '/home'
const DEFAULT_PUBLIC_ROUTE = '/auth'

export const privateRoutes = [DEFAULT_PRIVATE_ROUTE, '/profile',]
export const publicRoutes = [DEFAULT_PUBLIC_ROUTE,'/auth', '/email-activation', '/sign-in', '/sign-up', '/forgot-password',]

const getCleanedPathname = (pathname: string,): string => {
	const localePattern: RegExp = /^\/[^/]+/
	return pathname.replace(localePattern, '',)
}

type Props = {
    children: React.ReactNode
}

const authRedirect = (auth: boolean, pathname: string, router: AppRouterInstance,): void => {
	const cleanedPathname = getCleanedPathname(pathname,)

	if (auth && publicRoutes.includes(cleanedPathname,)) {
		router.push(DEFAULT_PRIVATE_ROUTE,)
	}

	if (!auth && privateRoutes.includes(cleanedPathname,)) {
		router.push(DEFAULT_PUBLIC_ROUTE,)
	}
}

const AuthProvider = ({
	children,
}: Props,): React.ReactElement => {
	const pathname = usePathname()
	const router = useRouter()

	const {
		setAuth,
	} = useAuth()

	React.useLayoutEffect(() => {
		(async(): Promise<void> => {
			const {
				auth,
			} = await authService.check()

			setAuth(auth,)

			authRedirect(auth, pathname, router,)
		})()
	}, [],)

	return <div>
		{children}
	</div>
}

export default AuthProvider
