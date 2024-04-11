import {
	cleanEnv,
	str,
	num,
} from 'envalid'

export default function checkEnv(): void {
	cleanEnv(process.env, {
		PORT:                              num(),
		NEXT_PUBLIC_BACKEND_URL:           str(),
		NEXT_PUBLIC_GOOGLE_CLIENT_ID:      str(),
		NEXT_PUBLIC_GOOGLE_REDIRECT_URL:   str(),
		NEXT_PUBLIC_GOOGLE_OAUTH_URL:      str(),
		NEXT_PUBLIC_GITHUB_CLIENT_ID:      str(),
		NEXT_PUBLIC_GITHUB_REDIRECT_URL:   str(),
		NEXT_PUBLIC_GITHUB_OAUTH_URL:      str(),
		NEXT_PUBLIC_FACEBOOK_CLIENT_ID:    str(),
		NEXT_PUBLIC_FACEBOOK_REDIRECT_URL: str(),
		NEXT_PUBLIC_FACEBOOK_OAUTH_URL:    str(),
	},)
}
