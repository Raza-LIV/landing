import React from 'react'

import type {
	Props as InputProps,
} from './input.component'
import Input from './input.component'

import type {
	Meta,
	StoryObj,
} from '@storybook/react'

export default {
	component: Input,
	title:     'Inputs',
} satisfies Meta<typeof Input>

type CheckboxStory = StoryObj<React.ComponentProps<typeof Input> & InputProps>

export const Input1: CheckboxStory = {
	parameters: {
		controls: {
			exclude: /inputClassName*/g,
		},
	},
	args: {
		disabled:    false,
		placeholder: 'Placeholder',
		label:       'Input',
	},
	render: (args,) => {
		const {
			...props
		} = args
		return <Input {...props} />
	},
}
