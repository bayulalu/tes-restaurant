import React , {Component, Fragment } from 'react';
import './dashbord.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Pagination } from 'antd';
import {Link} from 'react-router-dom';


class Artikel extends Component{
    state = {
        datas: [],
        minValue: 0,
        maxValue: 10
    }

    handleChange = value => {
        if (value <= 1) {
          this.setState({
            minValue: 0,
            maxValue: 10
          });
        } else {
          this.setState({
            minValue: this.state.maxValue,
            maxValue: value * 10
          });
        }
      };

    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=apple&from=2019-06-15&to=2019-06-15&sortBy=popularity&apiKey=e1316bcba01e4d2881afb978d06ee5cf').then((res) => {
            
            this.setState({
                datas: res.data.articles
            })
        })
    }

    // hendeleDetail = (data) => {
    //     // console.log(data);
        
    //    this.props.history.push(`/detail/${data}`)
        
    // }

    render(){
        
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
                        <h1 className="text-white res">Artikel  
                            
                        </h1>
                    </div> 
                    <div className="col-lg-6"></div>
                    <div className="map"></div>
                    <div className="col-lg-12">
                        <Link to="/dashboard" className="btn btn-info">CATEGORIS</Link> &nbsp;
                        <Link to="#" className="btn btn-info">RESTAURANT</Link> &nbsp;
                        <Link to="/artikel" className="btn btn-info">Artikel</Link> 
                    
                    </div>
                    <div className="col-lg-12 tabel">
                        <div className="wrap">
                            <div className="container">
                            <h1 className="text-center">Artikel</h1> <br/>
                                <div className="row">
                               
                                    {
                                        this.state.datas &&
                                        this.state.datas.length > 0 &&
                                        this.state.datas.slice(this.state.minValue, this.state.maxValue)
                                       .map((data, index) => {
                                            return(
                                                <div className="col-lg-4" key={index}>
                                                <div className="card" >
                                                <img className="card-img-top" src={data.urlToImage} alt="Card image cap" id="gambar" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{data.title}</h5>
                                                    <p className="card-text">{data.description}</p>
                                                    <a href={data.url} className="btn btn-primary">Detail</a>
                                                    
                                                </div>
                                                </div> 
                                                </div>
                                            )
                                        })
                                    }
                                    
                                   
                                   

                                   
                                </div>
                                
                                 
                            </div>
                            <br/>
                            <Pagination
                            defaultCurrent={1}
                            defaultPageSize={9}
                            onChange={this.handleChange}
                            total={15}
                          />
                       </div>
                    </div>  

                </div>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default Artikel;