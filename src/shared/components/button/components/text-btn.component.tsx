import * as React from 'react'
import classNames from 'classnames'

import Loader from '../../loader/loader.component'
import type {
	BtnBase, ButtonType,
} from '../button.types'
import {
	ButtonSizes,
} from '../button.types'

import styles from '../button.module.scss'
import {
	Button,
} from 'react-aria-components'

export type TextBtnProps<T extends ButtonType.TEXT> = {
	text: string
	size?: ButtonSizes
	fullWidth?: boolean
    btnType: T
}

const TextBtn: React.FunctionComponent<BtnBase & TextBtnProps<ButtonType.TEXT>> = ({
	text,
	isDisabled,
	isLoading,
	btnType,
	fullWidth = false,
	size = ButtonSizes.MEDIUM,
	...buttonAttributes
},) => {
	return <Button
		isDisabled={isDisabled}
		{...buttonAttributes}
		className={classNames(styles.btn, String(buttonAttributes.className,), {
			[styles.smallTextBtn]:     size === ButtonSizes.SMALL,
			[styles.mediumTextBtn]:    size === ButtonSizes.MEDIUM,
			[styles.largeTextBtn]:     size === ButtonSizes.LARGE,
			[styles.fullWidthTextBtn]: fullWidth,
		},)}
	>
		{
			isLoading ?
				<Loader loaderClass={classNames({
					[styles.smallTextLoader]:     size === ButtonSizes.SMALL,
					[styles.mediumTextLoader]:    size === ButtonSizes.MEDIUM,
					[styles.largeTextLoader]:     size === ButtonSizes.LARGE,
				},)} /> :
				text
		}
	</Button>
}

export default TextBtn
