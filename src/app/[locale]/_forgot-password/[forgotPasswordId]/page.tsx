import React from 'react'
import type {
	Metadata,
} from 'next'
import {validate,} from 'uuid'
import { notFound, } from 'next/navigation'

import Heading from '../../../../shared/components/heading/heading.component'
import { forgotPasswordService, } from '../../../../services/forgot-password/forgot-password.service'
import { NewPasswordForm, } from './components/new-password-form.component'

import styles from './styles.module.scss'

type Props = {
	params: {
		forgotPasswordId: string
	}
}

export const metadata: Metadata = {
	title: 'Boilerplate',
}

const ConfirmForgotPassword: React.FunctionComponent<Props> = async({params,},): Promise<React.ReactElement> => {
	const isValidUUID = validate(params.forgotPasswordId,)

	if (!isValidUUID) {
		notFound()
	}

	const isForgotPasswordSessionExist = await forgotPasswordService.checkForgotPasswordId(params.forgotPasswordId,)

	if (!isForgotPasswordSessionExist.available) {
		notFound()
	}

	return (
		<main className={styles.wrapper}>
			<Heading level={1} text='New Password' />

			<NewPasswordForm id={params.forgotPasswordId} />
		</main>
	)
}

export default ConfirmForgotPassword
