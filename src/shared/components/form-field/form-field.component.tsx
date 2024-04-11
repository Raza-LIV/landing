import React from 'react'

import {
	Field,
} from 'react-final-form'
import type {
	FieldValidator,
} from 'final-form'

import Input from '../input/input.component'

import type {
	Props as InputProps,
} from '../input/input.component'

export type Props = {
    name: string
    label?: string
    validators?: FieldValidator<string>
    inputProps?: InputProps
	disabled?: boolean
}

export const FormField = ({
	name,
	label,
	validators,
	inputProps,
	disabled = false,
}: Props,): React.ReactElement => {
	return (
		<Field
			name={name}
			validate={validators}
		>
			{({
				input,
				meta,
			},): React.ReactElement => {
				return (
					<Input
						{...inputProps}
						{...input}
						label={label}
						error={meta.error}
						touched={meta.touched}
						disabled={disabled}
					/>
				)
			}}
		</Field>
	)
}

export default FormField
