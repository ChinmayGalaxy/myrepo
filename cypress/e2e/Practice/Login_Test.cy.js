describe('Login Test', () =>{

    // Practice 24 July


    it('Positive Test', function () {

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click();
        cy.wait(2000)
        cy.get('h1.post-title').invoke('text').then((ele) => {
            cy.log(ele)
        })
        cy.get('#menu-item-43 > a').click()
        cy.go('back')
        cy.get('div.post-content > div > div > div > a').click()

    })

    it('Negative Test', function () {

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('stude')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click();
        cy.wait(2000)
        cy.get('div#error').should('be.visible')
        cy.get('div#error').invoke('text').then((ele) => {
            cy.log(ele)
        })

    })

    it('Negative Test', function () {

        cy.visit('https://formstone.it/components/checkbox/')
        cy.get('label[for="checkbox-2"]').click()
        cy.get('label[for="checkbox-1"]').click()
        cy.get('label[for="checkbox-1"]').screenshot()
        cy.get('label[for="checkbox-1"]').screenshot({ padding: 10 })
        //cy.screenshot({ clip: {width: 400, height: 300 } })
    })
})