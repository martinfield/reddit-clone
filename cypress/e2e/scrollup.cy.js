
describe("ScrollUpButton", () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });

    it("should not be visible when the page is loaded", () => {
        cy.get('[data-cy="scroll-button"]').should("not.be.visible");
    });

    it("should be visible when the user scrolls down more than 300px", () => {
        cy.scrollTo(0, 500);
        cy.get('[data-cy="scroll-button"]').should("be.visible");
    });

    it("should not be visible when the user scrolls up less than 300px", () => {
        cy.scrollTo(0,500);
        cy.scrollTo(0, -500);
        cy.get('[data-cy="scroll-button"]').should("not.be.visible");
    });

    it("should scroll to the top of the page when clicked", () => {
        cy.scrollTo(0,500);
        cy.get('[data-cy="scroll-button"]').click();
        cy.window().its('scrollY').should('equal', 0)
    });
});