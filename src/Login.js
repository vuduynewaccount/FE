import React from 'react';
import { Form, Button } from 'react-bootstrap'
import LoggedIn from './LoggedIn'
import ReactDOM from 'react-dom';
import Register from './Register';

const Login = () => {
    const onLoginClickBtn = () => {
        ReactDOM.render(
            <LoggedIn />,
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
        <Form className="border border-primary m-5">
            <Form.Group className="m-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Enter your ID"/>
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your pssword" />
            </Form.Group>

            <a href=""><Button className="d-flex me-auto ms-auto mb-3" variant="primary" type="submit" onClick={onLoginClickBtn}>Đăng nhập</Button></a>
            <div className="d-flex me-auto ms-auto mb-3">
                <p className="ms-auto me-auto">Bạn chưa có tài khoản? Hãy
                    &nbsp;
                    <a href="" onClick={onRegisterClickBtn}>Đăng ký</a>
                </p>
            </div>
        </Form>
    );
};

export default Login;