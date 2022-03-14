describe('API Testing', () => {
    it('TesteAPI', () => {
        cy.request('http://www.omdbapi.com/?i=tt1285016&apikey=52ec71bf').then((response) => {
            expect(response.body).to.have.property('Title', 'The Social Network')
            expect(response.body).to.have.property('Year', '2010')
            expect(response.body).to.have.property('Language', "English, French")  
        })
    })
    it('TesteAPI 2', () => {
        cy.request('http://www.omdbapi.com/?i=xfcfbfg&apikey=52ec71bf').then((response) => {
            expect(response.body).to.have.property('Response','False','Error','Incorrect IMDb ID.')
        })

    
    })
})