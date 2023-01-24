import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/cypress/add-commands'
import { ScrollUpButton } from './ScrollUpButton';


describe('ScrollUpButton', () => {
    it('should be hidden by default',  () => {
    const { getByText, queryByText } = render(
        <Router>
            <ScrollUpButton />
        </Router>
    );
    const button = getByText("Back To Top")
    expect(button).not.toBeVisible();
    });
    
});

describe("ScrollUpButton", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("should not be visible when the page is loaded", () => {
        cy.get("button.MuiButtonBase-root").should("not.be.visible");
    });

    it("should be visible when the user scrolls down more than 300px", () => {
        cy.get("body").scrollTo("bottom");
        cy.get("button.MuiButtonBase-root").should("be.visible");
    });

    it("should not be visible when the user scrolls up less than 300px", () => {
        cy.get("body").scrollTo("bottom");
        cy.get("body").scrollTo("top");
        cy.get("button.MuiButtonBase-root").should("not.be.visible");
    });

    it("should scroll to the top of the page when clicked", () => {
        cy.get("body").scrollTo("bottom");
        cy.get("button.MuiButtonBase-root").click();
        cy.get("body").should("have.scrollTop", 0);
    });
});