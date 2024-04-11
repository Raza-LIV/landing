
import React from 'react'

import Popover from './popover.component'

import type {
	Meta,
	StoryObj,
} from '@storybook/react'
import {
	Button,
	type PopoverProps,
} from 'react-aria-components'

export default {
	component: Popover,
	title:     'Popovers',
} satisfies Meta<typeof Popover>

type PopoverStory = StoryObj<React.ComponentProps<typeof Popover> & PopoverProps>

export const Input1: PopoverStory = {
	args: {
		text:       'This is popover',
	},
	render: (args,) => {
		return <Popover {...args}>
			<Button>Open popover</Button>
		</Popover>
	},
}
