import React from "react";
import { Votes } from "../Votes/votes";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {Typography} from "@mui/material";
import { timeStamp } from "../HelperFunctions/helperFunctions";
import { UserInfo } from "../UserInfo/UserInfo";
import '../Post/post.css';



export function Comments(props) {
    const {author, created, body, votes, replies} = props;

    return (
        <Card  
        className='post-card'
        sx={{
            marginTop: '10px',
            maxWidth: '790px',
            backgroundColor: 'rgb(36, 36, 36)',
            borderRadius: '15px',
        }}>
            <CardHeader 
            className='post-header'
            avatar={
            <UserInfo username={author}/>
            } 
            subheader ={`Posted by u/${author} ${timeStamp(created)}`}
            subheaderTypographyProps={{
                fontSize: '0.9rem',
                color: 'rgb(160, 160, 160)',
            }}
            />
            <CardContent>
            <Typography
            sx={{
                fontSize:'1rem',
                color: 'rgb(216, 216, 216)',
            }}>{body}</Typography>
            </CardContent>
            <CardActions>
                <Votes votes={votes}/>
            </CardActions>
            {replies && replies.length > 0  &&
            replies.children.map((reply) => {
                return (
                    <Comments 
                    key={reply.data.id}
                    author={reply.data.author}
                    created={reply.data['created_utc']}
                    body={reply.data.body}
                    votes={reply.data.ups}
                    replies={reply.data.replies?.data} 
                    />
            
                )})
            } 
        </Card>
    )
}
