describe('Subreddit Component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000/r/AskReddit");
    });

    it('should render a subreddit icon, title and name and a list of subreddit posts', () => {
        cy.get('[data-cy="subreddit-icon"]').should('be.visible');
        cy.get('[data-cy="subreddit-title"]').should('be.visible');
        cy.get('[data-cy="subreddit-subtitle"]').should('be.visible');
        cy.get('[data-cy="subreddit-post-item"]').should('be.visible'); 
    })

})