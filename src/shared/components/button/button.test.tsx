import {
	render,
	screen,
} from '@testing-library/react'

import Button from './button.component'
import {
	ButtonType,
} from './button.types'

import {
	expect,
	it,
	describe,
} from '@jest/globals'

describe('Button', () => {
	it('should render primary button', () => {
		render(<Button
			additionalProps={{
				text:    'Button',
				btnType: ButtonType.TEXT,
			}}
		/>,)

		expect(screen.getByRole('button',),).toHaveTextContent('Button',)
	},)

	it('should render disabled button', () => {
		render(<Button
			isDisabled
			additionalProps={{
				text:    'Button',
				btnType: ButtonType.TEXT,
			}}
		/>,)

		expect(screen.getByRole('button',),).toBeDisabled()
	},)

	it('should render loader when have loading state', () => {
		render(<Button
			loading
			additionalProps={{
				text:    'Button',
				btnType: ButtonType.TEXT,
			}}
		/>,)

		expect(screen.getByTestId('loader',),).toBeInTheDocument()
	},)
},)

