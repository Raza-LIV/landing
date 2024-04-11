'use client'

import React from 'react'
import {
	useTheme,
} from 'next-themes'

import ProddsLogoDark from '../../../../public/assets/icons/prodds-logo-dark.svg'
import ProddsLogoLight from '../../../../public/assets/icons/prodds-logo-light.svg'

import {
	logo,
	logoWrapper,
} from './logo.module.scss'

const ProddsLogo: React.FC = () => {
	const {
		theme,
	} = useTheme()

	return (
		<div className={logoWrapper}>
			{theme === 'dark' ?
				<ProddsLogoDark className={logo}/> :
				<ProddsLogoLight className={logo}/>}
		</div>
	)
}

export default ProddsLogo