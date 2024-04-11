import {
	render,
	screen,
	fireEvent,
} from '@testing-library/react'

import {
	expect,
	it,
	describe,
} from '@jest/globals'
import Input from './input.component'

describe('Input', () => {
	it('should render input', () => {
		render(<Input label='Input' />,)

		expect(screen.getByLabelText('Input', {
			selector: 'input',
		},),).toBeInTheDocument()
	},)

	it('should change input on user type', () => {
		render(<Input label='Input' />,)

		const input = screen.getByLabelText('Input', {
			selector: 'input',
		},)

		const value = 'Text'

		fireEvent.change(input, {
			target: {
				value,
			},
		},)

		expect(input,).toHaveValue(value,)
	},)

	it('should not be able to type if input is disabled', () => {
		render(<Input label='Input' disabled />,)

		const input = screen.getByLabelText('Input', {
			selector: 'input',
		},)

		const value = 'Text'

		fireEvent.change(input, {
			target: {
				value,
			},
		},)

		// eslint-disable-next-line no-undefined
		expect(input,).toHaveValue(undefined,)
	},)
},)
