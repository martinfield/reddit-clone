import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
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
        <Button onClick={handleIncrementVote}>
             <ArrowUpwardRoundedIcon />
        </Button>
        <Typography>
            {votes}
        </Typography>
         <Button onClick={handleDecrementVote}>
            <ArrowDownwardRoundedIcon />
        </Button>
        </>
        
    )
}