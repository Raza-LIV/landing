import type React from 'react'

import { userService, } from '../../../../services/user/user.service'
import type { User, } from '../../../../services/user/user.types'

export const fetchMe = async(setter: (value: React.SetStateAction<User | null>) => void,): Promise<void> => {
	const user = await userService.getMe()

	setter(user,)
}
