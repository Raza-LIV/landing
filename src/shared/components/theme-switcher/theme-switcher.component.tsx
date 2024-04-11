'use client'

import * as React from 'react'
import {
	useTheme,
} from 'next-themes'

import ThemeRadioGroup from './components/theme-radio-group.component'

import {
	container,
} from './theme-switcher.module.scss'

const ThemeSwitcher: React.FunctionComponent = () => {
	const {
		theme,
	} = useTheme()

	return (
		<div className={container}>
			<ThemeRadioGroup currTheme={theme ?? 'dark'} />
		</div>
	)
}

export default ThemeSwitcher