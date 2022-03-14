/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

class LoginPage {

    //acessa o site que será testado
    acessoGuiaMédico() {
        cy.visit('https://www.unimed.coop.br/site/')
        cy.get(loginElements.botaoConsultaGuia()).click()
        cy.get(loginElements.botaoBuscaDetalhada()).click()
        
    }
    //preenche os campos
    realizoPesquisaMedicoRiodeJaneiro() { 
        cy.get('.Select--invalid-field > .css-1hwfws3')
            .click()
            .type('Rio de Janeiro')
        cy.get('span > strong').click()
        cy.get(':nth-child(3) > :nth-child(1) > .css-dyr6gj-container > .css-1jvgh0k-control > .css-1hwfws3').type('Dermatologia')
        cy.get('#react-select-3-option-112').click()
        cy.get('#city-input > .css-1jvgh0k-control > .css-1hwfws3').type('Rio de Janeiro')
        cy.get('span > strong').click()
        cy.get(loginElements.botaoPesquisar()).click()

    }
    //valida a apresentação dos resultados com a Especialidade e Cidade.
    validarApresentaçãoResultadosCidade() {
         cy.get(':nth-child(3) > .ProviderCard')
            .should('contain', 'Rio de Janeiro/RJ')
            .should('contain', 'Dermatologia')
    }
    validarNãoApresentaçãoResultadoSãoPaulo() {
        cy.get('.d-block > :nth-child(2) > :nth-child(1)').should('not.contain', 'São Paulo')
        cy.get('.d-block > :nth-child(2) > :nth-child(2)').should('not.contain', 'São Paulo')
        cy.get('.d-block > :nth-child(2) > :nth-child(3)').should('not.contain', 'São Paulo')


    }
}

export default new LoginPage;