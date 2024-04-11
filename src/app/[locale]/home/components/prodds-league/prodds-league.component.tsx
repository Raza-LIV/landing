'use client'
import React from 'react'
import styles from './prodds-league.module.scss'
import PlayersDark from '../../../../../../public/assets/images/dark/home-players-dark.asset.svg'
import PlayersLight from '../../../../../../public/assets/images/light/home-players-light.asset.svg'
import { useTheme, } from 'next-themes'
import classNames from 'classnames'
import ProddsLeagueTextItem from '../../../../../shared/components/prodds-league-text-item/prodds-league-text-item.component'
import ButtonLink from '@/shared/components/button-link/button-link.component'
import { useLayoutSize, } from '@/shared/hooks/use-layout-size.hook'

const ProddsLeague:React.FC = () => {
	const { theme, } = useTheme()
	const isDarkTheme = theme === 'dark'
	// const {isMobile, isTablet, isDesktop,} = useLayoutSize()

	// const imageMapping = ():number => {
	// 	if (isMobile) {
	// 		return 300
	// 	} else if (isTablet) {
	// 		return 400
	// 	}
	// 	return 580
	// }

	return (
		<div
			className={classNames(
				styles.proddsLeagueWrapper,
				isDarkTheme ?
					styles.proddsLeagueWrapperDark :
					styles.proddsLeagueWrapperLight,
			)}
		>
			<div className={styles.proddsLeagueTextWrapper}>
				<div className={styles.ProddsLeagueTitleWrapper}>Prodds League</div>
				<ProddsLeagueTextItem
					text={'Build your own team with top football players'}
				/>
				<ProddsLeagueTextItem
					text={'Compete against the Prodds Community using real match results'}
				/>
				<ProddsLeagueTextItem text={'Gain valuable rewards'} />
				<div>
					<ButtonLink text={'Learn More'}/>
				</div>
			</div>
			<div className={styles.proddsLeagueImageWrapper}>
				{isDarkTheme ?
					<PlayersDark style={{ width: 580, }} /> :
					<PlayersLight style={{ width: 580, }}/>}
			</div>
		</div>
	)
}

export default ProddsLeague
