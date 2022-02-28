import React from 'react';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Row from './Row.js'
import candidatesData from './candidatesData.js';
import whatWeStandForData from './whatWeStandForData.js';
import platformData from './platformData.js';
import teamData from './teamData.js';
import Modal from './Modal.js';
import { useState } from 'react';
import PlayAnimation from './PlayAnimation.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import ReactNetflixPlayer from "react-netflix-player";

function HomeScreen() {
    const [displayModal, setDisplayModal] = useState(false);
    const [modalData, setModalData] = useState({});

    let navigate = useNavigate();
    const handleNavigation = function(){
      navigate('/', { replace: true });
    }

    const twoFunctionsCalled = function(modalJson){
        setDisplayModal(true);
        setModalData(modalJson);
    }
  return (
        <div className='homeScreen'>
            {/* <Router> */}
                <Routes>
                    <Route
                    path="/play"
                    element={<PlayAnimation/>}/>

                    <Route
                    path="/"
                    element={<React.Fragment>
                        {/* Nav */}
                        <Nav/>
                        {/* Banner */}
                        <Banner/>
                        {/* Row */}
                        <Row
                        title="Meet Your Candidates"
                        isLargeRow
                        data={candidatesData}
                        templateFunction={twoFunctionsCalled}
                        />
                        <Row title="What We Stand For"
                        isLargeRow
                        data={whatWeStandForData}
                        templateFunction={twoFunctionsCalled}
                        />
                        <Row title="Platform"
                        isLargeRow
                        data={platformData}
                        templateFunction={twoFunctionsCalled}
                        />
                        <Row title="Our Team" 
                        isLargeRow
                        data={teamData}
                        templateFunction={twoFunctionsCalled}
                        />
                        {/* Modal */}
                        <Modal show={displayModal} showFunction={setDisplayModal} modalTitle={modalData.modalTitle} modalInfo={modalData.modalInfo} modalThumbnail={modalData.thumbnail_url} modalWhatData={modalData.what_data} modalWhyData={modalData.why_data}/>

                        {/* PlayAnimation */}   
                        {/* <PlayAnimation/> */}
                    </React.Fragment>}
                    >
                    </Route>

                    <Route
                    path="/video"
                    element={<ReactNetflixPlayer
                        // Vídeo Link - Just data is required
                        src={modalData.video_url}
                        // src={"http://videoinvalid"}
                        title="Dragon Ball Z"
                        subTitle="Opening"
                        titleMedia="Dragon Ball Z"
                        extraInfoMedia="Opening"
                        // Text language of player
                        playerLanguage="en"
                        // Action when the button X (close) is clicked
                        backButton={() => { handleNavigation() }}
                        // The player use the all viewport
                        fullPlayer
                        autoPlay
                        startPosition={0}
                        // The info of the next video action
                          // dataNext={{ title: 'Não existe um próximo vídeo.' }}
                        // The action call when the next video is clicked
                        // onNextClick={() => { }}
                        // The list reproduction data, will be render in this order
                          // reprodutionList={[
                          //   {
                          //     nome: 'Opening',
                          //     id: 1,
                          //     playing: true,
                          //   },
                          //   {
                          //     nome: 'Teste',
                          //     id: 2,
                          //     playing: false,
                          //   },
                          // ]}
                        // The function call when a item in reproductionList is clicked
                          // onClickItemListReproduction={(id, playing) => {
                          //   return {
                          //     id,
                          //     playing,
                          //   };
                          // }}
                        // The function is call when the video finish
                        onEnded={() => { handleNavigation() }}
                        // The function is call when the video is playing (One time for frame)
                        onTimeUpdate={() => { }}
                        // Enable the orverlay when player is paused
                        overlayEnabled
                        // Enabled the auto clode controlls of player
                        autoControllCloseEnabled
                        // Style
                        primaryColor="#03dffc"
                        secundaryColor="#ffffff"
                        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
                        // Playback Rate
                        playbackRateStart={3}
                        playbackRateOptions={['0.25', '0.5', '0.75', 'Normal', '1.25', '1.5', '2', '3']}
                      // subtitleMedia="/teste.vtt"
                      />}/>
                </Routes>
            {/* </Router> */}
            
        </div>
    );
}

export default HomeScreen;
