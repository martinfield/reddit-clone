import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadBestPage } from "../homepageSlice";

export function Best() {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(loadBestPage());
    }, [])

        return (
            <div>
                Now showing Page: best
            </div>
        )
    }