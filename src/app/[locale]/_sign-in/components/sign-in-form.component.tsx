'use client'

import React from 'react'
import {
	useRouter,
} from 'next/navigation'
import Link from 'next/link'
import {
	Form,
} from 'react-final-form'
import {
	useCookies,
} from 'next-client-cookies'
import axios from 'axios'
import { ToastQueue, } from '@react-spectrum/toast'

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
	email,
	password,
	required,
} from '../../../../shared/utils/validators'
import {
	authService,
} from '../../../../services/auth/auth.service'
import {
	useAuth,
} from '../../../../store/auth'

import type {
	SignInFormValues,
} from '../types'

import styles from '../styles.module.scss'

export const SignInForm = (): React.ReactElement => {
	const {
		setAuth,
	} = useAuth()
	const cookies = useCookies()
	const router = useRouter()

	const handleSubmit = async(values: SignInFormValues,): Promise<void> => {
		try {
			await authService.signIn(values,)

			cookies.set('auth', String(true,),)

			setAuth(true,)

			router.push('/home',)
		} catch (e) {
			if (axios.isAxiosError(e,)) {
				ToastQueue.negative(e.response?.data.message,)
			} else {
				ToastQueue.negative('Smth went wrong',)
			}
		}
	}

	return (
		<Form<SignInFormValues>
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

					<Link className={styles.forgotPasswordLink} href='/forgot-password'>Forgot Password?</Link>

					<Button
						type='submit'
						loading={submitting}
						additionalProps={{
							btnType: ButtonType.TEXT,
							text:    'Submit',
							size:    ButtonSizes.MEDIUM,
						}}
					/>
				</form>
			}}
		/>
	)
}

export default SignInForm
