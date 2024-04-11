import * as React from 'react'
import type {
	Metadata,
} from 'next'

import Heading from '../../../shared/components/heading/heading.component'
import SignUpForm from './components/sign-up-form.component'

import styles from './styles.module.scss'
import {
	authService,
} from '../../../services/auth/auth.service'

export const metadata: Metadata = {
	title: 'Boilerplate',
}

const SignUp = async(): Promise<React.ReactElement> => {
	return (
		<main className={styles.wrapper}>
			<Heading level={1} text='Sign Up' />

			<SignUpForm />

			<a href={authService.getGoogleOauthUrl()}>Auth With Google</a>
			<a href={authService.getGithubOauthUrl()}>Auth With Github</a>
			<a href={authService.getFacebookOauthUrl()}>Auth With Facebook</a>
		</main>
	)
}

export default SignUp
