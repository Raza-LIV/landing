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

import RadioGroup from './radio-group.component'

import {
	DefaultRadioGroupOptions,
} from './radio-group.constants'

describe('RadioGroup', () => {
	it('should render radio group', () => {
		render(<RadioGroup options={DefaultRadioGroupOptions} label='Radio Group Label' />,)

		expect(screen.getByRole('radio', {
			name:    'Label 1',
			checked: false,
		},),).toBeInTheDocument()
		expect(screen.getByRole('radio', {
			name:    'Label 2',
			checked: false,
		},),).toBeInTheDocument()
	},)

	it('should select an option on click', () => {
		render(<RadioGroup options={DefaultRadioGroupOptions} label='Radio Group Label' />,)

		const firstOption = screen.getByRole('radio', {
			name:    'Label 1',
			checked: false,
		},)

		fireEvent.click(firstOption,)

		expect(screen.getByRole('radio', {
			name:    'Label 1',
			checked: true,
		},),).toBeInTheDocument()
		expect(screen.getByRole('radio', {
			name:    'Label 2',
			checked: false,
		},),).toBeInTheDocument()
	},)

	it('should be reselected on second select', () => {
		render(<RadioGroup options={DefaultRadioGroupOptions} label='Radio Group Label' />,)

		const firstOption = screen.getByRole('radio', {
			name:    'Label 1',
			checked: false,
		},)
		const secondOption = screen.getByRole('radio', {
			name:    'Label 2',
			checked: false,
		},)

		fireEvent.click(firstOption,)
		fireEvent.click(secondOption,)

		expect(screen.getByRole('radio', {
			name:    'Label 1',
			checked: false,
		},),).toBeInTheDocument()
		expect(screen.getByRole('radio', {
			name:    'Label 2',
			checked: true,
		},),).toBeInTheDocument()
	},)

	it('should not be able to select option if group is disabled', () => {
		render(<RadioGroup options={DefaultRadioGroupOptions} isDisabled label='Radio Group Label' />,)

		const firstOption = screen.getByRole('radio', {
			name:    'Label 1',
			checked: false,
		},)
		const secondOption = screen.getByRole('radio', {
			name:    'Label 2',
			checked: false,
		},)

		fireEvent.click(firstOption,)
		fireEvent.click(secondOption,)

		expect(screen.getByRole('radio', {
			name:    'Label 1',
			checked: false,
		},),).toBeInTheDocument()
		expect(screen.getByRole('radio', {
			name:    'Label 2',
			checked: false,
		},),).toBeInTheDocument()
	},)
},)
