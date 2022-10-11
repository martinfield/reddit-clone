import React, { useEffect } from "react";
import { Votes } from "../Votes/votes";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { Button, Typography } from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useDispatch } from "react-redux";


export function Post(props) {
    const dispatch = useDispatch();
    const classes = useStyles;
    let mediaSwitch;

    // show different elements depending media type: img, video, link or text
    if(props.posthint ==='link'){
        mediaSwitch = <a href={props.url}>{props.url}</a>
    } else if (props.url.match('https://www.reddit.com/r/')){
        mediaSwitch = <div></div>;
    } else {
        mediaSwitch = 
        <CardMedia 
        sx={classes.media}
        component={props.media ? 'video' :  'img'}
        image={props.media? props.media['reddit_video']['fallback_url'] : props.url}
        controls
        autoplay
        />
    }
    return (
        <Card sx={classes.root}>
            <CardHeader 
            avatar={
                <Avatar 
                src=''
                size='sm'
                alt={props.subredditPrefixed}
                />
            }
            title={props.subredditPrefixed}
            subheader ={props.author}
            />
            <CardContent>
                <Typography>{props.title}</Typography>
            </CardContent>
            {mediaSwitch}
            <CardActions>
                <Votes votes={props.votes}/>
                <Button varaint='text'>
                    <ChatBubbleIcon />
                    {kFormatter(props.comments)} Comments
                </Button>
            </CardActions>

        </Card>
    )
}

// CSS Style Testing
const useStyles = {
    root: {
        maxWidth: 790,
        margin: 'auto',
    },
    media: {
        maxWidth: 604,
        margin: 'auto'
    }
}

// to format vote/comment count so that it is rounded with a 'k' to one decimal point. e.g 47.2k
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}
