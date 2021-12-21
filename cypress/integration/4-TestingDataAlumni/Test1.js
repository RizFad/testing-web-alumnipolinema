context ('Testing Data Alumni', () =>{
    it('Testing Data Alumni', () =>{
        cy.visit('https://alumni.polinema.ac.id/site/alumni')
        cy.get('input[type="submit"]').click()
    })
})