Feature: PesquisaBDD
    acesso ao site unimed
Scenario: Validar a apresentação dos resultados com a Especialidade e Cidade
    Given que eu acesse o Guia Médico
    When realizo uma pesquisa de médicos no Rio de Janeiro
    Then devo validar a Apresentação dos resultados com a Especialidade e Cidade

Scenario:Validar nas Paginas 1,2 e 3 do resultado, NÃO apresentação do resultado com cidade São Paulo
    Given que eu acesse o Guia Médico
    When realizo uma pesquisa de médicos no Rio de Janeiro
    Then devo validar nas páginas 1,2 e 3 do resultado a NÃO apresentação do resultado com cidade São Paulo