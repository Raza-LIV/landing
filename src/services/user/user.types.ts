export enum AuthProviders {
	CREDENTIALS = 'CREDENTIALS',
	GOOGLE = 'GOOGLE',
	GITHUB = 'GITHUB',
	FACEBOOK = 'FACEBOOK',
}

export type User = {
	id: string
	avatar: string
	username: string
	email?: string
	auth_provider: AuthProviders
}
