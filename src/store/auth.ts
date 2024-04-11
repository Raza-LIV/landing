import {
	create,
} from 'zustand'

interface IAuthState {
	auth: boolean | null
	setAuth: (state: boolean) => void
}

export const useAuth = create<IAuthState>((set,) => {
	return {
		auth:    null,
		setAuth: (state: boolean,): void => {
			set({
				auth: state,
			},)
		},
	}
},)
