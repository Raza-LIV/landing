import type React from 'react'

type Props = {
	when: boolean
	fallback?: React.ReactNode
	children: React.ReactNode
}

function Show({ when, fallback, children, }: Props,): React.ReactNode {
	if (!when) {
		return fallback
	}

	return children
}

export default Show
