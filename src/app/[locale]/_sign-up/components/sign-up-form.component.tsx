'use client'

import React from 'react'
import {
	Form,
} from 'react-final-form'

import FormField from '../../../../shared/components/form-field/form-field.component'
import Button from '../../../../shared/components/button/button.component'
import {
	ButtonSizes,
	ButtonType,
} from '../../../../shared/components/button/button.types'
import {
	composeValidators,
} from '../../../../shared/utils/compose-validators.util'
import {
	email, password, passwordsMatch, required,
} from '../../../../shared/utils/validators'
import {
	authService,
} from '../../../../services/auth/auth.service'

import type {
	SignUpFormValues,
} from '../types'

import styles from '../styles.module.scss'

export const SignUpForm = (): React.ReactElement => {
	const [successMessage, setSuccessMessage,] = React.useState('',)

	const handleSubmit = async(values: SignUpFormValues,): Promise<void> => {
		try {
			const {
				message,
			} = await authService.signUp(values,)

			setSuccessMessage(message,)
		} catch {
			// todo: Add toast service
		}
	}

	return (
		<Form<SignUpFormValues>
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
							text:    'Submit',
							size:    ButtonSizes.MEDIUM,
						}}
					/>

					<p role='alert' className={styles.successMessage}>{successMessage}</p>
				</form>
			}}
		/>
	)
}

export default SignUpForm
