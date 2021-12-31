import React from 'react';
import { Row } from 'react-bootstrap';
import HeaderLoggedIn from './HeaderLoggedIn';
import LeftBar from './LeftBar';
import MainBar from './MainBar';

const LoggedIn = () => {
  return (
    <div className="wrapper">
      <HeaderLoggedIn />
        <Row>
          <LeftBar />
          <MainBar />
        </Row>
    </div>
  );
}

export default LoggedIn;