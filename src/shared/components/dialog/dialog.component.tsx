'use client'

import { Content, DialogTrigger, Divider, Heading, Dialog as ReactSpectrumDialog, } from '@adobe/react-spectrum'
import React from 'react'

type Props = {
	children?: React.ReactElement
	content: React.ReactNode
	isOpen?: boolean
	title?: string
	onDismiss?: () => void
}

const Dialog: React.FunctionComponent<Props> = ({children, content, isOpen, title, onDismiss,},) => {
	return (
		<DialogTrigger isOpen={isOpen} isDismissable type='modal'>
			{children ?
				children :
				<div />}

			<ReactSpectrumDialog onDismiss={onDismiss}>
				<Heading>{title}</Heading>

				<Divider />

				<Content>
					{content}
				</Content>
			</ReactSpectrumDialog>
		</DialogTrigger>
	)
}

export default Dialog
