import React from 'react'

import type { Meta, StoryObj, } from '@storybook/react'

import { SWITCH_TYPES, } from './switch.component'
import Switch from './switch.component'
import type { Switch1Props, } from './components/switch-1.component'

export default {
	component: Switch,
	title:     'Switch',
} satisfies Meta<typeof Switch>

type Switch1Story = StoryObj<Omit<React.ComponentProps<typeof Switch>, 'additionalProps'> & Switch1Props<SWITCH_TYPES.SWITCH1>>

export const Btn1: Switch1Story = {
	parameters: {
		controls: {
			exclude: /additionalProps*/g,
		},
	},
	args: {
		isDisabled: false,
	},
	render: (args,) => {
		const {
			...props
		} = args

		return <Switch {...props} additionalProps={{
			type:  SWITCH_TYPES.SWITCH1,
			label: 'Switch',
		}} />
	},
}
