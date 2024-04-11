import React from 'react'
import { Form, } from 'react-final-form'
import type { FormApi, } from 'final-form'
import classNames from 'classnames'
import { ToastQueue, } from '@react-spectrum/toast'

import FormField from '../../../../shared/components/form-field/form-field.component'
import Button from '../../../../shared/components/button/button.component'
import { ButtonSizes, ButtonType, } from '../../../../shared/components/button/button.types'
import { changeEmailService, } from '../../../../services/change-email/change-email.service'
import type { ConfirmChangeEmailValues, } from '../profile.types'

import styles from '../styles.module.scss'

type Props = {
	submitSideEffect: () => void
}

const SendConfirmChangeCode: React.FunctionComponent<Props> = ({ submitSideEffect, },): React.ReactNode => {
	const handleSubmit = async(values: ConfirmChangeEmailValues, form: FormApi<ConfirmChangeEmailValues>,): Promise<void> => {
		try {
			await changeEmailService.confirm(values,)

			form.reset()
			form.restart()
			submitSideEffect()
			ToastQueue.positive('Email successfully changed!',)
		} catch {
			ToastQueue.negative('One of codes is wrong',)
		}
	}

	return (
		<Form<ConfirmChangeEmailValues>
			onSubmit={handleSubmit}
			render={({
				handleSubmit,
				submitting,
			},): React.ReactElement => {
				return <form className={classNames(styles.formWrapper, styles.changeEmailFormWrapper,)} onSubmit={handleSubmit}>
					<FormField
						name='oldEmailCode'
						label='Old Email Code'
					/>

					<FormField
						name='newEmailCode'
						label='New Email Code'
					/>

					<Button
						type='submit'
						loading={submitting}
						additionalProps={{
							btnType: ButtonType.TEXT,
							text:    'Confirm',
							size:    ButtonSizes.MEDIUM,
						}}
					/>
				</form>
			}}
		/>
	)
}

export default SendConfirmChangeCode
