'use client'
import React from 'react'
import styles from './roadmap.module.scss'
import RoadmapDark from '../../../../../../public/assets/images/dark/home-roadmap-dark.asset.svg'
import RoadmapLight from '../../../../../../public/assets/images/light/home-roadmap-light.asset.svg'
import { useTheme, } from 'next-themes'
import classNames from 'classnames'

const Roadmap: React.FC = () => {
	const { theme, } = useTheme()
	const isDarkTheme = theme === 'dark'
	return (
		<div
			className={classNames(
				styles.roadmapWrapper,
				isDarkTheme ?
					styles.roadmapWrapperDark :
					styles.roadmapWrapperLight,
			)}
		>
			<div className={styles.roadmapTextWrapper}>
				<div className={styles.roadmapTitleWrapper}>Prodds</div>
			</div>
			<div className={styles.roadmapImageWrapper}>
				{isDarkTheme ?
					<RoadmapDark style={{ height: 1130, }} /> :
					<RoadmapLight style={{ height: 1130, }} />}
			</div>
		</div>
	)
}

export default Roadmap
