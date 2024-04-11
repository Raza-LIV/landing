'use client'

import React from 'react'
import { useTheme, } from 'next-themes'

import styles from './page-wrapper.module.scss'
import classNames from 'classnames'

type Props = {
	children: React.ReactElement
 }

const PageWrapper:React.FC<Props> = ({children,}: Props,) => {
	const { theme, } = useTheme()
	const isDarkTheme = theme === 'dark'

	return (
		<div
			className={classNames(
				styles.wrapper,
				isDarkTheme ?
					styles.wrapperDark :
					styles.wrapperLight,
			)}
		>
			{/* <div className={styles.wrapperLimiter}> */}
			{children}
			{/* </div> */}
		</div>
	)
}

export default PageWrapper
