describe('Test Pengumuman 2', () => {
  it('Test Case Announcement', () => {
    cy.visit('https://alumni.polinema.ac.id/site/pengumuman')

    cy.get('.btnSubmitSmall').click()
   
  })
})