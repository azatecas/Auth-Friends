import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest }) => {
    //rest operator ...rest not the same as spread operator
    const token = window.localStorage.getItem('token');

    return (
        <Route 
            {...rest}
            render={props => {
                if (token) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    );
};

export default PrivateRoute;