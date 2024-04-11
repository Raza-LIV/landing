import React from 'react'
import type { SwitchProps,} from 'react-aria-components'

import type { Switch1Props, } from './components/switch-1.component'
import Switch1 from './components/switch-1.component'

export enum SWITCH_TYPES {
	SWITCH1 = 'SWITCH1',
}

type Props<T extends SWITCH_TYPES> = SwitchProps & React.RefAttributes<HTMLInputElement> & {
	additionalProps: T extends SWITCH_TYPES.SWITCH1
		? Switch1Props<T>
		: never
}

const Switch = <T extends SWITCH_TYPES,>({
	additionalProps,
	...buttonAttributes
}: Props<T>,): React.ReactElement => {
	const baseProps = {
		...buttonAttributes,
	}

	switch (additionalProps.type) {
	case SWITCH_TYPES.SWITCH1:
		return <Switch1 {...baseProps} {...additionalProps} />
	default:
		throw new Error('Unsupported button type',)
	}
}

export default Switch
