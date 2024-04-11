'use client'

import * as React from 'react'
import Link from 'next/link'

import Show from '../../../../shared/components/show/show.component'
import { AuthProviders, type User, } from '../../../../services/user/user.types'
import { fetchMe, } from '../utils/fetch-me.util'
import GeneralForm from './general-form.component'
import ChangeEmailForm from './change-email-form.component'
import ChangePasswordForm from './change-password-form.component'

import styles from '../styles.module.scss'

const ProfileForm = (): React.ReactNode => {
	const [me, setMe,] = React.useState<User | null>(null,)

	React.useEffect(() => {
		(async(): Promise<void> => {
			await fetchMe(setMe,)
		})()
	}, [],)

	if (!me) {
		return null
	}

	return (
		<div className={styles.formWrapper}>
			<Link href='/home'>Home</Link>

			<GeneralForm initialValues={{
				avatar:   me.avatar,
				username: me.username,
			}} />

			<Show when={me.auth_provider === AuthProviders.CREDENTIALS} fallback={null}>
				<ChangeEmailForm
					setMe={setMe}
					initialValues={{
						oldEmail: me.email,
					}}
				/>

				<ChangePasswordForm />
			</Show>

		</div>
	)
}

export default ProfileForm
