import React from "react";
import "../css/Banner.css";

function Banner() {

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
         style={{
            backgroundSize: "cover",
             backgroundImage: `url(
              "https://2022campaign.s3.us-east-2.amazonaws.com/banner_video.mp4"
         )`,
        backgroundPosition: "center center",
      }}
    >
         <div className="banner__contents">
             <h1 className="banner__title">
           {`Baddam & Lukose 2022`} 
             </h1>
            
         <div className="banner__buttons">
           <button className="banner__button">Play</button>
           <button className="banner__button">Vote</button>
           <a href="https://www.instagram.com/baddamlukose2022/" target="_blank">
           <button className="banner__button">Instagram</button>
           </a>
           <a href="https://vm.tiktok.com/TTPdBgUmso/" target="_blank">
           {/* <button className="banner__button">TikTok</button> */}
           </a>
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