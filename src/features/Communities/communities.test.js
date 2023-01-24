import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import CommunitiesSmall from './CommunitiesSmall';
import { Provider} from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import  userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockState = [
    {
        name: 'Test Subreddit',
        display_name: 'Test Subreddit'
    },
    {
        name: 'Another Subreddit',
        display_name: 'Another Subreddit'
    }
]

describe('CommunitiesSmall', () => {
    const store = mockStore({
        communities: {
            communitiesArray: mockState,
        }
    })

    it('should render a list of two mock subreddits', async () => {
        const user = userEvent.setup();
        //arrange
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <Router>
                    <CommunitiesSmall />
                </Router>
            </Provider>
        ) 
        //act
        await waitFor (() => user.click(getByTestId('MoreVertIcon')),{timeout: 8000});
        //assert
        expect(getByText('r/Test Subreddit')).toBeInTheDocument();
    })
     
    it('should render a list of subreddits which is visible when menu button is clicked', async  () => {
        const user = userEvent.setup();
        //arrange
        const { getByTestId, getByRole } = renderWithProviders(
                <Router>
                    <CommunitiesSmall />
                </Router>
        );
        //act
        await waitFor(() => user.click(getByTestId('MoreVertIcon')), {timeout: 8000});
        //assert
        expect(getByRole("presentation")).toBeInTheDocument();

    });

    it('should close the menu when the button is clicked again', async () => {
        const user = userEvent.setup();
        //arrange
        const { getByTestId, getByRole, queryByText } = renderWithProviders(
                <Router>
                    <CommunitiesSmall />
                </Router>
        );
        //act
        user.click(getByTestId('MoreVertIcon'));// Menu Open
        userEvent.keyboard('{esc}');;//Menu Close
        //assert
        await waitFor(() => expect(queryByText("Top Communities")).not.toBeInTheDocument());
    })
});