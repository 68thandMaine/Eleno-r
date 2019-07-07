// Contact Form Commands

Cypress.Commands.add('fillOutContactForm_Correctly', () => {
  cy.get('[data-cy=\'firstName_Input\']').type('Charles');
  cy.get('[data-cy=\'lastName_Input\']').type('Peterson');
  cy.get('[data-cy=\'email_Input\']').type('cpeterson@yahoo.com');
  cy.get('[data-cy=\'subject_Input\']').type('Testing');
  cy.get('[data-cy=\'message_Input\']').type('Testing the message input via Cypress');
});

Cypress.Commands.add('fillOutContactForm_Incorrectly', () => {
  cy.get('[data-cy=\'firstName_Input\']').type(' ');
  cy.get('[data-cy=\'lastName_Input\']').type(' ');
  cy.get('[data-cy=\'email_Input\']').type(' ');
  cy.get('[data-cy=\'subject_Input\']').type(' ');
  cy.get('[data-cy=\'message_Input\']').type(' ');
});

