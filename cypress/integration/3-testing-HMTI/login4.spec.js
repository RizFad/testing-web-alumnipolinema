describe('Login Website Alumni Polinema', () => {
    it('successfully loads', () => {
      cy.visit('https://alumni.polinema.ac.id/') 
      cy.get('input[name="usernamealumni"]').type('Abdul Thalib')
      cy.get('input[name="passwordalumni"]').type(' ')
      cy.get('input[type="submit"]').click()
      cy.screenshot()
    })
  })
  