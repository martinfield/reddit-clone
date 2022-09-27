import React from "react";
import { Route, Routes } from "react-router-dom";
import { Best } from "./Best/best";
import { Hot } from "./Hot/hot";
import { New } from "./New/new";
import { Top } from "./Top/top";


export function HomePage() {
    return (
        <div>
            
            <Routes> 
                <Route path='/best' element={<Best/>}/>
                <Route path='/hot' element={<Hot/>}/>
                <Route path='/new' element={<New/>}/>    
                <Route path='/top' element={<Top/>}/>
            </Routes>     
            
        </div>
        
            
    
    )
}