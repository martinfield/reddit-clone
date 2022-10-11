import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBestPage, selectPosts} from "../homepageSlice";
import { Post } from "../../Post/post";


export function Best() {
    const dispatch = useDispatch();
    const bestPosts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(loadBestPage());
    }, [dispatch])


        return (
        <div> 
            {bestPosts.map((post)=> {
                return (
                <Post
                key={post.id}
                post={post}
                title={post.title}
                author={`u/${post.author}`}
                subredditPrefixed={post['subreddit_name_prefixed']}
                subreddit={post.subreddit}
                url={post.url}
                media={post.media}
                comments={post['num_comments']}
                votes={post.ups}
                posthint={post['post_hint']}
                />
            )})}
        </div>
        )
       
}

