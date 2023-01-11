import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadSearchResults } from "./searchbarSlice";
import { useNavigate } from "react-router-dom";


const searchIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (searchTerm.length > 0) {
            dispatch(loadSearchResults(searchTerm))
            .then(()=> navigate(`/search/${searchTerm}`));
        
        }
    }, [searchTerm, navigate]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Search term: ${searchTerm}`);
        setSearchTerm('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search Reddit..."
                value={searchTerm}
                onChange={handleChange}
            />         
        </form>
    );
};
