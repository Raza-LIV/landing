'use client'

import * as React from 'react'
import { useRouter, } from 'next/navigation'

import { authService, } from '../../../../services/auth/auth.service'
import Button from '../../../../shared/components/button/button.component'
import { ButtonType, } from '../../../../shared/components/button/button.types'

const Logout = async(): Promise<React.ReactElement> => {
	const router = useRouter()

	const handleLogout = async(): Promise<void> => {
		await authService.logout()

		router.replace('/auth',)
	}

	return (
		<Button
			onPress={handleLogout}
			additionalProps={{
				btnType: ButtonType.TEXT,
				text:    'Logout',
			}}
		/>
	)
}

export default Logout
