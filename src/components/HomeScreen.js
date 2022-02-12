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

function HomeScreen() {
    const [displayModal, setDisplayModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const twoFunctionsCalled = function(modalJson){
        setDisplayModal(true);
        setModalData(modalJson);
    }
  return (
        <div className='homeScreen'>
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
        </div>
    );
}

export default HomeScreen;
