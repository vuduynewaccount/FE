import React from 'react';
import ReactDOM from 'react-dom'
import Login from './Login'

const LoggedIn = () => {
    ReactDOM.render(
        <Login />,
        document.getElementById('root')
    );
};

export default LoggedIn;