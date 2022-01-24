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
            <Row title="Top Rated"/>
            <Row title="Action Movies" />
            <Row title="Comedy Movies" />
            <Row title="Horror Movies" />
            <Row title="Romance Movies" />
            <Row title="Documentaries" />
        </div>
    );
}

export default HomeScreen;
