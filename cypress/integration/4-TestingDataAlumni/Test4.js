context ('Testing Data Alumni', () =>{
    it('Testing Data Alumni', () =>{
        cy.visit('https://alumni.polinema.ac.id/site/alumni')
        cy.get('[id="search"]').type('rio')
        cy.get('#pr').select('55301 - D4 TEKNIK INFORMATIKA').should('have.value','55301')
        cy.get('input[type="submit"]').click()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
})