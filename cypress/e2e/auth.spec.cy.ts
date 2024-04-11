describe('Auth', () => {
	beforeEach(() => {
		cy.visit('/auth',)
	},)

	it('should navigate to sign in', () => {
		cy.get('a[href*=sign-in]',).click()

		cy.url().should('include', '/sign-in',)
	},)

	it('should navigate to sign up', () => {
		cy.get('a[href*=sign-up]',).click()

		cy.url().should('include', '/sign-up',)
	},)
},)
