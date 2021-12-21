describe('Login Website Alumni Polinema', () => {
    it('successfully loads', () => {
      cy.visit('https://alumni.polinema.ac.id/') 
      cy.get('input[name="usernamealumni"]').type('1941720112')
      cy.get('input[name="passwordalumni"]').type('1941720112')
      cy.get('input[type="submit"]').click()
      cy.screenshot()
    })
  })
  