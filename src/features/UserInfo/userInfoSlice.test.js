import { usersInfoSlice, fetchUser } from "./userInfoSlice";

describe('userInfoSlice Extra Reducers', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: fetchUser.pending};
        const initialState = usersInfoSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill the users array with action.payload when action is fulfilled', () => {
        const action = {
            type: fetchUser.fulfilled, 
            payload: {
                username: 'Test Username',
                
            }
        };

        const initialState = usersInfoSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            users: {
                username: 'Test Username',
                
            }
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: fetchUser.rejected};
        const initialState = usersInfoSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})



