import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubreddit, loadSubredditAbout, selectSubredditPosts, selectSubredditAbout } from "./subredditSlice";
import { SubredditPost } from "../Post/subredditPost";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export function Subreddit() {
    const dispatch = useDispatch();
    const {subreddit} = useParams();
    const subredditPosts = useSelector(selectSubredditPosts);
    const subredditAbout = useSelector(selectSubredditAbout);

     useEffect(() => {
        dispatch(loadSubreddit(subreddit));
        dispatch(loadSubredditAbout(subreddit))
    }, [dispatch]);


    return (
        <>
            <div>
                <Link to={`r/${subreddit}`}>
                    <div>
                        <Avatar src={subredditAbout['icon_img']}/>
                        <div>
                            <h1>{subredditAbout.title}</h1>
                            <h2>{subredditAbout['display_name_prefixed']}</h2>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                {subredditPosts.map((post)=> {
                    return (
                    <SubredditPost
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    authorPrefixed={`u/${post.author}`}
                    subredditPrefixed={post['subreddit_name_prefixed']}
                    subreddit={post.subreddit}
                    url={post.url}
                    domain={post.domain}
                    metaMedia={post['media_metadata']}
                    media={post.media}
                    comments={post['num_comments']}
                    votes={post.ups}
                    posthint={post['post_hint']}
                    permalink={post.permalink}
                    created={post['created_utc']}
                    />
                )})} 
                
            </div>
        </>
        
    )
}

