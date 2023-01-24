import { subredditSlice, loadSubreddit, loadSubredditAbout } from "./subredditSlice";

describe('subredditSlice Extra Reducers - loadSubreddit', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadSubreddit.pending};
        const initialState = subredditSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill the users array with action.payload when action is fulfilled', () => {
        const action = {
            type: loadSubreddit.fulfilled, 
            payload: [
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
        };

        const initialState = subredditSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            posts:[
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
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadSubreddit.rejected};
        const initialState = subredditSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })
});

describe('subredditSlice Extra Reducers - loadSubredditAbout', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadSubredditAbout.pending};
        const initialState = subredditSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill the users array with action.payload when action is fulfilled', () => {
        const action = {
            type: loadSubredditAbout.fulfilled, 
            payload: {
                title: 'Test Subreddit',
                display_name_prefixed: 'r/test',
                icon_img: 'test.jpg'
            }
        };

        const initialState = subredditSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            subredditAbout: {
                title: 'Test Subreddit',
                display_name_prefixed: 'r/test',
                icon_img: 'test.jpg'
            }
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadSubredditAbout.rejected};
        const initialState = subredditSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})



