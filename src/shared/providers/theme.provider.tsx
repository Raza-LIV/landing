'use client'

import * as React from 'react'
import {
	ThemeProvider as NextThemesProvider,
} from 'next-themes'
import type {
	ThemeProviderProps,
} from 'next-themes/dist/types'
import {
	Provider,
	defaultTheme,
} from '@adobe/react-spectrum'

export function ThemeProvider({
	children, ...props
}: ThemeProviderProps,): React.ReactNode {
	return <NextThemesProvider {...props}>
		<Provider theme={defaultTheme}>
			{children}
		</Provider>
	</NextThemesProvider>
}
