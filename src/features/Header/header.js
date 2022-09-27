import React from "react";
import RedditIcon from '@mui/icons-material/Reddit';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div>
            <Link to='/'>
                <RedditIcon />
                <h1>RedditSimple</h1>
            </Link>
        </div>
    )
}

