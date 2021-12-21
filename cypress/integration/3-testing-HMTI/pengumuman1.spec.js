describe('Test Pengumuman 1', () => {
    it('Test Case Announcement', () => {
      cy.visit('https://alumni.polinema.ac.id/')

      cy.get(':nth-child(4) > a').click()
     
    })
})