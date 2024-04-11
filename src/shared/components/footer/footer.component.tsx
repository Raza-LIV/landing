import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import ThemeSwitcher from '../theme-switcher/theme-switcher.component'
import LanguageSwitch from '../language-switch/language-switch.component'

import { getI18n, } from '@/locales/tools/server'
import {
	footer,
	footerLink,
	footerNav,
	footerText,
} from './footer.module.scss'

const Footer = async(): Promise<React.ReactElement> => {
	const t = await getI18n()
	return (
		<footer className={footer}>
			<p>Prodds © 2024</p>
			<div className={footerNav}>
				<ThemeSwitcher/>
				<LanguageSwitch />
				<Link className={classNames(footerText, footerLink,)} href='/policy'>{t('footer.privacyPolicy',)}</Link>
				<Link className={classNames(footerText, footerLink,)} href='/terms'>{t('footer.termsOfService',)}</Link>
			</div>
		</footer>
	)
}

export default Footer