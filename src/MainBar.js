import React from 'react';
import { Col } from 'react-bootstrap';
import FlowEventCard from './FlowEventCard'

const flowEvents = [
    { image: "" },
    { image: "" },
    { image: "" },
]

const MainBar = () => {
    return (
        <Col className="p-3">
          <h2>Popular images</h2>
          {flowEvents.map(({ image }, i) => <FlowEventCard id={i} image={image}/>)}
        </Col>
    );
};

export default MainBar;