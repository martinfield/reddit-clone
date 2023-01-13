import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPage, selectNewPosts } from "../homepageSlice";
import { Post } from "../../Post/post";

export function New() {
    const dispatch = useDispatch();
    const newPosts = useSelector(selectNewPosts);
    
    useEffect(()=> {
        dispatch(loadNewPage());
    }, [dispatch])

        return (
            <div className='feed-container'>
                {newPosts?.map((post)=> {
                return (
                <Post
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                authorPrefixed={`u/${post.author}`}
                subredditPrefixed={post['subreddit_name_prefixed']}
                subreddit={post.subreddit}
                url={post.url}
                media={post.media}
                comments={post['num_comments']}
                votes={post.ups}
                posthint={post['post_hint']}
                permalink={post.permalink}
                created={post['created_utc']}
                />
            )})}
            </div>
        )
}