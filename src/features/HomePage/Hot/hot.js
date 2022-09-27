import React, {useEffect} from "react";
import { loadHotPage } from "../homepageSlice";
import { useDispatch } from "react-redux";


export function Hot() {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(loadHotPage());
    }, [dispatch])

        return (
            <div>
                Now showing Page: Hot
            </div>
        )
    }