import * as React from 'react'
import type {
	Metadata,
} from 'next'

import AuthHub from './components/auth-hub.component'

import {
	inner,
	wrapper,
} from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Boilerplate',
}

const Auth = (): React.ReactElement => {
	return (
		<main className={wrapper}>
			<div className={inner}>
				<AuthHub />
			</div>
		</main>
	)
}

export default Auth
