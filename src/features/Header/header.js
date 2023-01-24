import React from "react";
import RedditIcon from '@mui/icons-material/Reddit';
import { Link } from "react-router-dom";
import './header.css';

export function Header() {
    return (
        <div className='header-container'>
            <Link to='/' className='header-link' data-testid='header-link'>
                <RedditIcon className='header-icon' fontSize='large' />
                <h1 className='header-title'>Reddit<span className='header-simple'>Simple</span></h1>
            </Link>
        </div>
    )
}

