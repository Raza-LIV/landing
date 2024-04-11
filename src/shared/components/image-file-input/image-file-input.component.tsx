'use client'

import * as React from 'react'
import type { StaticImageData, } from 'next/image'
import Image from 'next/image'

import avatarPlaceholder from '../../../../public/assets/images/avatar-placeholder.webp'

import styles from './image-file-input.module.scss'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'accept' | 'onChange' | 'name' | 'aria-label'> & {
	onFilesChange: (file: File) => void
	name: string
	label: string
	initValue: string
}

const ImageFileInput: React.FunctionComponent<Props> = ({onFilesChange, name, label, initValue, ...input},): React.ReactElement => {
	const [value, setValue,] = React.useState<string | StaticImageData>(initValue ?
		initValue :
		avatarPlaceholder,
	)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>,): void => {
		const file = e.target.files?.[0]

		if (file) {
			onFilesChange(file,)
			setValue(URL.createObjectURL(file,),)
		}
	}

	return (
		<div>
			<Image
				className={styles.imagePreview}
				src={value}
				alt={label}
				width={193}
				height={193}
			/>

			<label htmlFor={name}>{label}</label>

			<input
				{...input}
				type='file'
				accept='image/*'
				onChange={handleChange}
				name={name}
				aria-label={label}
			/>
		</div>
	)
}

export default ImageFileInput
