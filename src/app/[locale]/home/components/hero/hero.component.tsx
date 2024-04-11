'use client'
import React from 'react'
import styles from './hero.module.scss'
import HomeCityDarkImage from '../../../../../../public/assets/images/dark/home-city-dark.asset.svg'
import HomeCityLightImage from '../../../../../../public/assets/images/light/home-city-light.asset.svg'
import HomeStadiumDarkIMage from '../../../../../../public/assets/images/dark/home-stadium-dark.asset.svg'
import HomeStadiumLightIMage from '../../../../../../public/assets/images/light/home-stadium-light.asset.svg'
import { useTheme, } from 'next-themes'
import classNames from 'classnames'
import ButtonLink from '@/shared/components/button-link/button-link.component'
import { useLayoutSize, } from '@/shared/hooks/use-layout-size.hook'

const Hero: React.FC = () => {
	const { theme, } = useTheme()
	const isDarkTheme = theme === 'dark'
	const {isMobile, isTablet, isDesktop,} = useLayoutSize()

	const imageMapping = ():number => {
		if (isMobile) {
			return 100
		} else if (isTablet) {
			return 200
		}
		return 430
	}

	return (
		<div
			className={classNames(
				styles.heroWrapper,
				isDarkTheme ?
					styles.heroWrapperDark :
					styles.heroWrapperLight,
			)}
		>
			{isDarkTheme ?
				<HomeCityDarkImage style={{ width: imageMapping(), }} /> :
				<HomeCityLightImage style={{ width: imageMapping(), }}/>}
			<div className={styles.heroContentBlock}>
				<div className={styles.textsBlock}>
					<div
						className={classNames(styles.centeredText, styles.companyNameText,)}
					>
						Prodds
					</div>
					<div className={classNames(styles.textsHolder,)}>
						<div
							className={classNames(
								styles.centeredText,
								styles.sloganText,
								isDarkTheme ?
									styles.sloganTextDark :
									styles.sloganTextLight,
							)}
						>
							An one-stop sports entertainment platform
						</div>
						<div
							className={classNames(
								styles.centeredText,
								styles.descriptionText,
							)}
						>
							Welcome to Prodds, a cutting-edge sports entertainment platform,
							where you can experience the thrill of wagering with crypto and
							other virtual assets.
						</div>
					</div>
				</div>
				<div>
					<ButtonLink text={'Launch app'}/>
				</div>
			</div>
			{isDarkTheme ?
				<HomeStadiumDarkIMage style={{ width: imageMapping(), }} /> :
				<HomeStadiumLightIMage style={{ width: imageMapping(), }} />}
		</div>
	)
}

export default Hero
