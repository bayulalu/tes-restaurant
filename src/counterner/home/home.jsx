import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Singgle from './singgle';
import Login from '../pages/login/login';
import Dashbord from '../pages/dashbord/dashbord';
import Add from '../pages/dashbord/add';
import ProtectedRoute from '../../counter/login/protectedRoute';
import Artikel from '../pages/dashbord/artikel';
// import Detail from '../pages/dashbord/Detail';

class Home extends Component{
    render(){
        return(
            <Fragment >
                <Router>
                    <Switch >
                        <ProtectedRoute path="/login" exact component={Login} />
                        <Route path="/" exact component={Singgle} />
                        <ProtectedRoute path="/dashboard" component={Dashbord} />
                        <ProtectedRoute path="/add"  component={Add} />
                        <ProtectedRoute path="/artikel"  component={Artikel} />
                        {/* <ProtectedRoute path="/detail/:title" component={Detail} /> */}
                    </Switch>
                  
                </Router>
            </Fragment>
        )
    }
}

export default Home;