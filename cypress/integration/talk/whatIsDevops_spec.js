const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Acessar What is DevOps', function(){
	
	it('Acessar Site iDevOps', function() {
		cy.visit('/')
	})

	it('Click Menu What is DevOps', function() {
		cy.clickMenu('What is DevOps')
		cy.wait(2000)
	})

	it('Validate text on page', function(){

		const textsPage = [
			   'What is DevOps'
			 , 'Definition'
			 , 'Toolchains'
			 , 'Goals'
			 , 'Benefits'
			 , 'DevOps as a Job Title'
			 , 'DevOps Infrastructure'
			 , 'With all this tools available, the DevOps Engineer are free to decide the best solution for your companie infrastructure.'
		]

		// cy.expectTextArray(textsPage)
		cy.wait(2000)
		cy.verifyTextArray(textsPage)
	})
})
