
  it('Test Case Announcement', function() {

      cy.visit('https://alumni.polinema.ac.id/site/pengumuman')

      cy.get(':nth-child(1) > input').type('Toga')
      
      cy.get('[type="submit"]')
      
      let name = 'Toga'
      expect(name).to.be.equal('Toga')

  })

