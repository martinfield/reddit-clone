import { homePageSlice, loadHomePage, loadBestPage, loadHotPage, loadNewPage, loadTopPage } from './homepageSlice';


describe('homePageSlice Extra Reducers - homePosts', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadHomePage.pending};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill the homePost with action.payload when action is fulfilled', () => {
        const action = {
            type: loadHomePage.fulfilled, 
            payload:[
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
        };

        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
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
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadHomePage.rejected};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})

describe('homePageSlice Extra Reducers - bestPosts', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadBestPage.pending};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill bestPosts with action.payload when action is fulfilled', () => {
        const action = {
            type: loadBestPage.fulfilled, 
            payload:[
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
        };

        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            bestPosts: [
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
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadBestPage.rejected};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})

describe('homePageSlice Extra Reducers - HotPosts', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadHotPage.pending};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill hotPosts with action.payload when action is fulfilled', () => {
        const action = {
            type: loadHotPage.fulfilled, 
            payload:[
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
        };

        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            hotPosts: [
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
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadHotPage.rejected};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})

describe('homePageSlice Extra Reducers - NewPosts', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadNewPage.pending};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill hotPosts with action.payload when action is fulfilled', () => {
        const action = {
            type: loadNewPage.fulfilled, 
            payload:[
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
        };

        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            newPosts: [
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
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadNewPage.rejected};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})

describe('homePageSlice Extra Reducers - topPosts', () => {
    it('should set isLoading to true while action is pending', () => {
        const action = {type: loadTopPage.pending};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: false, isLoading: true})
     })

    it('should fill hotPosts with action.payload when action is fulfilled', () => {
        const action = {
            type: loadTopPage.fulfilled, 
            payload:[
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
        };

        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);

        expect(initialState).toEqual({
            hasError: false, 
            isLoading: false, 
            topPosts: [
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
        })
    });

    it('should set hasError to true when action is rejected', () => {
        const action = {type: loadTopPage.rejected};
        const initialState = homePageSlice.reducer(
        { 
          isLoading: false, hasError: false
        }, action);
        expect(initialState).toEqual({hasError: true, isLoading: false})
     })

})






