
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Marcos')
            cy.get('#lastName').type('Morato')
            cy.get('#email').type('marcoshmailton15@hotmail.com')
            cy.get('#open-text-area').type('Testinho')
            cy.contains("button", 'Enviar').click()
})
