import React from 'react';
import {userNameUpdate} from '../redux/actions/userNameAction';
import {connect} from 'react-redux';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.name
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.username != this.props.name){
            this.setState({
                name:nextProps.username
            })
        }
    }

    render(){
        return(
            <div id="header" >
                <p style={{"display":"inline-block","marginTop":"40px"}}> {this.state.name} Todo List</p>
            </div>
        )
    }
}

const mapSToP = (state)=>{
    return {
        username:state.checkUserName.username
    }
}
export default connect(mapSToP) (Header);