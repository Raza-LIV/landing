import {
	createI18nServer,
} from 'next-international/server'

export const {
	getI18n,
	getScopedI18n,
	getCurrentLocale,
} = createI18nServer({
	en: async() => {
		return import('../en')
	},
	ru: async() => {
		return import('../ru')
	},
},)
