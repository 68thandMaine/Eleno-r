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
    it('First name is required', () => {
      cy.get('[data-cy=\'firstName_Label\']')
        .should('contain', 'First name')
        .children().should('have.class', 'required');
      cy.get('[data-cy=\'btn-submit\']').click();
      cy.get('[data-cy=\'modal\']')
        .should('not.exist');
      cy.get('[data-cy="firstName_Input"]')
        .should('have.class', 'required')
        .and('have.css', 'border-color')
        .and('eq','rgb(255, 0, 0)');
    });
      
    it('Last name is required', () => {
      cy.get('[data-cy=\'lastName_Label\']')
        .should('contain', 'Last name')
        .children().should('have.class', 'required');
      cy.get('[data-cy=\'btn-submit\']').click();
      cy.get('[data-cy=\'modal\']')
        .should('not.exist');
      cy.get('[data-cy="lastName_Input"]')
        .should('have.class', 'required')
        .and('have.css', 'border-color')
        .and('eq','rgb(255, 0, 0)');
    });
      
    it('Email is required', () => {
      cy.get('[data-cy=\'email_Label\']')
        .should('contain', 'Email')
        .children().should('have.class', 'required');
      cy.get('[data-cy=\'btn-submit\']').click();
      cy.get('[data-cy=\'modal\']')
        .should('not.exist');
      cy.get('[data-cy="email_Input"]')
        .should('have.class', 'required')
        .and('have.css', 'border-color')
        .and('eq','rgb(255, 0, 0)');
    });
      
    it('Subject is required', () => {
      cy.get('[data-cy=\'subject_Label\']')
        .should('contain', 'Subject')
        .children().should('have.class', 'required');
      cy.get('[data-cy=\'btn-submit\']').click();
      cy.get('[data-cy=\'modal\']')
        .should('not.exist');
      cy.get('[data-cy="subject_Input"]')
        .should('have.class', 'required')
        .and('have.css', 'border-color')
        .and('eq','rgb(255, 0, 0)');
    });
      
    it('Message is required', () => {
      cy.get('[data-cy=\'message_Label\']')
        .should('contain', 'Message')
        .children().should('have.class', 'required');
      cy.get('[data-cy=\'btn-submit\']').click();
      cy.get('[data-cy=\'modal\']')
        .should('not.exist');
      cy.get('[data-cy="message_Input"]')
        .should('have.class', 'required')
        .and('have.css', 'border-color')
        .and('eq','rgb(255, 0, 0)');
    });
  });


  describe('modal behavior', () => {
    beforeEach(()=> {
      cy.reload();
    });
    it('improper form submission returnst the modal and failure message', () => {
      cy.selectContact();
      cy.fillOutContactForm_Incorrectly();
      cy.get('[data-cy=\'btn-submit\']').click();
      cy.get('[data-cy=\'modal\']').should('be.visible').and('contain', 'Something went, please try again later.');
    });

    it('proper form submission returns the modal and success message', () => {
      cy.selectContact();
      cy.fillOutContactForm_Correctly();
      cy.get('[data-cy=\'btn-submit\']').click();
      cy.get('[data-cy=\'modal\']').should('be.visible').and('contain', 'Your message has been successfully sent. Thanks for reaching out!');
    });
    it('closing the modal returns to the home view', () => {
      cy.selectContact();
      cy.fillOutContactForm_Correctly();
      cy.get('[data-cy=\'btn-submit\']').click();
      cy.get('[data-cy=\'closeModalBtn\']').click();
      cy.get('[data-cy=\'homeView\']')
        .should('exist')
        .and('be.visible');
    });
  });
});