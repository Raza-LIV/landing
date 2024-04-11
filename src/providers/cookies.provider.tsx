'use client'

import {
	CookiesProvider,
} from 'next-client-cookies'

export const ClientCookiesProvider: typeof CookiesProvider = (props,) => {
	return (
		<CookiesProvider {...props} />
	)
}
