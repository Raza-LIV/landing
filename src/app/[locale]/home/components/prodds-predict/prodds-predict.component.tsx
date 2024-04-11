'use client'
import React from 'react'
import styles from './prodds-predict.module.scss'
import ProddsPredictDark from '../../../../../../public/assets/images/dark/home-predict-dark.asset.svg'
import ProddsPredictLight from '../../../../../../public/assets/images/light/hame-predict-light.asset.svg'
import { useTheme, } from 'next-themes'
import classNames from 'classnames'
import ButtonLink from '@/shared/components/button-link/button-link.component'

const ProddsPredict: React.FC = () => {
	const { theme, } = useTheme()
	const isDarkTheme = theme === 'dark'
	return (
		<div
			className={classNames(
				styles.proddsPredictWrapper,
				isDarkTheme ?
					styles.proddsPredictWrapperDark :
					styles.proddsPredictWrapperLight,
			)}
		>
			<div className={styles.proddsPredictImageWrapper}>
				{isDarkTheme ?
					<ProddsPredictDark style={{ height: 451, }} /> :
					<ProddsPredictLight style={{ height: 451, }} />}
			</div>
			<div className={styles.proddsPredictTextWrapper}>
				<div className={styles.proddsPredictTitleWrapper}>Prodds Predict</div>
				<div className={classNames(styles.proddsPredictDescription, isDarkTheme ?
					styles.proddsPredictDescriptionDark :
					styles.proddsPredictDescriptionLight,)}>
					Bring trustless, transparent and fairness to sports prediction
				</div>
				<div><ButtonLink text={'Launch App'}/></div>

			</div>

		</div>
	)
}

export default ProddsPredict
