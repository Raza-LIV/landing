// 'use client'

import * as React from 'react'
import type {
	Metadata,
} from 'next'
import {
	notFound,
} from 'next/navigation'

import Heading from '../../../../shared/components/heading/heading.component'

import {
	authService,
} from '../../../../services/auth/auth.service'
import Link, { LINK_TYPES, } from '../../../../shared/components/link/link.component'

import styles from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Boilerplate',
}

type Props = {
	params: {
		token: string
	}
}

const Home: React.FunctionComponent<Props> = async({
	params,
},): Promise<React.ReactElement> => {
	try {
		const {
			message,
		} = await authService.emailActivation(params.token,)

		return (
			<main className={styles.wrapper}>
				<Heading level={1} text='Email Activated' />

				<p className={styles.successMessage}>{message}</p>

				<Link className={styles.signInLink} href='/sign-in' text='Sign in' additionalProps={{
					text: '',
					type: LINK_TYPES.LINK1,
				}} />
			</main>
		)
	} catch {
		return notFound()
	}
}

export default Home
