import type React from 'react'

import type {
	Meta,
	StoryObj,
} from '@storybook/react'

import RadioGroup from './radio-group.component'
import type {
	Props as RadioGroupProps,
} from './radio-group.component'

import {
	DefaultRadioGroupOptions,
} from './radio-group.constants'

export default {
	component: RadioGroup,
	title:     'Radio Groups',
} satisfies Meta<typeof RadioGroup>

type RadioGroupStory = StoryObj<React.ComponentProps<typeof RadioGroup> & RadioGroupProps>

export const RadioGroup1: RadioGroupStory = {
	parameters: {
		controls: {
			exclude: /options*|radioClassName*/g,
		},
	},
	args: {
		options:    DefaultRadioGroupOptions,
		label:      'Label',
		isDisabled: false,
		isInvalid:  false,
	},
}
