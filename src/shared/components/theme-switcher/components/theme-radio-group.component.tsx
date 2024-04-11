import * as React from 'react'

import ThemeLegend from './theme-legend.component'
import ThemeRadio from './theme-radio-btn'

import {
	radioDark, radioLight, switcher, status,
} from '../theme-switcher.module.scss'

interface IThemeRadioGroupProps {
	currTheme: string
}

const ThemeRadioGroup: React.FunctionComponent<IThemeRadioGroupProps> = ({
	currTheme,
},) => {
	return (
		<fieldset className={switcher}>
			<ThemeLegend />

			<ThemeRadio
				currTheme={currTheme}
				additionalClass={radioLight}
				radioTheme='light'
			/>

			<ThemeRadio
				currTheme={currTheme}
				additionalClass={radioDark}
				radioTheme='dark'
			/>

			<div className={status} />
			<div />
		</fieldset>
	)
}

export default ThemeRadioGroup