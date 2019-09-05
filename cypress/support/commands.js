// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, pass) => {
    cy.get(".loginLink").click()
    cy.get('#email').type(email)
    cy.get('#enha').type(pass)
    cy.get('#submitLoginModal').click()
    cy.contains('Olá, Jehny')
    cy.wait(2000)
    // cy.screenshot('Home', 'fullPage')
})

Cypress.Commands.add('clickMenu', (menu) => {
  cy.contains(menu)
  cy.get('a').contains(menu).click({ force: true }) // this comand force click in element even this element stay disable or display none by css
  
})

Cypress.Commands.add('logOut', (text) => {
  cy.get('a').contains(text).click({ force: true })
})

Cypress.Commands.add('verifyTextArray', array => {
  array.forEach(text => {
    cy.contains(text)
  });
})
