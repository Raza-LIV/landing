'use client'

import React from 'react'
import {
	usePathname,
} from 'next/navigation'
import classNames from 'classnames'

import NavLink from './nav-link.component'
import LinkIcon from '../../../../../public/assets/icons/arrow-down.svg'

import { useI18n, } from '@/locales/tools/client'
import {
	active,
	linkIcon,
	linkWrapper,
	navText,
	navigation,
} from '../header.module.scss'

const MainNavigation:React.FC = () => {
	const pathname = usePathname()
	const t = useI18n()

	return (
		<nav className={navigation}>
			<NavLink
				href='/home'
				text={t('header.home',)}
				current={pathname.includes('/home',)}
			/>
			<div className={classNames(linkWrapper,(pathname.includes('/league',) || pathname.includes('/predict',)) && active,)}>
				<span className={navText}									>
					{t('header.products',)}
				</span>
				<LinkIcon className={linkIcon}/>
			</div>
			<NavLink
				href='/protocol'
				text={t('header.protocol',)}
				current={pathname.includes('/protocol',)}
			/>
			<NavLink
				href='/reserve'
				text={t('header.proofOfReserve',)}
				current={pathname.includes('/reserve',)}
			/>
			<NavLink
				href='/faq'
				text={t('header.faq',)}
				current={pathname.includes('/faq',)}
			/>
		</nav>
	)
}

export default MainNavigation