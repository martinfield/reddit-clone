import { render, fireEvent, waitFor } from '@testing-library/react';
import { PostWithComments } from './postComments';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockState = {
    postComments: {
      comments: [
        {
          data: {
            children: [
              {
                data: {
                  key: 1,
                  id: 1,
                  title: 'Test post',
                  author: 'test-user',
                  subreddit: 'test-subreddit',
                  url: 'https://test.com',
                  media: null,
                  comments: 10,
                  votes: 100,
                  posthint: 'link',
                  domain: 'test.com',
                  permalink: '/r/test-subreddit/comments/1/test-post',
                  created: 1609372800
                }
              }
            ]
          }
        },
        {
          data: {
            children: [
              {
                data: {
                  key: 2,
                  id: 2,
                  body: 'Test comment 1',
                  author: 'test-user-1',
                  votes: 50,
                  created: 1609372900,
                  replies: {
                    data: {
                      children: []
                    }
                  }
                }
              },
              {
                data: {
                  key: 3,
                  id: 3,
                  body: 'Test comment 2',
                  author: 'test-user-2',
                  votes: 20,
                  created: 1609373000,
                  replies: {
                    data: {
                      children: []
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }

describe('PostWithComments', () => {
    //arrange
    let store;

    beforeEach(() => {
      store = mockStore({
        postComments: {
          comments: []
        }
      })
    })
    it('should render post and comments with mocked response', async () => {
        //act
        store = mockStore(mockState)

        const {getByText} = render(
        <Provider store={store} >
            <Router>
                <PostWithComments />
            </Router>
        </Provider>
        );
        //assert
        await waitFor(() => {
        expect(getByText('Test post')).toBeInTheDocument();
        expect(getByText('Test comment 1')).toBeInTheDocument();
        expect(getByText('Test comment 2')).toBeInTheDocument();
        })
    })
})