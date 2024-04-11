'use client'

import * as React from 'react'
import { Field, } from 'react-final-form'

import ImageFileInput from '../image-file-input/image-file-input.component'

type Props = {
	name: string
	label: string
}

const ImageField: React.FunctionComponent<Props> = ({name, label,},): React.ReactElement => {
	return (
		<Field name={name}>
			{({ input: { onChange, value, ...input }, },) => {
				return (
					<ImageFileInput {...input} initValue={value} name={name} label={label} onFilesChange={onChange} />
				)
			}}
		</Field>
	)
}

export default ImageField
