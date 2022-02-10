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
           FIRST AND SECOND
             </h1>
            
         <div className="banner__buttons">
           <button className="banner__button">Play</button>
           <button className="banner__button">Vote</button>
         </div>

         <h1 className="banner__description">
           {truncate("First and Second here! We're very excited to be running to be your next Student Body President + Vice President at the University of Cincinnati! We look forward to every COVID Careful interaction with you over these next couple weeks and can't wait to learn what's most important to you! We hope to share more about our vision and platform and #TogetherWeWill build the movement to help students succeed!", 300)}
         </h1>
       </div>

       <div className="banner--fadeBottom" />
     </header>
    );
}

export default Banner