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
import { timeStamp, kFormatter } from "../HelperFunctions/helperFunctions";
import { UserInfo } from "../UserInfo/UserInfo";
import './post.css';


export function SubredditPost(props) {
    let mediaSwitch;

    // show different elements depending media type: img, video, link or text
    if(props.posthint === "link"){
        mediaSwitch = <a href={props.url}>{props.url.slice(0,30) + '...'}</a>
    } else if (props.url.match('https://www.reddit.com/r/')){
        mediaSwitch = <div data-testid='media-empty-div'></div>;
    } else {
        mediaSwitch = 
        <CardMedia 
        component={props.media ? 'video' :  'img'}
        src={props.media && props.media['reddit_video'] && props.media['reddit_video']['fallback_url'] ? props.media['reddit_video']['fallback_url'] : props.url}
        controls
        data-testid='card-media'
        />
    }
    return (
        <Card 
        key={props.author} 
        className='post-card'
        sx={{
            marginTop: '10px',
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
                className='post-link'
                data-testid='comment-link'>
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
