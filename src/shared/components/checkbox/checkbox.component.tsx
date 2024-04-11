import React from 'react'

import {
	Checkbox as ReactAriaCheckbox,
} from 'react-aria-components'
import classNames from 'classnames'

import type {
	CheckboxProps,
} from 'react-aria-components'

import CheckIcon from '../../../../public/assets/icons/check.svg'

import styles from './checkbox.module.scss'

export type Props = Omit<CheckboxProps, 'children'> & {
    label: string
    className?: string
}

export const Checkbox = ({
	label,
	...props
}: Props,): React.ReactElement => {
	return (
		<ReactAriaCheckbox {...props} className={classNames(styles.reactAriaCheckbox, props.className,)}>
			<div className={classNames(styles.checkbox,)}>
				<CheckIcon />
			</div>

			{label}
		</ReactAriaCheckbox>
	)
}

export default Checkbox
