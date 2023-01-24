describe('SearchBar Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should have an input with the placeholder "Search Reddit..." ', () => {
        cy.get('input').should('have.attr', 'placeholder', 'Search Reddit...')
    })
    it('should render a list of posts containing the search term', () => {
        cy.get('input').type('League of Legends{enter}');
        cy.url().should('eq', 'http://localhost:3000/search/League%20of%20Legends')
        cy.get('[data-cy="post-item"]').contains('League of Legends')
    })
})