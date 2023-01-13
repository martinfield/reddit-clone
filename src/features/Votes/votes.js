import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import './votes.css';
import { grey } from "@mui/material/colors";

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'k' : Math.sign(num)*Math.abs(num)
}

export function Votes(props) {
    const [votes, setVotes] = useState(props.votes);
    const formattedVotes = kFormatter(votes)

    function handleIncrementVote(e) {
        e.preventDefault();
        if(props.votes === votes){
            setVotes(prevCount => prevCount += 1)
        } else {
            return votes;
        }
        
    }

    function handleDecrementVote(e) {
        e.preventDefault();
        setVotes(prevCount => prevCount -= 1)
    }
    return (
        <>
        <Button 
        onClick={handleIncrementVote}
        className='votes-button-up'
        sx={{
            minWidth: '35px',
            '&:hover': {
                backgroundColor: 'transparent',
            }
        }}
        >
             <ArrowUpwardRoundedIcon 
             className='votes-up' 
             fontSize='large'
             sx={{
                color: 'rgb(213, 213, 213)'
             }} />
        </Button>
        <Typography sx={{
            margin: '3px',
            color: 'rgb(213, 213, 213)',
        }}>
            {formattedVotes}
        </Typography>
         <Button 
         onClick={handleDecrementVote}
         className='votes-button-down'
         sx={{
            minWidth: '35px',
             '&:hover': {
                backgroundColor: 'transparent',
            }
        }}
         >
            <ArrowDownwardRoundedIcon className='votes-down' fontSize='large'sx={{
                color: 'rgb(213, 213, 213)',
                padding: '0px',
            }} />
        </Button>
        </>
        
    )
}