const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Acessar home iDevops', function() {
	
	it('Access login page', function() {
		cy.visit('/')
		cy.wait(2000)

	})

	it('Validate text page', function() {
		
		const textsPage = [
			   'The DevOps Culture'
			 , 'DevOps (a composite of “development” and “operations”) is a software development methodology that combines software development (Dev) with operations of information technology (Ops). Enable enterprise to deploy and deliver products and services more quickly and securely using DevOps practices.'
			 , 'In 2009 Patrick Debois named a conference devopsdays. The conference has now spread to other countries.'
		]

		// cy.expectTextArray(textsPage)
		cy.wait(2000)
		cy.verifyTextArray(textsPage)

	})

})
