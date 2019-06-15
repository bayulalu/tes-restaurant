import React from "react";

import { Route, Redirect } from 'react-router-dom';
// import { withAuth } from "../../context/AuthContextProvider";
import Login from '../../counterner/pages/login/login';

import {connect} from 'react-redux';

function ProtectedRoute(props) {
    const {component: Component, ...rest } = props

    return (
        props.login ? (<Route {...rest} component={Component} />)
                         : (  <Route to='/login' push component={Login}  />)

        
    )
}


const mapToStateProps = (state) => {
    return{
        login: state.login
    }
}

export default connect(mapToStateProps)(ProtectedRoute);