describe('Post Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render a title, subtitle, media (if applicable), no. of votes and comments', () => {
        cy.get('[data-cy="post-title"]').should('be.visible');
        cy.get('.MuiCardHeader-subheader').should('be.visible');
        cy.get('[data-testid="card-media"]').should('be.visible');
        cy.get('[data-cy="votes"]').should('be.visible');
        cy.get('[data-cy="comments-button"]').should('be.visible');

    })
})