'use client'

import React from 'react'
import {
	usePathname, useRouter, useSearchParams,
} from 'next/navigation'
import { Pattern, match, } from 'ts-pattern'

import {
	ToastQueue,
} from '@react-spectrum/toast'

enum MessageTypes {
	SUCCESS = 'success',
	ERROR = 'error'
}

type Props = {
    children: React.ReactNode
}

const ParamsMessageProvider = ({
	children,
}: Props,): React.ReactElement => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	React.useEffect(() => {
		const messages = {
			successMessage: searchParams.get(MessageTypes.SUCCESS,),
			errorMessage:   searchParams.get(MessageTypes.ERROR,),
		}

		match(messages,)
			.with({successMessage: Pattern.string,}, (msgs,) => {
				ToastQueue.positive(msgs.successMessage,)

				// eslint-disable-next-line no-undefined
				router.push(pathname, undefined,)
			},)
			.with({errorMessage: Pattern.string,}, (msgs,) => {
				ToastQueue.negative(msgs.errorMessage,)

				// eslint-disable-next-line no-undefined
				router.push(pathname, undefined,)
			},)
			.otherwise(() => {
				// do nothing
			},)
	}, [searchParams,],)

	return (
		<div>
			{children}
		</div>
	)
}

export default ParamsMessageProvider
