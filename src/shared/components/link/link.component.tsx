import React from 'react'

import type { Link1Props, } from './components/link1.component'
import Link1 from './components/link1.component'
import type { LinkBase, } from './link.types'
import type { Link2Props, } from './components/link2.component'
import Link2 from './components/link2.component'
import type { Link3Props, } from './components/link3.component'
import Link3 from './components/link3.component'

export enum LINK_TYPES {
	LINK1 = 'LINK1',
	LINK2 = 'LINK2',
	LINK3 = 'LINK3'
}

export type Props<T extends LINK_TYPES> = LinkBase & {
    text: string
	additionalProps: T extends LINK_TYPES.LINK1
		? Link1Props<T>
		: T extends LINK_TYPES.LINK2
		? Link2Props<T>
		: T extends LINK_TYPES.LINK3
		? Link3Props<T>
		: never
}

const Link = <T extends LINK_TYPES,>({
	additionalProps,
	...buttonAttributes
}: Props<T>,): React.ReactElement => {
	const baseProps = {
		...buttonAttributes,
	}

	switch (additionalProps.type) {
	case LINK_TYPES.LINK1:
		return <Link1 {...baseProps} {...additionalProps} />
	case LINK_TYPES.LINK2:
		return <Link2 {...baseProps} {...additionalProps} />
	case LINK_TYPES.LINK3:
		return <Link3 {...baseProps} {...additionalProps}/>
	default:
		throw new Error('Unsupported link type',)
	}
}

export default Link
