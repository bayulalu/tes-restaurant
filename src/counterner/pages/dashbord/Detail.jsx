import React , {Component, Fragment} from 'react';


class Detail extends Component{
    componentDidMount(){
        console.log(this.props.match.params.title);
        
    }

    render(){
        console.log(this.props);
        
        return(
            <Fragment  >
                <h1>Haloooo haoooo halo</h1>
            </Fragment>
        )
    }
}

export default Detail;