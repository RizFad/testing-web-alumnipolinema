/// <reference types="cypress"/>

import Chance from 'chance';
const chance = new Chance();

describe('Alumni Polinema', () => {
  
  const email = chance.email();
  const pass = 'password';

  beforeEach(()=>{
    cy.visit('https://alumni.polinema.ac.id/');
  })

  it('Beranda Polinema Alumni', () => {
    
    cy.contains('Beranda')
    expect(2).to.equal(2)

  });

  it('Tampilan Tracer Study Polinema', () => {
    
    cy.contains('Tracer Study').click()
    cy.get('input[type="submit"]').click()

  });

  it('Login Alumni Polinema Kontak Kami', () => {

    cy.contains('Kontak Kami').click()
    cy.login(email, pass);

    cy.screenshot();
  })

})


// describe('Login Website Alumni Polinema', () => {
//     it('successfully loads', () => {
//       cy.visit('https://alumni.polinema.ac.id/') 
//       cy.get('input[name="usernamealumni"]').type('1941720112')
//       cy.get('input[name="passwordalumni"]').type('1941720112')
//       cy.get('input[type="submit"]').click()
//       cy.screenshot()
//     })
//   })