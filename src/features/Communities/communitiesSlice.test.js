import { communitiesSlice, loadCommunities } from './communitiesSlice';


describe('CommunitiesSlice Extra Reducers', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadCommunities.pending};
        const initialState = communitiesSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill the communitiesArray with action.payload when action is fulfilled', () => {
        const action = {
            type: loadCommunities.fulfilled, 
            payload:[{
                name: 'Test Subreddit',
                display_name: 'Test Subreddit'
            },
            {
                name: 'Another Subreddit',
                display_name: 'Another Subreddit'
            }]
        };

        const initialState = communitiesSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            communitiesArray: [{
                name: 'Test Subreddit',
                display_name: 'Test Subreddit'
            },
            {
                name: 'Another Subreddit',
                display_name: 'Another Subreddit'
            }]
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadCommunities.rejected};
        const initialState = communitiesSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})



