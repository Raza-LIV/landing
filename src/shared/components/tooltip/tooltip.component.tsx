import React from 'react'
import type {
	SpectrumTooltipProps,
} from '@adobe/react-spectrum'
import {
	ActionButton,
	Provider,
	Tooltip as ReactAriaTooltip,
	TooltipTrigger,
	defaultTheme,
} from '@adobe/react-spectrum'
import IconPlaceholder from '../../../../public/assets/icons/icon-placeholder.svg'

import styles from './tooltip.module.scss'

export type Props = SpectrumTooltipProps & {
    children: React.ReactElement
    text: string
	delay?: number
}

export const Tooltip = ({
	text,
	children,
	delay = 0,
	...props
}: Props,): React.ReactElement => {
	return (
		<Provider theme={defaultTheme}>
			<TooltipTrigger delay={delay}>
				<ActionButton>{children}</ActionButton>

				<ReactAriaTooltip {...props}>
					<div className={styles.contentWrapper}>
						<IconPlaceholder width={13} height={13} />

						{text}
					</div>
				</ReactAriaTooltip>
			</TooltipTrigger>
		</Provider>
	)
}

export default Tooltip
