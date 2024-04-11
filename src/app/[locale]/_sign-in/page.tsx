import * as React from 'react'
import type {
	Metadata,
} from 'next'

import Heading from '../../../shared/components/heading/heading.component'

import SignInForm from './components/sign-in-form.component'

import {
	authService,
} from '../../../services/auth/auth.service'

import styles from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Boilerplate',
}

const SignIn = async(): Promise<React.ReactElement> => {
	return (
		<main className={styles.wrapper}>
			<Heading level={1} text='Sign In' />

			<SignInForm />

			<a href={authService.getGoogleOauthUrl()}>Auth With Google</a>
			<a href={authService.getGithubOauthUrl()}>Auth With Github</a>
			<a href={authService.getFacebookOauthUrl()}>Auth With Facebook</a>
		</main>
	)
}

export default SignIn
