context ('Testing Data Alumni', () =>{
    it('Testing Data Alumni', () =>{
        cy.visit('https://alumni.polinema.ac.id/site/alumni')
        
        cy.get('#pr')
        .should('contain','SEMUA PRODI')
        .invoke('attr','id')
        .should('equal','pr')

        cy.get('#pr')
        .select('55301 - D4 TEKNIK INFORMATIKA')
        .should('have.value','55301')

        cy.get('input[type="submit"]').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    })
    
})