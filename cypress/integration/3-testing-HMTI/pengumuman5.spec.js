describe('Test Pengumuman 4', () => {
    it('Test Case Announcement', () => {
      cy.visit('https://alumni.polinema.ac.id/site/pengumuman')
      
      cy.get(':nth-child(1) > input').type('Toga')
      cy.get('[type="submit"]').click()
     
    })
})
