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
  it('The modal is not visible', () => {
    cy.selectContact();
    cy.get('[data-cy=\'modal\']')
      .should('not.exist');
  });

  describe('form inputs', () => {
    beforeEach(() => {
      cy.selectContact();
    });
    it.only('First name is required', () => {
      cy.get('[data-cy=\'firstName_Label\']')
        .should('contain', 'First name')
        .children().should('have.class', 'required');
      cy.get("[data-cy='btn-submit']").click();

    });
      
    it('Last name is required', () => {
      cy.get('[data-cy=\'lastName_Label\']')
        .should('contain', 'Last name')
        .children().should('have.class', 'required');
    });
      
    it('Email is required', () => {
      cy.get('[data-cy=\'email_Label\']')
        .should('contain', 'Email')
        .children().should('have.class', 'required');
    });
      
    it('Subject is required', () => {
      cy.get('[data-cy=\'subject_Label\']')
        .should('contain', 'Subject')
        .children().should('have.class', 'required');
    });
      
    it('Message is required', () => {
      cy.get('[data-cy=\'message_Label\']')
        .should('contain', 'Message')
        .children().should('have.class', 'required');
    });
  });


  it('Submit button displays modal', () => {

  });

});