'use client'

import React from 'react'
import { useTheme, } from 'next-themes'

import styles from './prodds-league-text-item.module.scss'
import BallIcon from '../../../../public/assets/images/ball.asset.svg'
import classNames from 'classnames'

interface IProps {
  text: string;
}

const ProddsLeagueTextItem: React.FC<IProps> = ({ text, }: IProps,) => {
	const { theme, } = useTheme()
	const isDarkTheme = theme === 'dark'

	return (
		<div
			className={classNames(
				styles.itemWrapper,
				isDarkTheme ?
					styles.itemWrapperDark :
					styles.itemWrapperLight,
			)}
		>
			<div className={styles.ballIconWrapper}>
				<BallIcon />
			</div>
			<div
				className={classNames(
					styles.textStyle,
					isDarkTheme ?
						styles.textColoringDark :
						styles.textColoringLight,
				)}
			>
				{text}
			</div>
		</div>
	)
}

export default ProddsLeagueTextItem
