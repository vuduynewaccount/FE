import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import Login from './Login';
import Register from './Register';

const Header = () => {
    const onLoginClickBtn = () => {
        ReactDOM.render(
            <Login />,
            document.getElementById('root')
        );
    };
    const onRegisterClickBtn = () => {
        ReactDOM.render(
            <Register />,
            document.getElementById('root')
        );
    };

    return (
        <Navbar bg="primary" variant="dark" expand="lg" staticTop>
            <Container>
                <Navbar.Brand className="ms-5" href="#home"><AiOutlineMenu/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex me-auto ms-auto">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button variant="light"><BsSearch /></Button>
                    </Form>

                    <Nav>
                        <Navbar.Brand><a className="text-white me-2" href="./Login" onClick={onLoginClickBtn}>Đăng nhập</a></Navbar.Brand>
                        <Navbar.Brand onClick={onRegisterClickBtn}><a className="text-white" href="./Register">Đăng ký</a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;