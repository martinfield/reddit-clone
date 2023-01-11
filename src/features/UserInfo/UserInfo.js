import React from "react";
import { Avatar } from "@mui/material";

export const UserInfo = ({username}) => {

    return (
        <Avatar
          src={`${username}`} 
          alt={`${username}`}
        />
    );
    

  
};
