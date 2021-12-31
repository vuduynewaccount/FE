import React from 'react';
import ReactDOM from 'react-dom';
import Registered from './Registered';
import Login from './Login';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const onRegisterClickBtn = () => {
        ReactDOM.render(
            <Registered />,
            document.getElementById('root')
        );
    };
    const onLoginClickBtn = () => {
        ReactDOM.render(
            <Login />,
            document.getElementById('root')
        );
    };

    return (

        <Form className="border border-primary m-5">
            <Form.Group className="m-5">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="m-5">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Enter your ID" />
            </Form.Group>

            <Form.Group className="m-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group className="m-5">
                <Form.Label>Key</Form.Label>
                <Form.Control type="text" placeholder="Enter your key" />
            </Form.Group>

            <a href=""><Button className="d-flex me-auto ms-auto mb-3" variant="primary" type="submit" onClick={onRegisterClickBtn}>Đăng ký</Button></a>
            <div className="d-flex me-auto ms-auto mb-3">
                <p className="ms-auto me-auto">Bạn đã có tài khoản? Hãy
                    &nbsp;
                    <a href="" onClick={onLoginClickBtn}>Đăng nhập</a>
                </p>
            </div>
            
        </Form>
    );
};

export default Register;