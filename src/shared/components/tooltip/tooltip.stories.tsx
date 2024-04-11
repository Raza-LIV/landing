import React from 'react'

import type {
	Meta,
	StoryObj,
} from '@storybook/react'
import type {
	PopoverProps,
} from 'react-aria-components'

import Tooltip from './tooltip.component'

export default {
	component: Tooltip,
	title:     'Tooltips',
} satisfies Meta<typeof Tooltip>

type TooltipStory = StoryObj<React.ComponentProps<typeof Tooltip> & PopoverProps>

export const Tooltip1: TooltipStory = {
	args: {
		text:       'This is tooltip',
	},
	render: (args,) => {
		return 	<Tooltip variant='info' {...args}>
			<span>Trigger</span>
		</Tooltip>
	},
}
