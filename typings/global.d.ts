declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string
        NEXT_PUBLIC_BACKEND_URL?: string
        NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
        NEXT_PUBLIC_GOOGLE_REDIRECT_URL: string
        NEXT_PUBLIC_GOOGLE_OAUTH_URL: string
        NEXT_PUBLIC_GITHUB_CLIENT_ID: string
        NEXT_PUBLIC_GITHUB_REDIRECT_URL: string
        NEXT_PUBLIC_GITHUB_OAUTH_URL: string
        NEXT_PUBLIC_FACEBOOK_CLIENT_ID: string
        NEXT_PUBLIC_FACEBOOK_REDIRECT_URL: string
        NEXT_PUBLIC_FACEBOOK_OAUTH_URL: string
    }
}
