import {
	userService,
} from '../../src/services/user/user.service'

const MOCK = {
	email:            'email@pm.me',
	notValidEmail:    'email#pm.me',
	password:         'Password1234!',
	notValidPassword: 'Password1234',
}

describe('Sign up', () => {
	beforeEach(async() => {
		await userService.deleteAllUsers()
	},)

	beforeEach(() => {
		cy.visit('/sign-up',)
	},)

	it('should successfully sign up', () => {
		cy.get('input[name=email]',).type(MOCK.email,)

		cy.get('input[name=password]',).type(MOCK.password,)

		cy.get('input[name=confirmPassword]',).type(MOCK.password,)

		cy.get('button[type=submit]',).click()

		cy.get('p[role=alert]',).should('contain', `We've sent an email to ${MOCK.email}. Open it up to activate your account.`,)
	},)

	it('should not be able to sign in with an invalid email', () => {
		cy.get('input[name=email]',).type(MOCK.notValidEmail,)

		cy.get('input[name=password]',).type(MOCK.password,)

		cy.get('input[name=confirmPassword]',).type(MOCK.password,)

		cy.get('button[type=submit]',).click()

		cy.get('p[role=alert]',).should('contain', `Email is not valid`,)
	},)

	it('should not be able to sign in with an invalid password', () => {
		cy.get('input[name=email]',).type(MOCK.email,)

		cy.get('input[name=password]',).type(MOCK.notValidPassword,)

		cy.get('input[name=confirmPassword]',).type(MOCK.notValidPassword,)

		cy.get('button[type=submit]',).click()

		cy.get('p[role=alert]',).should('contain', `Password must include one digit, one uppercase letter, one lowercase letter and special symbol`,)
	},)

	it('should not be able to sign in if passwords do not match', () => {
		cy.get('input[name=email]',).type(MOCK.email,)

		cy.get('input[name=password]',).type(MOCK.password,)

		cy.get('input[name=confirmPassword]',).type(MOCK.password + 1,)

		cy.get('button[type=submit]',).click()

		cy.get('p[role=alert]',).should('contain', `Passwords don't match`,)
	},)

	it('should not be able to sign in without filling out the form', () => {
		cy.get('button[type=submit]',).click()

		cy.get('p[role=alert]',).should('contain', `Required`,)
	},)
},)
