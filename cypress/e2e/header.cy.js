describe('Header component', () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });
    it('should render the header title and logo which can route back to homePage when clicked', () => {
        cy.get('h1').should('be.visible');
        cy.get('[data-cy="reddit-simple"]').should('be.visible');
        cy.get('[data-cy="reddit-icon"]').should('be.visible');
        cy.visit('localhost:3000/best')
        cy.get('[data-cy="reddit-simple"]').click();
        cy.url().should('eq', 'http://localhost:3000/')
    })
});