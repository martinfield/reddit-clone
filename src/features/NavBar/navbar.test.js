import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './NavBar';

describe('NavBar', () => {
    it('should render four navigation links', () => {
    const { getByText } = render(
        <Router>
            <NavBar />
        </Router>
    );

    const bestLink = getByText('Best');
    const hotLink = getByText('Hot');
    const newLink = getByText('New');
    const topLink = getByText('Top');

    expect(bestLink).toBeInTheDocument();
    expect(hotLink).toBeInTheDocument();
    expect(newLink).toBeInTheDocument();
    expect(topLink).toBeInTheDocument();
    });

    it('should navigate to the correct route when a link is clicked', () => {
        const { getByText } = render(
            <Router>
                <NavBar />
            </Router>
        );
        // clicking 'Hot'
        const hotLink = getByText('Hot');
        fireEvent.click(hotLink);

        expect(window.location.pathname).toBe("/hot");
        //clicking 'Best'
        const bestLink = getByText('Best');
        fireEvent.click(bestLink);

        expect(window.location.pathname).toBe("/best");
        //clicking 'New'
        const newLink = getByText('New');
        fireEvent.click(newLink);

        expect(window.location.pathname).toBe("/new");
        //clicking 'Top'
        const topLink = getByText('Top');
        fireEvent.click(topLink);

        expect(window.location.pathname).toBe("/top");
    });
    });