describe('Nav Bar Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render four Sort-By nagivational links', () => {
        cy.get('[data-cy="best-nav"]').should('have.text', 'Best');
        cy.get('[data-cy="hot-nav"]').should('have.text', 'Hot');
        cy.get('[data-cy="new-nav"]').should('have.text', 'New');
        cy.get('[data-cy="top-nav"]').should('have.text', 'Top');
    })
    it('should correctly route to the right component', () => {
        cy.get('[data-cy="best-nav"]').click();
        cy.url().should('eq', 'http://localhost:3000/best');
        cy.get('[data-cy="hot-nav"]').click();
        cy.url().should('eq', 'http://localhost:3000/hot');
        cy.get('[data-cy="new-nav"]').click();
        cy.url().should('eq', 'http://localhost:3000/new');
        cy.get('[data-cy="top-nav"]').click();
        cy.url().should('eq', 'http://localhost:3000/top');
    })
})