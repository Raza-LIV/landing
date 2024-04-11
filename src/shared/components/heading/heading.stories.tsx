import type React from 'react'

import type {
	Props as HeadingProps,
} from './heading.component'
import Heading from './heading.component'

import type {
	Meta,
	StoryObj,
} from '@storybook/react'

export default {
	component: Heading,
	title:     'Headings',
} satisfies Meta<typeof Heading>

type HeadingStory = StoryObj<React.ComponentProps<typeof Heading> & HeadingProps>

export const Heading1: HeadingStory = {
	args: {
		text:  'Heading',
		level: 3,
	},
}
