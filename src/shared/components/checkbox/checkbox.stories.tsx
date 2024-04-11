import type React from 'react'

import type {
	Props as CheckboxProps,
} from './checkbox.component'
import Checkbox from './checkbox.component'

import type {
	Meta,
	StoryObj,
} from '@storybook/react'

export default {
	component: Checkbox,
	title:     'Checkboxes',
} satisfies Meta<typeof Checkbox>

type CheckboxStory = StoryObj<React.ComponentProps<typeof Checkbox> & CheckboxProps>

export const Checkbox1: CheckboxStory = {
	args: {
		label:      'Checkbox',
		isDisabled: false,
		isInvalid:  false,
	},
}
