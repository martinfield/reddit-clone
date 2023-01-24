import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { BrowserRouter as Router, MemoryRouter} from 'react-router-dom';
import { Subreddit } from './subreddit';



const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockState = {
    subreddit: {
        posts: [{
            id: 'test_id',
            title: 'test title',
            author: 'test_author',
            authorPrefixed: 'u/test_author',
            subreddit: 'test_subreddit',
            subredditPrefixed: 'r/test_subreddit',
            url: 'www.example.com/test',
            domain: 'test_domain',
            media: {
                test_media: 'test_media_data'
            },
            comments: 10,
            votes: 100,
            posthint: 'test_posthint',
            permalink: '/r/test/3452562',
            created: 1234567890
        }],
        subredditAbout:[{
            title: 'test subreddit',
            display_name_prefixed: 'r/test',
            icon_img: 'test_icon_img_url'
        }]
    }
};

describe('Subreddit component', () => {
    it('should render subreddit information and posts', () => {
        const store = mockStore({
            subreddit: {
                subredditAbout: {
                    title: 'Test Subreddit',
                    display_name_prefixed: 'r/test',
                    icon_img: 'test.jpg'
                },
                posts: [
                    {
                        id: '123',
                        title: 'Test post',
                        author: 'testuser',
                        subreddit_name_prefixed: 'r/test',
                        subreddit: 'test',
                        url: 'test.com',
                        domain: 'test.com',
                        media_metadata: {},
                        media: null,
                        num_comments: 10,
                        ups: 100,
                        post_hint: 'link',
                        permalink: '/r/test/123',
                        created_utc: 1611478400
                    }
                ]
            }
        });

        const { getByText, getByAltText } = render(
            <Provider store={store}>
                <MemoryRouter >
                    <Subreddit />
                </MemoryRouter>
            </Provider>
        );

        const subredditTitle = getByText('Test Subreddit');
        const subredditName = getByText('r/test');
        const subredditLogo = getByAltText('subreddit-header-logo');
        const postTitle = getByText('Test post');


        expect(subredditTitle).toBeInTheDocument();
        expect(subredditName).toBeInTheDocument();
        expect(subredditLogo).toBeInTheDocument();
        expect(postTitle).toBeInTheDocument();
    });
});



