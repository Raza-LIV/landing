import React from 'react'

import { Button, } from 'react-aria-components'
import classNames from 'classnames'

import IconPlaceholder from '../../../../../public/assets/icons/icon-placeholder.svg'

import type { BtnBase, ButtonType, } from '../button.types'

import Show from '../../show/show.component'
import Loader from '../../loader/loader.component'

import styles from '../button.module.scss'

export enum BTN1_TYPES {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	THERDLY = 'therdly',
	CANCEL = 'cancel'
}

export type Btn1Props<T extends ButtonType.BTN1> = {
	text: string
	leftIconVisible: boolean
	rightIconVisible: boolean
	variant?: BTN1_TYPES
    btnType: T
}

const Btn1: React.FunctionComponent<BtnBase & Btn1Props<ButtonType.BTN1>> = ({
	text,
	leftIconVisible,
	rightIconVisible,
	isDisabled,
	isLoading,
	variant = BTN1_TYPES.PRIMARY,
	btnType,
	...buttonAttributes
},) => {
	return <Button
		isDisabled={isDisabled}
		{...buttonAttributes}
		className={classNames(styles.btn1, {
			[styles.btn1Secondary]: variant === BTN1_TYPES.SECONDARY,
			[styles.btn1Therdly]:   variant === BTN1_TYPES.THERDLY,
			[styles.btn1cancel]:    variant === BTN1_TYPES.CANCEL,
		},)}
	>
		<Show when={!isLoading} fallback={<Loader loaderClass={styles.btn1Loader} />}>
			<Show when={leftIconVisible} fallback={null}>
				<IconPlaceholder width={16} height={16} />
			</Show>
			{ text }
			<Show when={rightIconVisible} fallback={null}>
				<IconPlaceholder width={16} height={16} />
			</Show>
		</Show>
	</Button>
}

export default Btn1
