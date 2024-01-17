describe('Automation Testing on Tool SQA Test Practice form.', () => {
  it('Verify that user is able to access the tool SQA website', () => {
    cy.visit('https://toolsqa.com/');
    cy.url().should('eq', 'https://toolsqa.com/')
  }),
  it('Verify that when user clicks on Demo site button it should land on Demo qa page.', () => {
    cy.visit('https://toolsqa.com/');
    cy.get('.navbar__links > :nth-child(3) > a').click();
    cy.url().should('eq', 'https://demoqa.com/')

  })
  it('Verify that user is able to click on Form button', () => {
    cy.visit('https://demoqa.com/');
    cy.get(':nth-child(2) > :nth-child(1) > .card-body').click();
    cy.url().should('eq', 'https://demoqa.com/forms')

  })
  it('Verify that when user clicks on Practice form button it should navigate to Automation Practice form', () => {
    let hits = getHits()
    cy.origin('https://demoqa.com/forms',  {args: { hits } }, ({ hits }) => {
      cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
      cy.url().should('eq', 'https://demoqa.com/automation-practice-form')
    })    
  })

  it('Verify that when user enters the valid Data in the form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type('Mehwish');
    cy.get('#lastName').type('Arshad');
    cy.get('#userEmail').type('khanmehwish600@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#userNumber').type('1234567893');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2010');
    cy.get('react-datepicker__day--016')
    cy.get('.subjects-auto-complete__value-container').type('Hello');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#uploadPicture').uplaod('path');
    cy.get('#currentAddress').type('Malaysia');
  })
  
  it('Verify that when user enters the Invalid Data in the form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type('123@');
    cy.get('#lastName').type('##$@');
    cy.get('#userEmail').type('.com');
    cy.get('#userNumber').type('567893');
    cy.get('#currentAddress').type('abc');
    cy.url().should('eq', 'https://demoqa.com/forms');
  })
})