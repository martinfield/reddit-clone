import React, {useEffect} from "react";
import { loadHotPage, selectHotPosts } from "../homepageSlice";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../Post/post";


export function Hot() {
    const dispatch = useDispatch();
    const hotPosts = useSelector(selectHotPosts);
    
    useEffect(()=> {
         dispatch(loadHotPage());
    }, [dispatch])

        return (
            <div className='feed-container'> 
            {hotPosts?.map((post)=> {
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