import React from 'react'
import { Form, } from 'react-final-form'
import type { FormApi, } from 'final-form'
import classNames from 'classnames'
import { ToastQueue, } from '@react-spectrum/toast'

import Heading from '../../../../shared/components/heading/heading.component'
import FormField from '../../../../shared/components/form-field/form-field.component'
import { composeValidators, } from '../../../../shared/utils/compose-validators.util'
import { email, required, } from '../../../../shared/utils/validators'
import Button from '../../../../shared/components/button/button.component'
import { ButtonSizes, ButtonType, } from '../../../../shared/components/button/button.types'
import Dialog from '../../../../shared/components/dialog/dialog.component'
import SendConfirmChangeCode from './send-confirm-change-email-code.component'
import { changeEmailService, } from '../../../../services/change-email/change-email.service'
import type { User, } from '../../../../services/user/user.types'
import { fetchMe, } from '../utils/fetch-me.util'

import styles from '../styles.module.scss'

type Values = {
	oldEmail?: string
	newEmail?: string
}

type Props = {
	initialValues: Values
	setMe: React.Dispatch<React.SetStateAction<User | null>>
}

const ChangeEmailForm: React.FunctionComponent<Props> = ({ initialValues, setMe, },): React.ReactNode => {
	const [isConfirmModalVisible, setIsConfirmModalVisible,] = React.useState(false,)

	const handleSubmit = async(values: Values, form: FormApi<Values>,): Promise<void> => {
		if (!values.newEmail) {
			ToastQueue.negative('Can\'t create change email session. Please, try again later',)

			return
		}

		try {
			await changeEmailService.createChangeEmailSession({newEmail: values.newEmail,},)

			form.restart()

			setIsConfirmModalVisible(true,)
		} catch {
			ToastQueue.negative('Can\'t create change email session. Please, try again later',)
		}
	}

	const handleDismiss = (): void => {
		setIsConfirmModalVisible(false,)
	}

	React.useEffect(() => {
		(async(): Promise<void> => {
			await fetchMe(setMe,)
		})()
	}, [isConfirmModalVisible,],)

	return (
		<div className={classNames(styles.formWrapper,)}>
			<Heading level={2} text='Change Email' />

			<Form<Values>
				onSubmit={handleSubmit}
				initialValues={initialValues}
				render={({
					handleSubmit,
					submitting,
				},): React.ReactElement => {
					return <form className={styles.formWrapper} onSubmit={handleSubmit}>
						<FormField
							name='oldEmail'
							label='Old Email'
							disabled
						/>

						<FormField
							name='newEmail'
							label='New Email'
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
								text:    'Change Email',
								size:    ButtonSizes.MEDIUM,
							}}
						/>

						<Dialog
							isOpen={isConfirmModalVisible}
							title='Confirm Email Change'
							onDismiss={handleDismiss}
							content={<SendConfirmChangeCode submitSideEffect={handleDismiss} />}
						/>
					</form>
				}}
			/>
		</div>
	)
}

export default ChangeEmailForm
