'use client'

import React from 'react'
import {
	ToastContainer,
} from '@react-spectrum/toast'

type Props = {
    children: React.ReactNode
}

const ToastProvider = ({
	children,
}: Props,): React.ReactElement => {
	return (
		<>
			{children}

			<ToastContainer />
		</>
	)
}

export default ToastProvider
