'use client'

import React from 'react'

import type {
	HeaderProps,
} from '@adobe/react-spectrum'
import {
	Heading as ReactSpectrumHeading,
} from '@adobe/react-spectrum'

import styles from './heading.module.scss'
import classNames from 'classnames'

export type Props = Omit<HeaderProps, 'children'> & {
    text: string
    level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = ({
	text,
	level = 3,
	...props
}: Props,): React.ReactElement => {
	return (
		<span className={classNames(styles.heading,)}>
			<ReactSpectrumHeading {...props} level={level}>{text}</ReactSpectrumHeading>
		</span>
	)
}

export default Heading
