import React from 'react'

import { Switch, } from 'react-aria-components'

import type { SWITCH_TYPES, } from '../switch.component'
import type { SwitchBase, } from '../switch.types'

import styles from '../switch.module.scss'

export type Switch1Props<T extends SWITCH_TYPES.SWITCH1> = {
	label: string
	type: T
}

const Switch1: React.FunctionComponent<SwitchBase & Switch1Props<SWITCH_TYPES.SWITCH1>> = ({
	label,
	...attributes
},) => {
	return <Switch {...attributes} className={styles.reactAriaSwitch}>
		<div className={styles.indicator} />
		<span className='visually-hidden'>{label}</span>
	</Switch>
}

export default Switch1
