import React from 'react'

import type {
	Meta,
	StoryObj,
} from '@storybook/react'

import Link, { LINK_TYPES, } from './link.component'
import type { Link1Props, } from './components/link1.component'
import type { Link2Props, } from './components/link2.component'
import type { Link3Props, } from './components/link3.component'
import { LINK3_VARIANTS, } from './components/link3.component'

export default {
	component: Link,
	title:     'Links',
} satisfies Meta<typeof Link>

type Link1Story = StoryObj<Omit<React.ComponentProps<typeof Link>, 'additionalProps'> & Link1Props<LINK_TYPES.LINK1>>
type Link2Story = StoryObj<Omit<React.ComponentProps<typeof Link>, 'additionalProps'> & Link2Props<LINK_TYPES.LINK2>>
type Link3Story = StoryObj<Omit<React.ComponentProps<typeof Link>, 'additionalProps'> & Link3Props<LINK_TYPES.LINK3>>

export const Link1: Link1Story = {
	parameters: {
		controls: {
			exclude: /additionalProps*/g,
		},
	},
	args: {
		text: 'Link',
	},
	render: (args,) => {
		const {
			...props
		} = args

		return <Link {...props} href='google.com' additionalProps={{
			type:  LINK_TYPES.LINK1,
			text: 'Link',
		}} />
	},
}

export const Link2: Link2Story = {
	parameters: {
		controls: {
			exclude: /additionalProps*/g,
		},
	},
	args: {
		text:     'Link2',
		isActive: false,
	},
	render: (args,) => {
		const {
			isActive,
			text,
			...props
		} = args

		return <Link text={text} {...props} href='google.com' additionalProps={{
			type:  LINK_TYPES.LINK2,
			text,
			isActive,
		}} />
	},
}
export const Link3: Link3Story = {
	parameters: {
		controls: {
			exclude: /additionalProps*/g,
		},
	},
	args: {
		text:        'Link3',
		isActive:    false,
		variant:     LINK3_VARIANTS.PRIMARY,
		iconVisible: false,
	},
	argTypes: {
		variant: {
			options: Object.keys(LINK3_VARIANTS,),
			mapping: LINK3_VARIANTS,
			control: {
				type:   'select',
				labels: {
					Primary:   LINK3_VARIANTS.PRIMARY,
					Secondary: LINK3_VARIANTS.SECONDARY,
				},
			},
		},
	},
	render: (args,) => {
		const {
			isActive,
			text,
			iconVisible,
			variant,
			...props
		} = args

		return <Link text={text} {...props} href='google.com' additionalProps={{
			type:  LINK_TYPES.LINK3,
			text,
			isActive,
			iconVisible,
			variant,
		}} />
	},
}
