import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import type { LINK_TYPES, } from '../link.component'
import type { LinkBase, } from '../link.types'
import Show from '../../show/show.component'
import IconPlaceholder from '../../../../../public/assets/icons/icon-placeholder.svg'

import styles from '../link.module.scss'

export enum LINK3_VARIANTS {
	PRIMARY = 'PRIMARY',
	SECONDARY = 'SECONDARY',
}

export type Link3Props<T extends LINK_TYPES.LINK3> = {
	text: string
	isActive: boolean
	iconVisible: boolean
	variant: LINK3_VARIANTS
	type: T
}

const Link3: React.FunctionComponent<LinkBase & Link3Props<LINK_TYPES.LINK3>> = ({
	text,
	isActive,
	iconVisible,
	variant,
	...attributes
},) => {
	return <Link {...attributes} className={classNames(styles.link3, attributes.className, {
		[styles.link3Selected]:  isActive,
		[styles.link3Secondary]: variant === LINK3_VARIANTS.SECONDARY,
	},)}>
		<Show when={iconVisible} fallback={null}>
			<IconPlaceholder width={16} height={16} />
		</Show>
		{text}
	</Link>
}

export default Link3
