'use client'
import React from 'react'
import styles from './prodds-currencies.module.scss'
import ProddsCurrenciesDark from '../../../../../../public/assets/images/dark/home-prodds-dark.asset.svg'
import ProddsCurrenciesLight from '../../../../../../public/assets/images/light/home-prodds-light.asset.svg'
import { useTheme, } from 'next-themes'
import classNames from 'classnames'
import ButtonLink from '@/shared/components/button-link/button-link.component'

const ProddsCurrencies: React.FC = () => {
	const { theme, } = useTheme()
	const isDarkTheme = theme === 'dark'
	return (
		<div
			className={classNames(
				styles.proddsCurrenciesWrapper,
				isDarkTheme ?
					styles.proddsCurrenciesWrapperDark :
					styles.proddsCurrenciesWrapperLight,
			)}
		>
			<div className={styles.proddsCurrenciesTextWrapper}>
				<div className={styles.proddsCurrenciesTitleWrapper}>Prodds</div>
				<div className={classNames(styles.proddsCurrenciesDescription, isDarkTheme ?
					styles.proddsCurrenciesDescriptionDark :
					styles.proddsCurrenciesDescriptionLight,)}>
					Powered by RDM and PRD
				</div>
				<div><ButtonLink text={'Learn More'}/></div>

			</div>
			<div className={styles.proddsCurrenciesImageWrapper}>
				{isDarkTheme ?
					<ProddsCurrenciesDark style={{ height: 426, }} /> :
					<ProddsCurrenciesLight style={{ height: 426, }} />}
			</div>
		</div>
	)
}

export default ProddsCurrencies
