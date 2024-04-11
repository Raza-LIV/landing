export const localePathBuilder = (path: string,): string => {
	return `/${path.split('/',).slice(2,)
		.join('/',)}`
}