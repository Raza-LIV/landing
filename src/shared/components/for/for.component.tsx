import React from 'react'

type Props<T> = {
	each: Array<T>
	fallback?: React.ReactNode
	children: (item: T) => React.ReactNode
	getKey: (item: T) => React.Key
}

function For<T>({ each, fallback, children, getKey, }: Props<T>,): React.ReactNode {
	if (each.length === 0 && fallback) {
		return fallback
	}

	return each.map((item,) => {
		return (
			<React.Fragment key={getKey(item,)}>
				{children(item,)}
			</React.Fragment>
		)
	},)
}

export default For

