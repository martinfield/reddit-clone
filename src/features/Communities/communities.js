import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCommunities, selectCommunities } from "./communitiesSlice";
import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import './communities.css';

export function Communities() {
    const dispatch = useDispatch();
    const communities = useSelector(selectCommunities);

    useEffect(() => {
        dispatch(loadCommunities()); 
    }, []);

    return (
        <div className='communities-container'>
            <h3 className='communities-header'>Top Communities</h3>
             <List className='communities-list'>
               {communities.length > 0 && communities.map((sub) => {
                return (
                <ListItem key={sub.name} className='communities-list-item'>
                    <Link to={`r/${sub.display_name}`} className='communities-list-link'>
                        {`r/${sub.display_name}`}
                    </Link>
                </ListItem>
                )
               })}
            </List>
        </div>
    )
}