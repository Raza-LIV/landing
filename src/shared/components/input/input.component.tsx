import classNames from 'classnames'
import React from 'react'

import type {
	InputProps,
} from 'react-aria-components'
import {
	Label,
	Input as ReactAriaInput,
	TextField,
} from 'react-aria-components'

import styles from './input.module.scss'
import Show from '../show/show.component'

export type Props = InputProps & {
    label?: string
    className?: string
	inputClassName?: string
	error?: string
	touched?: boolean
}

export const Input = ({
	label,
	error,
	touched,
	...props
}: Props,): React.ReactElement => {
	const errorVisible = Boolean(error,) && Boolean(touched,)

	return (
		<TextField className={classNames(styles.textField, props.className,)}>
			<Label className={styles.label}>{label}</Label>

			<ReactAriaInput {...props} className={classNames(styles.input, props.inputClassName, {
				[styles.inputError]: errorVisible,
			},)} />

			<Show when={errorVisible} fallback={null}>
				<p role='alert' className={styles.error}>{error}</p>
			</Show>
		</TextField>
	)
}

export default Input
