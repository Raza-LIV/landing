import React from 'react'

import Heading from '../../../../shared/components/heading/heading.component'
import Link, { LINK_TYPES, } from '../../../../shared/components/link/link.component'

import styles from '../styles.module.scss'

export const AuthHub = (): React.ReactElement => {
	return (
		<div>
			<Heading level={1} text='Auth:' />

			<div className={styles.authLinksWrapper}>
				<Link href='/sign-up' text='Sign Up' additionalProps={{
					text: '',
					type: LINK_TYPES.LINK1,
				}} />
				<Link href='/sign-in' text='Sign In' additionalProps={{
					text: '',
					type: LINK_TYPES.LINK1,
				}} />
			</div>
		</div>
	)
}

export default AuthHub
