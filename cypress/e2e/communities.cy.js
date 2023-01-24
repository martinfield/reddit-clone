describe('Communities Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render the top communities upon clicking the expand menu button', () => {
        cy.get('[data-cy="expand-menu-button"]').should('be.visible');
        cy.get('[data-cy="expand-menu-button"]').click()
        cy.get('h3').should('have.text', 'Top Communities');
        cy.get('[data-testid="communities-list-item"]').should('be.visible')
    })
});