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
    Route
  } from "react-router-dom";
import ReactNetflixPlayer from "react-netflix-player";

function HomeScreen() {
    const [displayModal, setDisplayModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const twoFunctionsCalled = function(modalJson){
        setDisplayModal(true);
        setModalData(modalJson);
    }
  return (
        <div className='homeScreen'>
            <Router>
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
                        <Modal show={displayModal} showFunction={setDisplayModal} modalTitle={modalData.modalTitle} modalInfo={modalData.modalInfo}/>

                        {/* PlayAnimation */}   
                        {/* <PlayAnimation/> */}
                    </React.Fragment>}
                    >
                    </Route>

                    <Route
                    path="/video"
                    element={<ReactNetflixPlayer
                            src="https://github.com/faldund7/campaign-website/blob/master/src/assets/CallForSubmissionPost_2.mp4"
                            title="hello world"
                            subTitle="hello world"
                            titleMedia="hello world"
                            overlayEnabled={true}
                            fullPlayer={true}
                            autoControllCloseEnabled={true}
                            backButton={true}
                            />}/>
                </Routes>
            </Router>
            
        </div>
    );
}

export default HomeScreen;
