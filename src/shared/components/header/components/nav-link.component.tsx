import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import {
	navLink,
	active,
} from '../header.module.scss'

interface IProps {
href: string
text: string
current: boolean
}

const NavLink:React.FC<IProps> = ({href, text, current,},) => {
	return (
		<Link	className={classNames(navLink, current && active,)} href={href}>
			{text}
		</Link>
	)
}

export default NavLink