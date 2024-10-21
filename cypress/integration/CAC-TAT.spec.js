// <reference types="Cypress" />


    describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
            cy.visit('./src/index.html')
        })

        it('verifica o título da aplicação', function() {
            cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        })
      

        it.only('preenche os campos obrigatórios e envia o formulário', function(){
            cy.get('#firstName').type('Marcos')
            cy.get('#lastName').type('Morato')
            cy.get('#email').type('marcoshmailton15@hotmail.com')
            cy.get('#open-text-area').type('Meu testinho')
            cy.get("button[type='submit']").click()

            cy.get('.success').should('be.visible')
        })
    })