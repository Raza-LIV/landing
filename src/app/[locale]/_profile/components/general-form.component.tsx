import React from 'react'
import { Form, } from 'react-final-form'

import Heading from '../../../../shared/components/heading/heading.component'
import { userService, } from '../../../../services/user/user.service'
import ImageField from '../../../../shared/components/image-field/image-field.component'
import FormField from '../../../../shared/components/form-field/form-field.component'
import { composeValidators, } from '../../../../shared/utils/compose-validators.util'
import { maxLength, required, } from '../../../../shared/utils/validators'
import Button from '../../../../shared/components/button/button.component'
import { ButtonSizes, ButtonType, } from '../../../../shared/components/button/button.types'

import styles from '../styles.module.scss'

type Values = {
	avatar: string | File
	username: string
}

type Props = {
	initialValues: Values
}

const GeneralForm: React.FunctionComponent<Props> = ({ initialValues, },): React.ReactNode => {
	const handleSubmit = async(values: Values,): Promise<void> => {
		const data = new FormData()

		if (values.avatar && values.avatar instanceof File) {
			data.append('file', values.avatar,)
		}

		data.append('username', values.username,)

		await userService.updateProfile(data,)
	}

	return (
		<div className={styles.formWrapper}>
			<Heading level={2} text='General' />

			<Form<Values>
				onSubmit={handleSubmit}
				initialValues={initialValues}
				render={({
					handleSubmit,
					submitting,
				},): React.ReactElement => {
					return <form className={styles.formWrapper} onSubmit={handleSubmit}>
						<ImageField
							name='avatar'
							label='Avatar'
						/>

						<FormField
							name='username'
							label='Username'
							validators={composeValidators(
								required,
								maxLength(50,),
							)}
						/>

						<Button
							type='submit'
							loading={submitting}
							additionalProps={{
								btnType: ButtonType.TEXT,
								text:    'Update',
								size:    ButtonSizes.MEDIUM,
							}}
						/>
					</form>
				}}
			/>
		</div>
	)
}

export default GeneralForm
