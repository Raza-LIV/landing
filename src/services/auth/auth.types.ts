export type SignUpReturn = {
    token: string
    message: string
}

export type SignUpProps = {
    email: string
    password: string
}

export type SignInProps = {
    email: string
    password: string
}

export type CheckReturn = {
    auth: boolean
}

export type GoogleAuthSearchParams = {
    redirect_uri: string
    client_id: string
    access_type: 'online' | 'offline'
    response_type: 'code'
    prompt: 'consent'
    scope: string
}

export type GithubAuthSearchParams = {
    client_id: string
    scope: string
}

export type FacebookAuthSearchParams = {
    client_id: string
    redirect_uri: string
    scope: string
}
