import React, {useState} from "react";
import { Button } from "@mui/material";

export function ScrollUpButton(){
    const [visible, setVisible] = useState();

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

      window.addEventListener('scroll', toggleVisible);
      
      return (
    
        <Button 
        role="button"
        data-cy='scroll-button'
        onClick={scrollToTop}
        sx={{
            display: visible ? 'inline' : 'none',
            position: 'fixed',
            borderRadius: '15px',
            fontWeight: 'bold',
            textTransform: 'none',
            left: '70%',
            bottom: '40px',
            height: '50px',
            zIndex: '1',
            cursor: 'pointer',
            color: 'rgb(213, 213, 213)',
            backgroundColor: 'rgb(36, 36, 36)',
            '&:hover':{
                color: 'rgb(219, 151, 74)',
            }
            }}>Back To Top</Button>  
        
      );
}