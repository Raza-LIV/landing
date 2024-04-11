import type {
	ButtonProps,
} from 'react-aria-components'

export enum ButtonType {
	TEXT = 'text',
	ICON = 'icon',
	BTN1 = 'btn-1'
}

export type BtnBase = ButtonProps & {
	isDisabled: boolean
	isLoading: boolean
}

export enum ButtonSizes {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large'
}
