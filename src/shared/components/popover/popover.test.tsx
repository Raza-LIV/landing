import {
	fireEvent,
	render,
	screen,
} from '@testing-library/react'

import {
	expect,
	it,
	describe,
} from '@jest/globals'

import Popover from './popover.component'

import {
	Button,
} from 'react-aria-components'

describe('Popover', () => {
	it('should render popover', () => {
		const popoverText = 'This is popover'

		render(<Popover text={popoverText}>
			<Button>Open popover</Button>
		</Popover>,)

		const trigger = screen.getByRole('button',)

		fireEvent.click(trigger,)

		const popover = screen.getByRole('dialog',)

		expect(popover,).toHaveTextContent(popoverText,)
	},)
},)
