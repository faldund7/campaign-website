import React, { useState, useEffect } from "react";
// import axios from "./axios";
// import requests from "./requests";
import "../css/Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const request =  await axios.get(requests.fetchNetflixOriginals);
    //         setMovie( 
    //             request.data.results[
    //             Math.floor(Math.random() * request.data.results.length - 1)
    //          ]
    //         );
    //         return request;
    //       }
    //       fetchData();
    //     }, []);

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
         style={{
            backgroundSize: "cover",
             backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
         )`,
        backgroundPosition: "center center",
      }}
    >
        {/* <div>
             <video loop autoPlay muted id="bgVideo">
                 <source src={require('../images/CallForSubmissionPost_2.mp4')} type="video/mp4"/>
             </video>
        </div> */}
         <div className="banner__contents">
             <h1 className="banner__title">
           BADDAM AND GLUKOSE
             </h1>
            
         <div className="banner__buttons">
           <button className="banner__button">Play</button>
           {/* <button className="banner__button">My List</button> */}
         </div>

         <h1 className="banner__description">
           {truncate(movie?.overview, 150)}
         </h1>
       </div>

       <div className="banner--fadeBottom" />
     </header>
    );
}

export default Banner