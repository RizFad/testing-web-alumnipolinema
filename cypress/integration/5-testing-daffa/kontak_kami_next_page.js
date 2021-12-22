context('Cypress UAS', () => {
    it('Kontak Kami Next Page', () => {
        cy.visit('https://alumni.polinema.ac.id/site/contactus')
        cy.get('.pagination > :nth-child(4)').click()
    })
})