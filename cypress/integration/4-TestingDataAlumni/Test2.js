context ('Testing Data Alumni', () =>{
    it('Testing Data Alumni', () =>{
        cy.visit('https://alumni.polinema.ac.id/site/alumni')

        cy.contains('Data Alumni')
        cy.contains('Pencarian Data')
        
        cy.get('[id="search"]').type('rio')
        cy.get('input[type="submit"]').click()
    })
})