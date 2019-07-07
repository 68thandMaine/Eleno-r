describe('contact form', () => {
  before(() => {
    cy.visit('./');
  });

  it('Selecting contact from the sidenav shows contact form', () => {
    cy.get('[data-cy=\'contactButton\']')
      .should('exist')
      .click();
    cy.get('[data-cy=\'viewName\']')
      .should('exist').and('contain', 'Contact');
  });

  it.only('The modal is not visible', () => {
    cy.selectContact();
    cy.get('[data-cy=\'modal\']')
      .should('not.exist');
  });

  it('First name is required', () => {

  });

  it('Last name is required', () => {

  });

  it('Email is required', () => {

  });

  it('Subject is required', () => {

  });

  it('Message is required', () => {

  });

  it('Submit button displays modal', () => {

  });

});