describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('EXTERNAL_API')
    cy.contains('ivysaur')
    cy.contains('Pokemon and Pokemon character names are trademarks of Nintendo')
  })
})