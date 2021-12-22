context('Cypress UAS', () => {
    it('Agenda Cari', () => {
        cy.visit('https://alumni.polinema.ac.id/site/agenda')
        cy.get(':nth-child(1) > input').type('pengumuman')
        cy.get('[type="submit"]').click()
    })
})