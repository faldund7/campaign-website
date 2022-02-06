import React from 'react';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Row from './Row.js'
import candidatesData from './candidatesData.js';
import whatWeStandForData from './whatWeStandForData.js';
import platformData from './platformData.js';
import teamData from './teamData.js'
import ModalNew from './ModalNew.js';

function HomeScreen() {
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
            />
            <Row title="What We Stand For"
            isLargeRow
            data={whatWeStandForData}
            />
            <Row title="Platform"
            isLargeRow
            data={platformData}
            />
            <Row title="Our Team" 
            isLargeRow
            data={teamData}
            />
            <ModalNew/>
        </div>
    );
}

export default HomeScreen;
