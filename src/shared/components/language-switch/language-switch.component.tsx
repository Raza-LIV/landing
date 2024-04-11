'use client'

import * as React from 'react'

import classNames from 'classnames'

import {
	useChangeLocale, useCurrentLocale,
} from '../../../locales/tools/client'

import Button from '../button/button.component'

import type {
	Locale,
} from '../../constants/internatialization.constants'
import {
	locales,
} from '../../constants/internatialization.constants'

import {
	ButtonType,
} from '../button/button.types'

import {
	chooseLangLink, currentLang, languageSwitchTitle, languagesList, wrapper,
} from './language-switch.module.scss'

const LanguageSwitch: React.FunctionComponent = () => {
	const changeLocale = useChangeLocale()
	const currentLocate = useCurrentLocale()

	const handleChangeLocale = (locale: Locale,) => {
		return () => {
			changeLocale(locale,)
		}
	}

	return (
		<div className={wrapper}>
			<ul className={languagesList}>
				{locales.map((locale,) => {
					return (
						<li key={locale}>
							<Button
								onPress={handleChangeLocale(locale,)}
								className={classNames(chooseLangLink, {
									[currentLang]: currentLocate === locale,
								},)}
								additionalProps={{
									text:    locale.toUpperCase(),
									btnType: ButtonType.TEXT,
								}}
							/>
						</li>
					)
				},)}
			</ul>

			<p className={languageSwitchTitle}>Language</p>
		</div>
	)
}

export default LanguageSwitch
