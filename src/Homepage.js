import React from 'react';
import { Row } from 'react-bootstrap';
import Header from './Header.js';
import LeftBar from './LeftBar';
import MainBar from './MainBar';

const Homepage = () => {
  return (
    <div className="wrapper">
      <Header />
        <Row>
          <LeftBar />
          <MainBar />
        </Row>
    </div>
  );
}

export default Homepage;
