import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadBestPage } from "../homepageSlice";

export function Best() {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(loadBestPage());
    }, [dispatch])

        return (
            <div>
                Now showing Page: best
            </div>
        )
    }