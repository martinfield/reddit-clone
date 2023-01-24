import { searchbarSlice, loadSearchResults } from './searchbarSlice';


describe('searchbarSlice Extra Reducers', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadSearchResults.pending};
        const initialState = searchbarSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill searchResults with action.payload when action is fulfilled', () => {
        const action = {
            type: loadSearchResults.fulfilled, 
            payload: {
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
        };

        const initialState = searchbarSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            searchResults: {
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
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadSearchResults.rejected};
        const initialState = searchbarSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})



