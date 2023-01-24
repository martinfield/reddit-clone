describe('Home Page Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render posts with and without applied filters', () => {
        cy.get('[data-cy="post-item"]').should('be.visible');
        cy.visit('localhost:3000/best');
        cy.get('[data-cy="post-item"]').should('be.visible');
        cy.visit('localhost:3000/hot');
        cy.get('[data-cy="post-item"]').should('be.visible');
        cy.visit('localhost:3000/new');
        cy.get('[data-cy="post-item"]').should('be.visible');
        cy.visit('localhost:3000/top');
        cy.get('[data-cy="post-item"]').should('be.visible');
    })
});