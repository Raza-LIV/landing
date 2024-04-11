export type ChangeEmailBody = {
	newEmail: string
}

export type ChangeEmailConfirmBody = {
	oldEmailCode: string
	newEmailCode: string
}
