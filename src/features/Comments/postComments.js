import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "./postCommentSlice";
import { useParams } from "react-router-dom";
import { Post } from "../Post/post";
import { Comments } from "./Comments";
import '../HomePage/feed.css'

export function PostWithComments() {
    const dispatch = useDispatch();
    const {subreddit, id, title} = useParams();
    const permalink = `r/${subreddit}/comments/${id}/${title}`;
    const post = useSelector(state => state.postComments.comments[0]?.data.children[0].data);
    const comments = useSelector(state => state.postComments.comments[1]?.data.children.map(comment => comment.data));     
 
    useEffect(() => {
        dispatch(loadComments(permalink));
    }, [dispatch, permalink]);


    return (
        post ? 
            <div className='feed-container'>
                <Post
                key={post.id}
                title={post.title}
                author={`u/${post.author}`}
                authorPrefixed={`u/${post.author}`}
                subredditPrefixed={post['subreddit_name_prefixed']}
                subreddit={post.subreddit}
                url={post.url}
                media={post.media}
                comments={post['num_comments']}
                votes={post.ups} 
                posthint={post['post_hint']}
                domain={post.domain}
                permalink={post.permalink}
                created={post['created_utc']}
                />
                {comments && comments.length > 0  && comments.map((comment) => {
                    if(comment.body && comment.body !== "[removed]"){ //checks that the comment has a body or has not been removed
                        return (
                            <Comments
                                key={comment.id}
                                body={comment.body}
                                author={comment.author}
                                votes={comment.ups} 
                                created={comment['created_utc']}
                                replies={comment.replies?.data}
                            />
                            )
                    }
                })} 
            </div> :
            <div>
            </div>
    )      
}

