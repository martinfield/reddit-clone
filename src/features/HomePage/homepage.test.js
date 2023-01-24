import { render, fireEvent, waitFor } from '@testing-library/react';
import { HomePage } from './homepage';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockState = {
    homePage: {
        homePosts: [
            {
                id: 1,
                title: 'Test Post 1',
                author: 'test_author',
                subreddit_name_prefixed: 'r/test',
                subreddit: 'test',
                url: 'https://test.com/test_post_1',
                media: null,
                num_comments: 10,
                ups: 100,
                post_hint: 'self',
                permalink: '/test_post_1',
                created_utc: 1606902400,
            },
            {
                id: 2,
                title: 'Test Post 2',
                author: 'test_author_2',
                subreddit_name_prefixed: 'r/test',
                subreddit: 'test',
                url: 'https://test.com/test_post_2',
                media: null,
                num_comments: 15,
                ups: 50,
                post_hint: 'self',
                permalink: '/test_post_2',
                created_utc: 1806902400,
            }
        ]
    }
}

describe('HomePage Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
        homePage: {
            homePosts: [],
        }
      })
    })
    it('should render a list of mocked homePage posts', async () => {
        store = mockStore(mockState)

        const {getByText} = render(
            <Provider store={store} >
                <Router>
                    <HomePage />
                </Router>
            </Provider>
        );
        await waitFor(() => {
            expect(getByText('Test Post 1')).toBeInTheDocument();
            expect(getByText('Posted by u/test_author 2 years ago')).toBeInTheDocument();
            expect(getByText('Test Post 2')).toBeInTheDocument();
        })
    });
}); 
