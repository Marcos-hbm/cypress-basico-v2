// <reference types="Cypress" />


    describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
            cy.visit('./src/index.html')
        })

        it('verifica o título da aplicação', function() {
            cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        })
      

        it('preenche os campos obrigatórios e envia o formulário', function(){
            const long_text = "Meu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinhoMeu testinho"
            cy.get('#firstName').type('Marcos')
            cy.get('#lastName').type('Morato')
            cy.get('#email').type('marcoshmailton15@hotmail.com')
            cy.get('#open-text-area').type(long_text, {delay: 0})
            cy.contains('button', 'Enviar').click()

            cy.get('.success').should('be.visible')
        })

        it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
            
            cy.get('#firstName').type('Marcos')
            cy.get('#lastName').type('Morato')
            cy.get('#email').type('marcoshmailton15@hotmail,com')
            cy.contains('button', 'Enviar').click()
            cy.get('.error').should('be.visible')
        })

        it('validação de texto no campo de telefone', function(){
            cy.get('#phone')
              .type('abcdefjhij')
              .should('have.value', '')
        })

        it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
            
            cy.get('#firstName').type('Marcos')
            cy.get('#lastName').type('Morato')
            cy.get('#email').type('marcoshmailton15@hotmail.com')
            cy.get('#phone-checkbox').click()
            cy.contains('button', 'Enviar').click()
            cy.get('.error').should('be.visible')
        })

        it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
            
            cy.get('#firstName').type('Marcos').should('have.value', 'Marcos').clear().should('have.value', '')
            cy.get('#lastName').type('Morato')
            cy.get('#email').type('marcoshmailton15@hotmail,com')
            cy.contains('button', 'Enviar').click()
            cy.get('.error').should('be.visible')
        })

        it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
            
            cy.contains('button', 'Enviar').click()
            cy.get('.error').should('be.visible')
        })

        it('envia o formuário com sucesso usando um comando customizado', function(){
            cy.fillMandatoryFieldsAndSubmit()

            cy.get('.success').should('be.visible')
        })

        it.only('seleciona um produto (YouTube) por seu texto', function(){
            cy.get('select').select('YouTube').should('have.value', 'youtube')
        })

        it('seleciona um produto (Mentoria) por seu valor (value)', function(){
            cy.get('select').select('mentoria').should('have.value', 'mentoria')
        })

        it('seleciona um produto (Blog) por seu índice', function(){
            cy.get('#product').select(1).should('have.value', 'blog')
        })
    })