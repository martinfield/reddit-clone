import React from "react";
import { NavLink } from "react-router-dom";
import RocketIcon from '@mui/icons-material/Rocket';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/best'>
                        <RocketIcon />
                        Best
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/hot'>
                        <WhatshotIcon />
                        Hot
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new'>
                        <NewReleasesIcon />
                        New
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/top'>
                        <LeaderboardIcon /> 
                        Top
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}