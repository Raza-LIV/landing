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
import Checkbox from './checkbox.component'

describe('Checkbox', () => {
	it('should render checkbox', () => {
		render(<Checkbox label='Checkbox' />,)

		expect(screen.getByLabelText('Checkbox', {
			selector: 'input',
		},),).toBeInTheDocument()
	},)

	it('should change the state on click', () => {
		render(<Checkbox label='Checkbox' />,)

		const checkbox = screen.getByLabelText('Checkbox', {
			selector: 'input',
		},)

		fireEvent.click(checkbox,)

		expect(checkbox,).toBeChecked()
	},)

	it('should be unchecked on double click', () => {
		render(<Checkbox label='Checkbox' />,)

		const checkbox = screen.getByLabelText('Checkbox', {
			selector: 'input',
		},)

		fireEvent.click(checkbox,)
		fireEvent.click(checkbox,)

		expect(checkbox,).not.toBeChecked()
	},)

	it('should not be possible to check if disabled', () => {
		render(<Checkbox isDisabled label='Checkbox' />,)

		const checkbox = screen.getByLabelText('Checkbox', {
			selector: 'input',
		},)

		fireEvent.click(checkbox,)

		expect(checkbox,).not.toBeChecked()
	},)
},)
