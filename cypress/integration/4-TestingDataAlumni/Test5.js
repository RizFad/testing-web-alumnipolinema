context ('Testing Data Alumni', () =>{
    it('Testing Data Alumni', () =>{
        cy.visit('https://alumni.polinema.ac.id/site/alumni')
        cy.get('#pr').select('61304 - D4 MANAJEMEN PEMASARAN').should('have.value','61304')
        cy.get('input[type="submit"]').click()
        //cy.get('div[class="pagination"]').select('2').click()//
        //cy.get('div[class="pagination"]').select('Last ›').click()//
        cy.visit('https://alumni.polinema.ac.id/site/alumni/index/pr/61304/start/10')
        cy.visit('https://alumni.polinema.ac.id/site/alumni/index/pr/61304/start/1230')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
})
