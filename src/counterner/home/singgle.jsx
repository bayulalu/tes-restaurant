import React, { Component, Fragment  } from "react";
import {Link} from 'react-router-dom';
import './singgle.css';
import {connect} from 'react-redux';

class Singgle extends Component{
    render(){
        return(
            <Fragment>
                <div className="bg">
                <nav className="navbar navbar-expand-lg navbar-light ">
  
                <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    
                    </ul>
                    {this.props.login ? (<Link to="/dashboard" className="btn bg-light btn-info tombol">Dashboard</Link>) :
                                             (<Link to="/login" className="btn bg-light btn-info tombol">  SIGN</Link>)}
                   
                </div>
                </div>
                </nav>


                <div className="container" id="contain">
                <div className="row">
                    
                    <div className="col-lg-6">
                        <h1 className="text-white res">Restaurant
                            
                        </h1>
                        <h2 className="text-white">Location of Restaurant</h2>
                    </div> 
                    <div className="col-lg-6"></div>


                    <div className="col-lg-12 map">
                        <div id="map2">

                        </div>
                    </div>   
                </div>
                </div>
                </div>
            </Fragment>
        )
    }
}

const mapToStateProps = (state) => {
    return{
      login: state.login
    }
}
export default connect(mapToStateProps)(Singgle);