import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import type { LINK_TYPES, } from '../link.component'
import type { LinkBase, } from '../link.types'

import styles from '../link.module.scss'

export type Link1Props<T extends LINK_TYPES.LINK1> = {
	text: string
	type: T
}

const Link1: React.FunctionComponent<LinkBase & Link1Props<LINK_TYPES.LINK1>> = ({
	text,
	...attributes
},) => {
	return <Link {...attributes} className={classNames(styles.link, attributes.className,)}>
		{text}
	</Link>
}

export default Link1
