import classNames from 'classnames'
import React from 'react'

import {
	Label,
	Radio,
	RadioGroup as ReactAriaRadioGroup,
} from 'react-aria-components'

import type {
	RadioGroupProps,
} from 'react-aria-components'

import styles from './radio-group.module.scss'

type Option = {
    label: string
    value: string
}

export type Props = RadioGroupProps & {
    className?: string
    radioClassName?: string
    options: Array<Option>
    label: string
}

export const RadioGroup = ({
	options,
	label,
	...props
}: Props,): React.ReactElement => {
	return (
		<ReactAriaRadioGroup {...props} className={classNames(styles.radioGroup, props.className,)}>
			<Label>{label}</Label>

			{options.map((el,) => {
				return <Radio
					key={el.value}
					className={classNames(styles.radio, props.radioClassName,)}
					value={el.value}>
					{el.value}
				</Radio>
			},)}
		</ReactAriaRadioGroup>
	)
}

export default RadioGroup
