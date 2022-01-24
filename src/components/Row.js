import React from 'react';
import '../css/Row.css';
import {  useState, useEffect } from 'react';
import data from './data.js';
// import axios from 'axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

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

    // console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {data.map((value) => 
                    isLargeRow && (
                        <img 
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={value.id}
                            src={`${value.url}`} alt={value.name}
                        />
                        )
                )}
            </div>
            
        </div>
    );
}

export default Row;