// Selects the contact form 
Cypress.Commands.add('selectContact', () => {
  cy.get('[data-cy=\'contactButton\']').click();
})