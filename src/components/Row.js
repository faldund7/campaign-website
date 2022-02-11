import React from 'react';
import '../css/Row.css';
// import {  useState, useEffect } from 'react';
// import data from './candidatesData.js';
// import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ModalNew from './ModalNew';

function Row({ title, isLargeRow = false, data }) {
    // const [movies, setMovies] = useState([]);

    // const base_url = "https://image.tmdb.org/t/p/original/";

    // useEffect(() => {
    //     async function fetchData(){
    //         const request = await axios.get(fetchUrl);
    //         setMovies(request.data.results);
    //         // Good practice: so that the function cuts out
    //         return request;
    //     }

    //     fetchData();
    // }, [fetchUrl]);

    const handleImageClick = function(open){
        
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {data.map((value) => 
                    isLargeRow && (
                            <img 
                                id={`img${value.id}`}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                key={value.id}
                                src={`${value.url}`} alt={value.name}
                                onClick={() => handleImageClick(true)}
                            />
                        
                        )
                        
                )}
            </div>
        </div>
    );
}

export default Row;