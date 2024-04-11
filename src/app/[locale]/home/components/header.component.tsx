import Link from 'next/link'
import React from 'react'
import Logout from './logout.component'

import styles from '../styles.module.scss'

const Header = async(): Promise<React.ReactElement> => {
	return (
		<div className={styles.header}>
			<Link href='/profile'>Profile</Link>

			<Logout />
		</div>
	)
}

export default Header
