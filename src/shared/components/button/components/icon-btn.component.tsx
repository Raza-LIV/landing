import * as React from 'react'
import classNames from 'classnames'

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
import Loader from '../../loader/loader.component'

export type IconBtnProps<T extends ButtonType.ICON> = {
	icon: React.ReactNode
	size?: ButtonSizes
    btnType: T
}

const IconBtn: React.FunctionComponent<BtnBase & IconBtnProps<ButtonType.ICON>> = ({
	icon,
	isDisabled,
	isLoading,
	btnType,
	size = ButtonSizes.MEDIUM,
	...buttonAttributes
},) => {
	return <Button
		isDisabled={isDisabled}
		{...buttonAttributes}
		className={classNames(styles.btn, styles.iconBtn, String(buttonAttributes.className,), {
			[styles.smallIconBtn]:     size === ButtonSizes.SMALL,
			[styles.mediumIconBtn]:    size === ButtonSizes.MEDIUM,
			[styles.largeIconBtn]:     size === ButtonSizes.LARGE,
		},)}
	>
		{
			isLoading ?
				<Loader loaderClass={classNames(
					{
						[styles.smallIconLoader]:     size === ButtonSizes.SMALL,
						[styles.mediumIconLoader]:    size === ButtonSizes.MEDIUM,
						[styles.largeIconLoader]:     size === ButtonSizes.LARGE,
					},)}
				/> :
				icon
		}
	</Button>
}

export default IconBtn
