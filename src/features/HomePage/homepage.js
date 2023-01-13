import React from "react";
import { Route, Routes } from "react-router-dom";
import { Best } from "./Best/best";
import { Hot } from "./Hot/hot";
import { New } from "./New/new";
import { Top } from "./Top/top";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadHomePage, selectHomePosts } from "./homepageSlice";
import { Post } from "../Post/post";
import './feed.css';


export function HomePage() {
    const dispatch = useDispatch();
    const homePosts = useSelector(selectHomePosts);

    useEffect(() => {
        dispatch(loadHomePage());
    },[])

    return (
        <div className='feed-container' >
            <div>  
            <Routes> 
                <Route path='/best' element={<Best/>}/>
                <Route path='/hot' element={<Hot/>}/>
                <Route path='/new' element={<New/>}/>    
                <Route path='/top' element={<Top/>}/>
            </Routes>     
            </div>
            <div className='feed-container' > 
                {homePosts?.map((post)=> {
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
        </div>
        
            
    
    )
}