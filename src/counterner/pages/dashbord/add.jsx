import React, { Component, Fragment  } from "react";
import './dashbord.css';
import ActionType from '../../../redux/reducer/gelobalActionType';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';


class Add extends Component{
    state = {
       data: {
           name: '',
           info: '',
       }
   }

   

   hendleChange = (e) => {
    let Newdata = {...this.state.data};
    Newdata[e.target.name] = e.target.value

    this.setState({
        data: Newdata
    }, () => {
        console.log(this.state.data);
        
    })

 
}


   hendleSubmit = (e) => {
        e.preventDefault();
        var tgl = new Date();
        var tanggal = tgl.getDate();
        var bulan = tgl.getMonth();
        var tahun = tgl.getFullYear();

       var key = (new Date).getTime() / 1000;

    
        if (this.state.data.name == '' || this.state.data.info =='' ) {
               swal({
                    title: "Upss!",
                    text: "Data Tidak Boleh Kosong",
                    icon: "error",
                    button: "Close",
                });
        }else{
                const datass = [
                    {
                        key: key,
                        name: this.state.data.name,
                        info: this.state.data.info,
                        create: `${tanggal}-${bulan}-${tahun}`,
                        width: 200,
                    }
                ]
                this.props.hendleAdd(datass)
                this.setState({
                    data: {
                        name: '',
                        info: '',
                    }
                })
        }
        
        
   }
    
    render(){
        
        return(
            <Fragment>
                <div className="bg">
                <nav className="navbar navbar-expand-lg navbar-light ">
  
                <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    
                    </ul>
                    <button  className="btn bg-light tombol" onClick={this.props.hendleLogout}> <b> SIGN-OUT</b></button>
                   
                </div>
                </div>
                </nav>


                <div className="container" id="contain">
                <div className="row">
                    
                    <div className="col-lg-6">
                        <h1 className="text-white res cre">Create Category  
                            
                        </h1>
                    </div> 
                    <div className="col-lg-6"></div>
                    <div className="map"></div>
                    <div className="col-lg-12">
                        <Link to="/dashboard"  className="btn back " > Back </Link>
                    </div>
                   
                    <div className="col-lg-12 tabel">
                        
                        <div className="wrap">
                        <h3>Create Category</h3>
                        <form onSubmit={this.hendleSubmit}> 
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.hendleChange} value={this.state.data.name} name="name" placeholder="Category Name" />
                            
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.hendleChange}  value={this.state.data.info} name="info"  placeholder="Description"  />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn  btn-outline-primary submit" >SUBMIT</button>

                        </div>
                        
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



const mapDispatchToProps = (dispatch) => {
	return{
        hendleAdd : (data) => dispatch({type: ActionType.IS_ADD, data: data})

	}
}

export default connect(null, mapDispatchToProps)(Add);