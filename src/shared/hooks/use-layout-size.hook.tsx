import React, { useState, useEffect, } from 'react'
import { ELayoutSize, } from '../types/layout-sizes.enum'

interface IHookOutput {
	deviceType: ELayoutSize,
	isMobile: boolean
	isTablet: boolean
	isDesktop: boolean
}

export const useLayoutSize = ():IHookOutput => {
	const [deviceType, setDeviceType,] = useState<ELayoutSize>(ELayoutSize.DESKTOP,)

	useEffect(() => {
		const handleResize = (): void => {
			const width = window.innerWidth
			if (width <= 767) {
				setDeviceType(ELayoutSize.MOBILE,)
			} else if (width <= 1025) {
				setDeviceType(ELayoutSize.TABLET,)
			} else {
				setDeviceType(ELayoutSize.DESKTOP,)
			}
		}

		handleResize()
		window.addEventListener('resize', handleResize,)
		return () => {
			window.removeEventListener('resize', handleResize,)
		}
	}, [],)

	return {
		deviceType,
		isMobile:   deviceType === ELayoutSize.MOBILE,
		isTablet:   deviceType === ELayoutSize.TABLET,
		isDesktop:  deviceType === ELayoutSize.DESKTOP,
	}
}