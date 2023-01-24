import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SearchResults } from './SearchResults';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockState = {
    searchbar: {
        searchResults: [
          {
            id: 1,
            title: 'Test post 1',
            author: 'testuser1',
            authorPrefixed: 'u/testuser1',
            subreddit_name_prefixed: 'r/test',
            subreddit: 'test',
            url: 'www.testpost1.com',
            domain: 'testpost1.com',
            media_metadata: {},
            media: null,
            num_comments: 10,
            ups: 100,
            post_hint: 'link',
            permalink: 'www.reddit.com/testpost1',
            created_utc: 1614678899
          }
        ]
    }
}

describe('SearchResults component', () => {
    let store = mockStore(mockState);
    it('should render search results when they are present', async () => {
        const {getByText} = render(
            <Provider store={store}>
                <Router>
                    <SearchResults />
                </Router>    
            </Provider>
        )
        const title = getByText("Test post 1");
        const postedBy = getByText('Posted by u/testuser1 2 years ago')
        const votes = getByText('10 Comments');
        
        await waitFor(() => {
            expect(title).toBeInTheDocument();
            expect(postedBy).toBeInTheDocument();
            expect(votes).toBeInTheDocument();
        })
        
    })
})