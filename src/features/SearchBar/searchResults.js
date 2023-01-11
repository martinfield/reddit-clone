import React from "react";
import { useSelector } from "react-redux";
import { selectSearchResults } from "./searchbarSlice";
import { Post } from "../Post/post";

export function SearchResults() {
    const searchResults = useSelector(selectSearchResults);
    console.log(searchResults);

    if (!searchResults) {
        console.log('no search results')
      }
    
      return (
        <div>
          {searchResults && searchResults.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                authorPrefixed={`u/${post.author}`}
                subredditPrefixed={post["subreddit_name_prefixed"]}
                subreddit={post.subreddit}
                url={post.url}
                domain={post.domain}
                metaMedia={post["media_metadata"]}
                media={post.media}
                comments={post["num_comments"]}
                votes={post.ups}
                posthint={post["post_hint"]}
                permalink={post.permalink}
                created={post["created_utc"]}
              />
            );
          })}
        </div>
      );


    
}

   