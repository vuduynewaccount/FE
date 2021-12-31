import React from 'react';
import { Col } from 'react-bootstrap';
import FlowEventCard from './FlowEventCard'

const flowEvents = [
    { image: "" },
    { image: "" },
    { image: "" },
]

const MainBarLoggedIn = () => {
    return (
        <Col className="p-3">
          <h2>Your images</h2>
          {flowEvents.map(({ image }, i) => <FlowEventCard id={i} image={image}/>)}
        </Col>
    );
};

export default MainBarLoggedIn;