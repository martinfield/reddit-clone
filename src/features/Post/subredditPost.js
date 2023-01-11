import React from "react";
import { Votes } from "../Votes/votes";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, Typography} from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Link } from "react-router-dom";
import moment from "moment";
import { UserInfo } from "../UserInfo/UserInfo";


export function SubredditPost(props) {
    const classes = useStyles;
    let mediaSwitch;

    // show different elements depending media type: img, video, link or text
    if(props.posthint === "link"){
        mediaSwitch = <a href={props.url}>{props.url.slice(0,30) + '...'}</a>
    } else if (props.url.match('https://www.reddit.com/r/')){
        mediaSwitch = <div></div>;
    } else {
        mediaSwitch = 
        <CardMedia 
        sx={classes.media}
        component={props.media ? 'video' :  'img'}
        src={props.media && props.media['reddit_video'] && props.media['reddit_video']['fallback_url'] ? props.media['reddit_video']['fallback_url'] : props.url}
        controls
        />
    }
    return (
        <Card key={props.author} sx={classes.root}>

            <CardHeader 
            avatar={
            <UserInfo username={props.author}/>
            } 
            subheader ={`Posted by ${props.authorPrefixed} ${timeStamp(props.created)}`}
            />
            <CardContent>
                <Typography>{props.title}</Typography>
            </CardContent>
            {mediaSwitch}
            <CardActions>
                <Votes votes={props.votes}/>
                <Link to={`${props.permalink}`}>
                    <Button variant='text'>
                        <ChatBubbleIcon />
                        {kFormatter(props.comments)} Comments
                    </Button>
                </Link>
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

//relative Time stamp
function timeStamp(utc) {
    const dateTime = new Date(utc * 1000);
    return moment(dateTime).fromNow();
}
