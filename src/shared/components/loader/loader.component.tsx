import React from 'react'

import classNames from 'classnames'

import styles from './loader.module.scss'

interface ILoaderProps {
	loaderClass?: string
}

const Loader: React.FunctionComponent<ILoaderProps> = ({
	loaderClass,
},) => {
	return (
		<div data-testid='loader' className={classNames(styles.loader, loaderClass,)} />
	)
}

export default Loader
