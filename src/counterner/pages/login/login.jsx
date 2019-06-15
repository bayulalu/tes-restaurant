import React ,{Component, Fragment } from "react";
import './login.css';
import swal from 'sweetalert';

import ActionType from '../../../redux/reducer/gelobalActionType';
import {connect} from 'react-redux';

import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        username: '',
        password : ''
    }

    hendleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        }, () => {
            // console.log(this.state.password);
            
        })
    }

    submit = (e) => {
        e.preventDefault();
        if (this.state.username == 'bayu@admin.com' && this.state.password == '12345') {
            this.props.hendleLogin(true)
            
        }else{
            swal({
                title: "Upss!",
                text: "Silahkan Cek Username dan password",
                icon: "error",
                button: "Close",
              });
        }
      
    }

    render(){
        if(this.props.login){
            
            return <Redirect push to='/dashboard' />
        }
        return(
           <Fragment>
               <div className="bg-login">
            <div className="text-center">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-4 login"> 
                        <form className="form-signin" onSubmit={this.submit}>
                        <p className="font-weight-normal">sign in with credentials</p>
                            <label className="sr-only">Email</label>
                            
                            <input type="email" id="inputEmail" className="form-control" onChange={this.hendleChange} name="username" placeholder="Email" required  />
                            <label  className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" onChange={this.hendleChange} name="password"  placeholder="Password" required />
                        
                            <button className="btn btn-sm  tombol2"  type="submit">SIGN IN</button>
                        </form>
                    </div>
                </div>
            </div>
          
          </div>
          </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
	return{
		login: state.login
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		hendleLogin : (data) => dispatch({type: ActionType.IS_LOGIN, login: data})

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
