import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Nav, NavItem, NavLink, NavDropdown } from 'react-bootstrap';
import { BsHouseFill, BsImages } from 'react-icons/bs';
import Homepage from './Homepage'

const LeftBar = () => {
    const onHomeClickBtn = () => {
        ReactDOM.render(
            <Homepage />,
            document.getElementById('root')
        );
    };
    const onFilesClickBtn = () => {
        return (
            <Nav>
            <NavDropdown>
                <NavDropdown.Item className="text-warning">You have not logged in yet.</NavDropdown.Item>
            </NavDropdown></Nav>
        );
    };

    return (
        <Col xs={2} className="border-end border-primary flex-column">
            <Nav variant="pills" className="flex-column" defaultActiveKey="1">
                <NavItem><NavLink className="link-dark border border-primary mt-3 ms-3 pb-0 pe-3" eventKey="1" onClick={onHomeClickBtn}>
                    <p className="d-flex align-items-center"><BsHouseFill className="me-2"/>Home</p>
                </NavLink></NavItem>

                <NavItem><NavLink className="link-dark border border-primary mt-3 ms-3 pb-0 pe-3" eventKey="2" onClick={onFilesClickBtn}>
                    <p className="d-flex align-items-center"><BsImages className="me-2"/>Your images</p>
                </NavLink></NavItem>
            </Nav>
        </Col>
    );
}

export default LeftBar;