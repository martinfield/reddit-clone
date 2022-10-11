import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadTopPage } from "../homepageSlice";

export function Top() {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(loadTopPage());
    }, [dispatch])

        return (
            <div>
                Now showing Page: Top
                
            </div>
        )
    }