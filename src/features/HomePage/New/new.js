import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadNewPage } from "../homepageSlice";

export function New() {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(loadNewPage());
    }, [dispatch])

        return (
            <div>
                Now showing Page: New
            </div>
        )
    }