context('Cypress UAS', () => {
    it('Kontak Kami Last Page', () => {
        cy.visit('https://alumni.polinema.ac.id/site/contactus')
        cy.get('[href="https://alumni.polinema.ac.id/site/contactus/index/start/675"]').click()
    })
})