/* eslint-disable react/jsx-max-depth */
import React from 'react'
import {
	cookies,
} from 'next/headers'
import classNames from 'classnames'

import {
	Figtree,
	Fredoka,
} from './fonts.config'
import {
	ThemeProvider,
} from '../shared/providers/theme.provider'
import {
	ClientCookiesProvider,
} from '../providers/cookies.provider'
import ToastProvider from '../providers/toast.provider'
import ParamsMessageProvider from '../providers/params-message-provider.provider'

import Header from '@/shared/components/header/header.component'
import Footer from '@/shared/components/footer/footer.component'

import '../shared/styles/globals.scss'

type Props = {
   children: React.ReactElement
	params: {
		locale: string
	}
}

export default function RootLayout({
	children,
	params: {
		locale,
	},
}: Props,): React.ReactNode {
	return (
		<html
			lang={locale}
			suppressHydrationWarning
			className={classNames(Fredoka.variable, Figtree.variable,)}
		>
			<body>
				<ThemeProvider>
					<ClientCookiesProvider value={cookies().getAll()}>
						<ParamsMessageProvider>
							<ToastProvider>
								<Header/>
								{children}
								<Footer/>
							</ToastProvider>
						</ParamsMessageProvider>
					</ClientCookiesProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
