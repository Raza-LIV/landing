'use client'

import React from 'react'

import ProddsLogo from '../logo/logo.component'
import MainNavigation from './components/main-navigation.component'

import {
	I18nProviderClient,
	useCurrentLocale,
} from '@/locales/tools/client'
import {
	header,
} from './header.module.scss'
import ButtonLink from '../button-link/button-link.component'

const Header:React.FC = () => {
	const locale = useCurrentLocale()

	return (
		<header className={header}>
			<I18nProviderClient locale={locale}>
				<ProddsLogo/>
				<MainNavigation/>
				<ButtonLink
					text='Launch App'
				/>
			</I18nProviderClient>
		</header>
	)
}

export default Header