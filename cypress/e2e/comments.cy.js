describe('Comments Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000/r/AskReddit");
    });
    it('clicking comments on a post should route you to the individual post with its comment tree', () => {
        cy.contains('Comments').click();
        cy.get('[data-cy="post-item-comments"]').should('be.visible');
    })
})