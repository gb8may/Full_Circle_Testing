const user = Cypress.env('user')
const pass = Cypress.env('pass')
describe('Acessar Main DevOps Tools do Site iDevops', function(){
	
	it('Acessar Site iDevops', function() {
		cy.visit('/')
	})

	it('Click Menu Main DevOps Tools', function() {
		cy.clickMenu('Main DevOps Tools');
		cy.wait(2000)
	})

	it('Validate text on page', function(){

		const textsPage = [
			   'Main DevOps Tools'
			 , 'Jenkins'
			 , 'Ansible'
			 , 'Docker'
			 , 'OpenShift'
			 , 'AWS Services'
			 , 'GitHub'
			 , 'Elastic Search'
			 , 'Zabbix'
			 , 'Rocket Chat'
			 , 'Microsoft Azure'
			 , 'Vagrant'
			 , 'Grafana'
		]

		// cy.expectTextArray(textsPage)
		cy.verifyTextArray(textsPage)
		cy.wait(2000)
	})
})
