import {
	HttpFactoryService,
} from '../../shared/services/http-factory.service'
import type {
	HttpService,
} from '../../shared/services/http.service'
import type {
	Message,
} from '../../shared/types/types'

import type {
	CheckReturn,
	FacebookAuthSearchParams,
	GithubAuthSearchParams,
	GoogleAuthSearchParams,
	SignInProps,
	SignUpProps,
} from './auth.types'
import type {
	SignUpReturn,
} from './auth.types'

class AuthService {
	constructor(private readonly httpService: HttpService,) {
		this.httpService = httpService
	}

	private readonly module = 'auth'

	public async signUp(body: SignUpProps,): Promise<SignUpReturn> {
		return this.httpService.post(`${this.module}/sign-up`, body,)
	}

	public async emailActivation(token: string,): Promise<Message> {
		return this.httpService.get(`${this.module}/email-activation/${token}`,)
	}

	public async signIn(body: SignInProps,): Promise<Message> {
		return this.httpService.post(`${this.module}/credentials`, body,)
	}

	public async logout(): Promise<Message> {
		return this.httpService.delete(`${this.module}/logout`,)
	}

	public async check(): Promise<CheckReturn> {
		return this.httpService.get(`${this.module}/check`,)
	}

	public getGoogleOauthUrl(): string {
		const searchParams = {
			redirect_uri:  process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL,
			client_id:     process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			access_type:   'offline',
			response_type: 'code',
			prompt:        'consent',
			scope:         [
				'https://www.googleapis.com/auth/userinfo.email',
				'https://www.googleapis.com/auth/userinfo.profile',
			].join(' ',),
		} satisfies GoogleAuthSearchParams

		return this.httpService.createQueryLink(process.env.NEXT_PUBLIC_GOOGLE_OAUTH_URL, searchParams,)
	}

	public getGithubOauthUrl(): string {
		const searchParams = {
			client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
			scope:     'read:user',
		} satisfies GithubAuthSearchParams

		return this.httpService.createQueryLink(process.env.NEXT_PUBLIC_GITHUB_OAUTH_URL, searchParams,)
	}

	public getFacebookOauthUrl(): string {
		const searchParams = {
			client_id:    process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
			redirect_uri: process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URL,
			scope:        ['email',].join(' ',),
		} satisfies FacebookAuthSearchParams

		return this.httpService.createQueryLink(process.env.NEXT_PUBLIC_FACEBOOK_OAUTH_URL, searchParams,)
	}
}

export const authService = new AuthService(new HttpFactoryService().createHttpService(),)
