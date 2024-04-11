import classNames from 'classnames'
import React from 'react'
import { Form, } from 'react-final-form'
import type { FormApi, } from 'final-form'
import { ToastQueue, } from '@react-spectrum/toast'

import Heading from '../../../../shared/components/heading/heading.component'
import FormField from '../../../../shared/components/form-field/form-field.component'
import Button from '../../../../shared/components/button/button.component'
import { ButtonSizes, ButtonType, } from '../../../../shared/components/button/button.types'
import { changePasswordService, } from '../../../../services/change-password/change-password.service'

import { composeValidators, } from '../../../../shared/utils/compose-validators.util'
import { password, required, } from '../../../../shared/utils/validators'

import styles from '../styles.module.scss'

type Values = {
	currentPassword?: string
	newPassword?: string
}

const ChangePasswordForm: React.FunctionComponent = (): React.ReactNode => {
	const handleSubmit = async(values: Values, form: FormApi<Values>,): Promise<void> => {
		try {
			await changePasswordService.changePassword(values,)

			form.restart()

			ToastQueue.positive('Password changed',)
		} catch {
			ToastQueue.negative('Wrong password',)
		}
	}

	return (
		<div className={classNames(styles.formWrapper,)}>
			<Heading level={2} text='Change Password' />

			<Form<Values>
				onSubmit={handleSubmit}
				render={({
					handleSubmit,
					submitting,
				},): React.ReactElement => {
					return <form className={styles.formWrapper} onSubmit={handleSubmit}>
						<FormField
							name='currentPassword'
							label='Current Password'
							inputProps={{
								type: 'password',
							}}
							validators={composeValidators(
								required,
								password,
							)}
						/>

						<FormField
							name='newPassword'
							label='New Password'
							inputProps={{
								type: 'password',
							}}
							validators={composeValidators(
								required,
								password,
							)}
						/>

						<Button
							type='submit'
							loading={submitting}
							additionalProps={{
								btnType: ButtonType.TEXT,
								text:    'Change Password',
								size:    ButtonSizes.MEDIUM,
							}}
						/>
					</form>
				}}
			/>
		</div>
	)
}

export default ChangePasswordForm
