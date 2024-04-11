import classNames from 'classnames'
import React from 'react'

import {
	type PopoverProps,
	Popover as ReactAriaPopover,
	DialogTrigger,
	OverlayArrow,
	Dialog,
} from 'react-aria-components'

import Arrow from '../../../../public/assets/icons/arrow.svg'

import styles from './popover.module.scss'

export type Props = PopoverProps & {
    children: React.ReactElement
    text: string
}

export const Popover = ({
	text,
	children,
	...props
}: Props,): React.ReactElement => {
	return (
		<DialogTrigger>
			{children}

			<ReactAriaPopover {...props} className={classNames(styles.popover, String(props.className,),)}>
				<OverlayArrow className={styles.overlayArrow}>
					<Arrow width={12} height={12} />
				</OverlayArrow>

				<Dialog className={styles.dialog}>
					{text}
				</Dialog>
			</ReactAriaPopover>
		</DialogTrigger>
	)
}

export default Popover
