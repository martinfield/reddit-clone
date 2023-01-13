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
import './post.css';


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
        <Card 
        key={props.author} 
        className='post-card'
        sx={{
            margin: '10px',
            maxWidth: '790px',
            backgroundColor: 'rgb(36, 36, 36)',
            borderRadius: '15px',
        }}>

            <CardHeader 
            avatar={
            <UserInfo username={props.author}/>
            } 
            subheader ={`Posted by ${props.authorPrefixed} ${timeStamp(props.created)}`}
            subheaderTypographyProps={{
                display: 'inline-block',
                fontSize: '0.9rem',
                color: 'rgb(160, 160, 160)',
            }}
            />
            <CardContent>
                <Typography
                sx={{
                    fontSize:'1rem',
                    color: 'rgb(216, 216, 216)',
                }}>{props.title}</Typography>
            </CardContent>
            {mediaSwitch}
            <CardActions>
                <Votes votes={props.votes}/>
                <Link 
                to={`${props.permalink}`}
                className='post-link'>
                    <Button 
                    variant='text'
                    className='post-button'
                    sx={{
                        color:'rgb(213, 213, 213)',
                        fontSize: '1rem',
                        textTransform:'none',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'rgb(126, 125, 125)',
                        }
                    }}>
                        <ChatBubbleIcon
                        className='post-icon' 
                        fontSize="medium"
                        sx={{
                           margin: '5px',
                           marginRight: '10px',
                           color: 'rgb(213, 213, 213)',
                           '&:hover': {
                               backgroundColor: 'transparent',
                               color: 'rgb(126, 125, 125)',
                           }
                        }} />
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
