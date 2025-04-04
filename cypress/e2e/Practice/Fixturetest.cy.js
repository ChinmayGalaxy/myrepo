describe('Fixturestest', () => {

    let Fixturevalue

    beforeEach("LoadingFixture", function()
    {
        cy.fixture('example').then((value) => {
            Fixturevalue = value
        })
    })
        

    it('Test1', function(){
        cy.log(Fixturevalue.email)
    })
})