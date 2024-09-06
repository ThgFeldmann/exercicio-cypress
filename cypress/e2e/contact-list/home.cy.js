/// <reference types="cypress" />

describe('testes', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato', () => { // sucesso
        cy.get('input[placeholder="Nome"]').type('Fulano')
        cy.get('input[placeholder="E-mail"]').type('fulano@teste.com')
        cy.get('input[placeholder="Telefone"]').type('99999999999')

        cy.get('.adicionar').click()
    })

    it('Deve editar o primeiro contato da lista', () => { // sucesso
        cy.get('.edit').first().click()

        cy.get('input[placeholder="Nome"]').clear()
        cy.get('input[placeholder="E-mail"]').clear()
        cy.get('input[placeholder="Telefone"]').clear()

        cy.get('input[placeholder="Nome"]').type('Siclano')
        cy.get('input[placeholder="E-mail"]').type('siclano@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11111111111')

        cy.get('.alterar').click()
    })

    it('Deve excluir o último contato da lista', () => { // sucesso
        cy.get('.delete').last().click()
    })
})