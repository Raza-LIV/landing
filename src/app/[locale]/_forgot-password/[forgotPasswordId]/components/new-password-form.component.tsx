'use client'

import React from 'react'
import { Form, } from 'react-final-form'
import { useRouter, } from 'next/navigation'
import { ToastQueue, } from '@react-spectrum/toast'

import { forgotPasswordService, } from '../../../../../services/forgot-password/forgot-password.service'

import { composeValidators, } from '../../../../../shared/utils/compose-validators.util'
import FormField from '../../../../../shared/components/form-field/form-field.component'
import { password, passwordsMatch, required, } from '../../../../../shared/utils/validators'
import Button from '../../../../../shared/components/button/button.component'
import { ButtonSizes, ButtonType, } from '../../../../../shared/components/button/button.types'
import type { NewPasswordFormValues, } from '../types'

import styles from '../styles.module.scss'

type Props = {
	id: string
}

export const NewPasswordForm: React.FunctionComponent<Props> = ({ id, },): React.ReactElement => {
	const router = useRouter()

	const handleSubmit = async(values: NewPasswordFormValues,): Promise<void> => {
		try {
			await forgotPasswordService.resetPassword({ id, newPassword: values.password, },)

			router.push('/auth?success=Password successfully changed!',)
		} catch {
			ToastQueue.negative('Can\'t change password',)
		}
	}

	return (
		<Form<NewPasswordFormValues>
			onSubmit={handleSubmit}
			render={({
				handleSubmit,
				submitting,
			},): React.ReactElement => {
				return <form className={styles.formWrapper} onSubmit={handleSubmit}>
					<FormField
						name='password'
						label='Password'
						validators={composeValidators(
							required,
							password,
						)}
						inputProps={{
							type: 'password',
						}}
					/>

					<FormField
						name='confirmPassword'
						label='Confirm Password'
						validators={composeValidators(
							required,
							password,
							passwordsMatch,
						)}
						inputProps={{
							type: 'password',
						}}
					/>

					<Button
						type='submit'
						loading={submitting}
						additionalProps={{
							btnType: ButtonType.TEXT,
							text:    'Reset Password',
							size:    ButtonSizes.MEDIUM,
						}}
					/>
				</form>
			}}
		/>
	)
}
