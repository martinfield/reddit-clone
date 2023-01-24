import { Header } from "./header";
import {render, screen, fireEvent} from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";

describe('Header component', () => {
    it('should render the reddit icon', () => {
        render(
        <Router>
            <Header />
        </Router>
        );
        const iconEl = screen.getByTestId('RedditIcon');
        expect(iconEl).toBeInTheDocument();
    })
    it('should render the RedditSimple title', () => {
        render(
        <Router>
            <Header />
        </Router>
        );
        const h1El = screen.getByText('Reddit');
        const spanEl = screen.getByText('Simple');
        expect(h1El).toBeInTheDocument();
        expect(spanEl).toBeInTheDocument();
    })
    it('should navigate to "/" when the header link is clicked', () => {
        render(
        <Router>
            <Header />
        </Router>
        );
        const headerLink = screen.getByTestId('header-link');

        fireEvent.click(headerLink);
        expect(window.location.pathname).toBe('/');
    })
})