/* global Given, Then, When */

import loginPage from '../pageobjects/LoginPage'

Given("que eu acesse o Guia Médico", () => {
    loginPage.acessoGuiaMédico();
})

When("realizo uma pesquisa de médicos no Rio de Janeiro", () => {
    loginPage.realizoPesquisaMedicoRiodeJaneiro();
})

Then("devo validar a Apresentação dos resultados com a Especialidade e Cidade", () => {
    loginPage.validarApresentaçãoResultadosCidade();
})

Given("que eu acesse o Guia Médico", () => {
    loginPage.acessoGuiaMédico();

})
When("realizo uma pesquisa de médicos no Rio de Janeiro",() => {
    loginPage.realizoPesquisaMedicoRiodeJaneiro();

})
Then('devo validar nas páginas 1,2 e 3 do resultado a NÃO apresentação do resultado com cidade São Paulo', () => {
    loginPage.validarNãoApresentaçãoResultadoSãoPaulo();
})