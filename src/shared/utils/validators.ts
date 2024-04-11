/* eslint-disable no-undefined */

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$/!%\\*?[\]&()#{}№=;+\-:.,€£¥_^§~<|>])[A-Za-z\d@$/!%\\*?[\]&()#{}№=;+\-:.,€£¥_^§~<|>]{8,}$/

type PasswordMatchValues = {
	password: string,
	confirmPassword: string
}

export const required = (value: string,): string | undefined => {
	return value ?
		undefined :
		'Required'
}

export const email = (value: string,): string | undefined => {
	const email = emailRegex.test(value,)

	return email ?
		undefined :
		'Email is not valid'
}

export const password = (value: string,): string | undefined => {
	const password = passwordRegex.test(value,)

	return password ?
		undefined :
		'Password must include one digit, one uppercase letter, one lowercase letter and special symbol'
}

export const passwordsMatch = (values: unknown, allValues: unknown,): string | undefined => {
	const passwords = allValues as PasswordMatchValues

	return passwords.password === passwords.confirmPassword ?
		undefined :
		'Passwords don\'t match'
}

export const maxLength = (limit: number,) => {
	return (value: string,): string | undefined => {
		const isValid = value.length <= limit

		return isValid ?
			undefined :
			'Username is too long'
	}
}
