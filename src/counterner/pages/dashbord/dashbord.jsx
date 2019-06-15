import React, { Component, Fragment  } from "react";
import './dashbord.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import {BrowserRouter as Router , Route, Link, Redirect} from 'react-router-dom';

import ActionType from '../../../redux/reducer/gelobalActionType';
import {connect} from 'react-redux';


const ResizeableTitle = props => {
    const { onResize, width, ...restProps } = props;
  
    if (!width) {
      return <th {...restProps} />;
    }
  
    return (
      <Resizable width={width} height={0} onResize={onResize}>
        <th {...restProps} />
      </Resizable>
    );
  };
  

class Dashbord extends Component{
    state = {
        columns: [
          {
            title: 'Name',
            dataIndex: 'name',
            width: 200,
          },
          {
            title: 'Info',
            dataIndex: 'info',
            width: 100,
          },
          {
            title: 'Create At',
            dataIndex: 'create',
            width: 200,
          },
          
          // {
          //   title: 'Action',
          //   key: 'action',
          //   render: () => <a href="javascript:;">Delete</a>,
          // },
        ],
      };
    
      components = {
        header: {
          cell: ResizeableTitle,
        },
      };
    
      data = [
        {
          key: 0,
          create: '2018-02-11',
          info: 'income',
          name: 'Test catagory',
        },
        {
          key: 1,
          create: '2018-02-11',
          info: 'income',
          name: 'Test catagory',
        },
        {
          key: 2,
          create: '2018-02-11',
          info: 'income',
          name: 'Test catagory',
        },
      ];
    
      handleResize = index => (e, { size }) => {
        this.setState(({ columns }) => {
          const nextColumns = [...columns];
          nextColumns[index] = {
            ...nextColumns[index],
            width: size.width,
          };
          return { columns: nextColumns };
        });
      };
    
    render(){
      console.log(this.props.datas);
      

        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          }));
        return(
            <Fragment>
                <div className="bg">
                <nav className="navbar navbar-expand-lg navbar-light ">
  
                <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    
                    </ul>
                    <button onClick={this.props.hendleLogout} className="btn bg-light tombol"> <b> SIGN-OUT</b></button>
                   
                </div>
                </div>
                </nav>


                <div className="container" id="contain">
                <div className="row">
                    
                    <div className="col-lg-6">
                        <h1 className="text-white res">Dashboard  
                            
                        </h1>
                    </div> 
                    <div className="col-lg-6"></div>
                    <div className="map"></div>
                    <div className="col-lg-12">
                        <a href="" className="btn btn-info">CATEGORIS</a> &nbsp;
                        <a href="" className="btn btn-info">RESTAURANT</a> 
                    
                    </div>
                    <div className="col-lg-12 tabel">
                        <div className="wrap">
                        <Link to="/add" className="btn  tombol-tabel">ADD</Link> 
                        <a href="" className="btn tombol-tabel">EDIT</a>
                        <a onClick={this.props.hendeleDelete} className="btn tombol-tabel">DELETE</a>  
                        <br />
                        <Table bordered components={this.components} columns={columns} dataSource={this.props.datas} />
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
      datas: state.datas
    }
}


const mapDispatchToProps = (dispatch) => {
	return{
    hendleLogout : () => dispatch({type: ActionType.IS_LOGOUT}),
    hendeleDelete: () => dispatch({type: ActionType.IS_DELETE})

	}
}
export default connect(mapToStateProps ,mapDispatchToProps)(Dashbord);