import React from "react";
import { Votes } from "../Votes/votes";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {Typography} from "@mui/material";
import moment from "moment";
import { UserInfo } from "../UserInfo/UserInfo";


export function Comments(props) {
    const {author, created, body, votes, replies} = props;
    const classes = useStyles;

    return (
        <Card  sx={classes.root}>
            <CardHeader 
            avatar={
            <UserInfo username={author}/>
            } 
            subheader ={`Posted by u/${author} ${timeStamp(created)}`}
            />
            <CardContent>
            <Typography>{body}</Typography>
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



// CSS Style Testing
const useStyles = {
    root: {
        maxWidth: 600,
        margin: 'auto',
    }
};

//relative Time stamp
function timeStamp(utc) {
    const dateTime = new Date(utc * 1000);
    return moment(dateTime).fromNow();
}
