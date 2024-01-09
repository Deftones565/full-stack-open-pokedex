describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokemon and Pokemon character names are trademarks of Nintendo')
  })
  it('can navigate from main page to ivysaur page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})