import {
	userService,
} from '../../src/services/user/user.service'
import {
	authService,
} from '../../src/services/auth/auth.service'
import {
	emailConfirmationService,
} from '../../src/services/email-confirmation/email-confirmation.service'

const MOCK = {
	email:            'email@pm.me',
	notValidEmail:    'email#pm.me',
	notValidPassword: 'Password1234',
	password:         'Password1234!',
	wrongPassword:    'Password1234@',
}

describe('Sign in', () => {
	beforeEach(async() => {
		await userService.deleteAllUsers()

		await authService.signUp(MOCK,)

		await emailConfirmationService.activateEmail(MOCK.email,)
	},)

	beforeEach(() => {
		cy.visit('/sign-in',)
	},)

	it('should successfully sign in', () => {
		cy.get('input[name=email]',).type(MOCK.email,)

		cy.get('input[name=password]',).type(MOCK.password,)

		cy.get('button[type=submit]',).click()

		cy.url().should('include', '/home',)
	},)

	it('should not be able to sign in with incorrect credentials', () => {
		cy.get('input[name=email]',).type(MOCK.email,)

		cy.get('input[name=password]',).type(MOCK.wrongPassword,)

		cy.get('button[type=submit]',).click()

		cy.url().should('include', '/sign-in',)
	},)

	it('should not be able to access the sign-in page after a successful sign-in', () => {
		cy.get('input[name=email]',).type(MOCK.email,)

		cy.get('input[name=password]',).type(MOCK.password,)

		cy.get('button[type=submit]',).click()

		cy.url().should('include', '/home',)

		cy.visit('/sign-in',)

		cy.url().should('include', '/home',)
	},)

	it('should not be able to provide an invalid email', () => {
		cy.get('input[name=email]',).type(MOCK.notValidEmail,)

		cy.get('input[name=password]',).type(MOCK.wrongPassword,)

		cy.get('button[type=submit]',).click()

		cy.url().should('include', '/sign-in',)

		cy.get('p[role=alert]',).should('contain', `Email is not valid`,)
	},)

	it('should not be able to provide an invalid password', () => {
		cy.get('input[name=email]',).type(MOCK.email,)

		cy.get('input[name=password]',).type(MOCK.notValidPassword,)

		cy.get('button[type=submit]',).click()

		cy.url().should('include', '/sign-in',)

		cy.get('p[role=alert]',).should('contain', `Password must include one digit, one uppercase letter, one lowercase letter and special symbol`,)
	},)
},)
