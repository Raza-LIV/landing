'use client'

import React from 'react'

import {
	button,
	buttonLink,
} from './button-link.module.scss'
import Link from 'next/link'

interface IProps {
	text: string
	href?: string
	onClick?: () => void | Promise<void>
	route?: string
	type?: 'submit' | 'button'
}

const ButtonLink:React.FC<IProps> = ({text, onClick, route, href, type,},) => {
	const submitBtn: React.JSX.Element = <button type='submit' className={button}>
		{text}
	</button>
	const commonBtn: React.JSX.Element = <button type='button' className={button} onClick={onClick}>
		{text}
	</button>
	const innerRoute: React.JSX.Element = <Link href={route ?? ''} className={buttonLink}>
		<button type='button' className={button}>
			{text}
		</button>
	</Link>
	const externalLink: React.JSX.Element = <a href={href} className={buttonLink} target='_blank' rel='noopener noreferrer nofollow'>
		<button type='button' className={button}>
			{text}
		</button>
	</a>

	if (type === 'submit') {
		return submitBtn
	}
	if (typeof href === 'string') {
		return externalLink
	}
	if (typeof route === 'string') {
		return innerRoute
	}
	return	commonBtn
}

export default ButtonLink