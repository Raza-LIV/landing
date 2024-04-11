import React from 'react'
import type {
	Metadata,
} from 'next'

import Heading from '../../../shared/components/heading/heading.component'
import ForgotPasswordForm from './components/forgot-password-form.component'

import styles from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Boilerplate',
}

const ForgotPassword = async(): Promise<React.ReactElement> => {
	return (
		<main className={styles.wrapper}>
			<Heading level={1} text='Forgot Password' />

			<ForgotPasswordForm />
		</main>
	)
}

export default ForgotPassword
