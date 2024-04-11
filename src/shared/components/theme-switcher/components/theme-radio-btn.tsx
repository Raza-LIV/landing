import * as React from 'react'
import {
	useTheme,
} from 'next-themes'
import classNames from 'classnames'

import {
	radio,
} from '../theme-switcher.module.scss'

interface IThemeRadioProps {
	currTheme: string
	radioTheme: 'light' | 'dark'
	additionalClass?: string
}

const ThemeRadio: React.FunctionComponent<IThemeRadioProps> = ({
	currTheme, radioTheme, additionalClass,
},) => {
	const {
		setTheme,
	} = useTheme()

	const handleThemeChange = (): void => {
		setTheme(radioTheme,)
	}

	return (
		<input
			name='color-scheme'
			value={radioTheme}
			type='radio'
			aria-label={radioTheme}
			checked={currTheme === radioTheme}
			onChange={handleThemeChange}
			className={classNames(radio, {
				[additionalClass ?? '']: Boolean(additionalClass,),
			},)}
		/>
	)
}

export default ThemeRadio