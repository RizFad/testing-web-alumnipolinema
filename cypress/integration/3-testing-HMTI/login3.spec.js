describe('Login Website Alumni Polinema', () => {
    it('successfully loads', () => {
      cy.visit('https://alumni.polinema.ac.id/') 
      cy.get('input[name="usernamealumni"]').type('Abdullah')
      cy.get('input[name="passwordalumni"]').type('polinemajoss')
      cy.get('input[type="submit"]').click()
      cy.screenshot()
    })
  })
  