describe('Read and Write Data', () =>{

    let varia = 'Shree ram'

    it('WriteData', function(){

        cy.writeFile('cypress/SampleData/Sample.txt', 'Jay Sriram \n')
        cy.writeFile('cypress/SampleData/Sample.txt', 'Namaste', {flag: 'a+'})
        cy.writeFile('cypress/SampleData/Samplej.json', 
            {
                name: varia,
                email: 'shreeram@test.com',
                number: 121
            }
        )
    })

    it('ReadData', function(){

        cy.readFile('cypress/SampleData/Sample.txt').then((ele) =>{
            cy.log(ele)
        })

        cy.readFile('cypress/SampleData/Samplej.json').then((ele) =>{
            cy.log(ele.name)
            cy.log(ele.email)

        })
    })


    it.only('Test1', function (){

        cy.visit('https://www.saucedemo.com/')
        // Writing Username and password to json file
        cy.get('div#login_credentials').invoke('text').then((example) => {
            cy.log(example)
            const user = example.split(':')[1].split('locked')[0]
            cy.get('.login_password').invoke('text').then((example) => {
                const ex = example.split(':')[1]
                cy.log(ex)
                let credentials = { username: user,password: ex}
                cy.writeFile('cypress/SampleData/Samplej.json', credentials)
            })
        })
        
        // Reading Username and Password from json file
        cy.readFile('cypress/SampleData/Samplej.json').then((ele) =>{
            cy.log(ele.name)
            cy.log(ele.email)
            cy.get('input#user-name').type(ele.username)
            cy.get('input#password').type(ele.password)
            cy.get('input#login-button').click()

        })
    })


})