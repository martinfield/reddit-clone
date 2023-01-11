import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCommunities, selectCommunities } from "./communitiesSlice";
import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";

export function Communities() {
    const dispatch = useDispatch();
    const communities = useSelector(selectCommunities);

    console.log(communities)
    
    useEffect(() => {
        if (!communities) {
            dispatch(loadCommunities);
        }
    }, [communities]);

    return (
        <div>
            <List>
               {communities?.map((sub) => {
                return (
                <ListItem key={sub.name}>
                    <Link to={`r/${sub.title}`}>
                        {`r/${sub.title}`}
                    </Link>
                </ListItem>
                )
                
               })}
            </List>
        </div>
    )
}