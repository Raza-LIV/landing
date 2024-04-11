import * as React from 'react'
import type {
	Metadata,
} from 'next'

import ProfileForm from './components/profile-form.component'
import Heading from '../../../shared/components/heading/heading.component'

import styles from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Boilerplate',
}

const Profile = async(): Promise<React.ReactElement> => {
	return (
		<main className={styles.wrapper}>
			<Heading level={1} text='Edit Profile' />

			<ProfileForm />
		</main>
	)
}

export default Profile
