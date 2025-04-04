describe('template spec', () => {

    
    



    it('takeda', function() {

      // loader = div.crx-loader
      cy.visit('https://takedapatientsupportenrollment-hematology-uat.copaysavingsprogram.com');
      cy.title().then((ele) =>{
        cy.log(ele);
      })
      // cy.get('.brandWrap > .select-selected').should('be.hidden');
      cy.get('.brandWrap > .select-selected').click();
      //.btnWrap > button //.brandWrap > .select-selected
      cy.get('.brandWrap > .select-items > :nth-child(1)').click();
      cy.get('#crx-wl-firstName').type('John');
      cy.get('#crx-wl-lastName').type('peter');
      cy.get('#crx-wl-birthDate').type('12/12/2000');
      cy.get('.align-items-center > .col-md-4 > .fieldWrap > .select-selected').click();
      cy.get('.align-items-center > .col-md-4 > .fieldWrap > .select-items > :nth-child(1)').click();
      cy.get('#crx-wl-addressLine1').type('whitefiled');
      cy.get('#crx-wl-city').type('Bengaluru');
      cy.get(':nth-child(7) > :nth-child(3) > .fieldWrap > .select-selected').click();
      cy.get(':nth-child(7) > :nth-child(3) > .fieldWrap > .select-items > :nth-child(1)').click();
      cy.get('#crx-wl-zip').type('10010');
      cy.get('#crx-wl-email').type('sudar@gmail.com');
      cy.get('#crx-wl-phone').type('654-345-6765');
      cy.get(':nth-child(8) > :nth-child(3) > .fieldWrap > .select-selected').click();
     
      cy.get(':nth-child(8) > :nth-child(3) > .fieldWrap > .select-items > :nth-child(1)').click();
      cy.get('#crx-wl-legalRep > :nth-child(2) > label').click();
      //cy.get('#btnNextPatientInfo').click();
      
      // Cypress.on('uncaught:exception', (err, runnable) => {
      //   // returning false here prevents Cypress from
      //   // failing the test
      //   if(err.message.includes("cross origin script"))
      //   return false
      // })
      
      // cy.get('#insuranceInfo > div.formWrap > div.insuranceBox > label').click();
      // var title = cy.title();
      // cy.log(title);
     
   
    })
   
  })