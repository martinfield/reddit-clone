import React from "react";
import { render } from "@testing-library/react";
import { Post } from "./post";
import { BrowserRouter as Router, MemoryRouter} from "react-router-dom";

describe("Post component", () => {
    //testing if media features adapts to URL being passed as props
    const props = {
        title: "Test Title",
        author: "TestAuthor",
        authorPrefixed: "u/TestAuthor",
        subreddit: "TestSubreddit",
        subredditPrefixed: "r/TestSubreddit",
        url: "http://testurl.com",
        media: null,
        comments: 50,
        votes:40,
        posthint: "link",
        permalink: "/r/TestSubreddit/comments/10hpeci/testPostLink123456/",
        created: 1606902400
    }
    // testing if media features adapts to video link being passed as props
    const propsMedia = {
        title: "Test Title",
        author: "TestAuthor",
        authorPrefixed: "u/TestAuthor",
        subreddit: "TestSubreddit",
        subredditPrefixed: "r/TestSubreddit",
        url :"https://v.redd.it/5u2oufp3jfda1",
        media: {
            reddit_video: {
                fallback_url: "https://v.redd.it/5u2oufp3jfda1/DASH_720.mp4?source=fallback",
                height: 720,
                width: 686
            }
        },
        comments: 50,
        votes:40,
        posthint: "hosted:video",
        permalink: "/r/TestSubreddit/comments/10hpeci/testPostLink123456/",
        created: 1606902400
    }
    const propsText = {
        title: "Test Title",
        author: "TestAuthor",
        authorPrefixed: "u/TestAuthor",
        subreddit: "TestSubreddit",
        subredditPrefixed: "r/TestSubreddit",
        url :"https://www.reddit.com/r/TestSubreddit/comments/193nfo2/test_article_1234",
        media: null,
        comments: 50,
        votes:40,
        posthint: null,
        permalink: "https://www.reddit.com/r/TestSubreddit/comments/193nfo2/test_article_1234",
        created: 1606902400
    }
    it("should render the correct title, author, subreddit and url", () => {

        const { getByText } = render(
            <Router>
                <Post {...props} />
            </Router>
        );
        expect(getByText("Test Title")).toBeInTheDocument();
        expect(getByText("Posted by u/TestAuthor 2 years ago")).toBeInTheDocument();
        expect(getByText("r/TestSubreddit")).toBeInTheDocument();
        expect(getByText("http://testurl.com...")).toBeInTheDocument(); //media feature should just display a external link thats been trimmed (appended with ...) if posthint is 'link'
    });
    it("should render a video when the media prop provides a video URL", () => {

        const { getByTestId } = render(
            <Router>
                <Post {...propsMedia} />
            </Router>
        );
        expect(getByTestId('card-media')).toBeInTheDocument();
    });
    it("should render an empty div in the cardMedia section when the post just contains text ", () => {

        const { getByTestId } = render(
            <Router>
                <Post {...propsText} />
            </Router>
        );
        expect(getByTestId('media-empty-div')).toBeInTheDocument();
        });
    it('should provide the correct route to postComments', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Post {...props} />
            </MemoryRouter>
        );
        
        expect(getByTestId('comment-link')).toHaveAttribute('href', "/r/TestSubreddit/comments/10hpeci/testPostLink123456/");
    });
});

