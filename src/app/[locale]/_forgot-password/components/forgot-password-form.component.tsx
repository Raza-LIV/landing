'use client'

import React from 'react'
import { Form, } from 'react-final-form'
import type { FormApi, } from 'final-form'
import { ToastQueue, } from '@react-spectrum/toast'

import FormField from '../../../../shared/components/form-field/form-field.component'
import { composeValidators, } from '../../../../shared/utils/compose-validators.util'
import { email, required, } from '../../../../shared/utils/validators'
import Button from '../../../../shared/components/button/button.component'
import { ButtonSizes, ButtonType, } from '../../../../shared/components/button/button.types'
import { forgotPasswordService, } from '../../../../services/forgot-password/forgot-password.service'
import type { ForgotPasswordFormValues, } from '../types'

import styles from '../styles.module.scss'

export const ForgotPasswordForm = (): React.ReactElement => {
	const handleSubmit = async(values: ForgotPasswordFormValues, form: FormApi<ForgotPasswordFormValues, Partial<ForgotPasswordFormValues>>,): Promise<void> => {
		try {
			await forgotPasswordService.sendInstructions(values.email,)

			ToastQueue.positive('Instructions has been sended',)

			form.restart()
		} catch {
			ToastQueue.negative('Can\'t send an instructions',)
		}
	}

	return (
		<Form<ForgotPasswordFormValues>
			onSubmit={handleSubmit}
			render={({
				handleSubmit,
				submitting,
			},): React.ReactElement => {
				return <form className={styles.formWrapper} onSubmit={handleSubmit}>
					<FormField
						name='email'
						label='Email'
						validators={composeValidators(
							required,
							email,
						)}
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

export default ForgotPasswordForm
