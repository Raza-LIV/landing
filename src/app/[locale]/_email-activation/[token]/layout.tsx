/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'

type Props = {
    children: React.ReactElement
}

export default function Layout({
	children,
}: Props,): React.ReactNode {
	return (
		<>
			{children}
		</>
	)
}
