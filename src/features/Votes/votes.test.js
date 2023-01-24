import { render, fireEvent } from '@testing-library/react';
import { Votes } from './Votes';

describe('Votes Component', () => {
    it('should display the initial number of votes passed as props', () => {
        const { getByText } = render(<Votes votes={10} />);
        const voteCount = getByText('10');
        expect(voteCount).toBeInTheDocument();
    });
    it('should increment the vote count when the upvote button is clicked', () => {
        const { getByText, getByTestId } = render(<Votes votes={10} />);
        const upvoteButton = getByTestId('ArrowUpwardRoundedIcon');
        fireEvent.click(upvoteButton);
        const voteCount = getByText('11');
        expect(voteCount).toBeInTheDocument();
    });

    it('should decrement the vote count when the downvote button is clicked', () => {
        const { getByText, getByTestId } = render(<Votes votes={10} />);
        const downvoteButton = getByTestId('ArrowDownwardRoundedIcon');
        fireEvent.click(downvoteButton);
        const voteCount = getByText('9');
        expect(voteCount).toBeInTheDocument();
    });
});