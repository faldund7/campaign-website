import React from 'react';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Row from './Row.js'

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
            />
            <Row title="What We Stand For"/>
            <Row title="Platform"/>
            <Row title="Our Team" />
        </div>
    );
}

export default HomeScreen;
