import React from 'react';
import Image from 'react-bootstrap/Image'

const FlowEventCard = ({ id, image }) => {
    return (
        <div className=" border border-primary p-3 mb-2 mt-2 me-3">
            <p className="d-flex align-items-center">
                <a href="">
                    <Image src="" />{image}
                </a>
            </p>
        </div>
    );
};

export default FlowEventCard;