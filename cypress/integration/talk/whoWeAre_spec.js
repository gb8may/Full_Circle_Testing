const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Acessar Who We Are do Site iDevops', function(){
	
	it('Acessar Site iDevops', function() {
		cy.visit('/')
	})

	it('Click Menu Who We Are', function() {
		cy.clickMenu('Who We Are')
		cy.wait(2000)
	})

	it('Validate text on page', function(){

		const textsPage = [
			   'Mayara Gouveia – Chief Information Officer'
			 , 'iDevOps Team'
			 , 'Our creative team'
			 , 'Ezzio Moreira – Chief Operations Officer'
			 , 'Davi de Paula – Chief Legal Officer'
		]

		// cy.expectTextArray(textsPage)
		cy.wait(2000)
		cy.verifyTextArray(textsPage)
	})
})
