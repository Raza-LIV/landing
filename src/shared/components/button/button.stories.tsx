import React from 'react'

import type {
	Meta,
	StoryObj,
} from '@storybook/react'

import type {
	TextBtnProps,
} from './components/text-btn.component'

import Button from './button.component'
import {
	ButtonSizes,
	ButtonType,
} from './button.types'
import type {
	IconBtnProps,
} from './components/icon-btn.component'
import Icon from '../../../../public/assets/icons/close.svg'
import type { Btn1Props, } from './components/btn-1.component'
import { BTN1_TYPES, } from './components/btn-1.component'

export default {
	component: Button,
	title:     'Buttons',
} satisfies Meta<typeof Button>

type TextBtnStory = StoryObj<Omit<React.ComponentProps<typeof Button>, 'additionalProps'> & TextBtnProps<ButtonType.TEXT>>
type IconBtnStory = StoryObj<Omit<React.ComponentProps<typeof Button>, 'additionalProps'> & IconBtnProps<ButtonType.ICON>>
type Btn1Story = StoryObj<Omit<React.ComponentProps<typeof Button>, 'additionalProps'> & Btn1Props<ButtonType.BTN1>>

export const TextButton1: TextBtnStory = {
	parameters: {
		controls: {
			exclude: /additionalProps*/g,
		},
	},
	args: {
		isDisabled: false,
		loading:    false,
		text:       'Button',
		size:       ButtonSizes.MEDIUM,
	},
	argTypes: {
		isDisabled: {
			control: 'boolean',
		},
		loading: {
			control: 'boolean',
			if:      {
				arg:    'isDisabled',
				truthy: false,
			},
		},
		text: {
			control: 'text',
		},
		size: {
			options: ButtonSizes,
			control: {
				type: 'inline-radio',
			},
		},
	},
	render: (args,) => {
		const {
			text,
			size,
			...props
		} = args

		return <Button {...props} additionalProps={{
			btnType: ButtonType.TEXT,
			text,
			size,
		}} />
	},
}

export const IconButton1: IconBtnStory = {
	parameters: {
		controls: {
			exclude: /additionalProps*/g,
		},
	},
	args: {
		isDisabled: false,
		loading:    false,
		size:       ButtonSizes.MEDIUM,
	},
	argTypes: {
		isDisabled: {
			control: 'boolean',
		},
		loading: {
			control: 'boolean',
			if:      {
				arg:    'isDisabled',
				truthy: false,
			},
		},
		size: {
			options: ButtonSizes,
			control: {
				type: 'inline-radio',
			},
		},
	},
	render: (args,) => {
		const {
			size,
			...props
		} = args

		return <Button {...props} additionalProps={{
			btnType: ButtonType.ICON,
			icon:    <Icon />,
			size,
		}} />
	},
}

export const Btn1: Btn1Story = {
	parameters: {
		controls: {
			exclude: /additionalProps*/g,
		},
	},
	args: {
		isDisabled:       false,
		leftIconVisible:  false,
		rightIconVisible: false,
		loading:          false,
		text:             'Button',
		variant:          BTN1_TYPES.PRIMARY,
	},
	argTypes: {
		variant: {
			options: Object.keys(BTN1_TYPES,),
			mapping: BTN1_TYPES,
			control: {
				type:   'select',
				labels: {
					Primary:   'primary',
					Secondary: 'secondary',
					Therdly:   'therdly',
					Cancel:    'cancel',
				},
			},
		},
	},
	render: (args,) => {
		const {
			leftIconVisible,
			rightIconVisible,
			text,
			variant,
			...props
		} = args

		return <Button {...props} additionalProps={{
			btnType: ButtonType.BTN1,
			text,
			leftIconVisible,
			rightIconVisible,
			variant,
		}} />
	},
}
