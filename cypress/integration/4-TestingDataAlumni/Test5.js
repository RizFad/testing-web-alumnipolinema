context ('Testing Data Alumni', () =>{
    it('Testing Data Alumni', () =>{
        cy.visit('https://alumni.polinema.ac.id/site/alumni')

        cy.get('#pr')
        .should('contain','SEMUA PRODI')
        .invoke('attr','id')
        .should('equal','pr')

        cy.get('#pr').select('61304 - D4 MANAJEMEN PEMASARAN')
        .should('have.value','61304')
        
        cy.get('input[type="submit"]').click()
        cy.get('#frameContent > :nth-child(3) > :nth-child(2)').click()
        cy.get(':nth-child(3) > [href="https://alumni.polinema.ac.id/site/alumni/index/pr/61304/start/1230"]').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    })
})
