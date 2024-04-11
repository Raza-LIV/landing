import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import type { LINK_TYPES, } from '../link.component'
import type { LinkBase, } from '../link.types'

import styles from '../link.module.scss'

export type Link2Props<T extends LINK_TYPES.LINK2> = {
	text: string
	isActive: boolean
	type: T
}

const Link2: React.FunctionComponent<LinkBase & Link2Props<LINK_TYPES.LINK2>> = ({
	text,
	isActive,
	...attributes
},) => {
	return <Link {...attributes} className={classNames(styles.link2, attributes.className, {
		[styles.link2Selected]: isActive,
	},)}>
		{text}
	</Link>
}

export default Link2
