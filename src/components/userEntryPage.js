import React from 'react';
import {Row,Col,FormControl,Button} from 'react-bootstrap';
import {checkForMatchInAvailableName,userNameUpdate} from '../redux/actions/userNameAction';
import {connect} from 'react-redux';

class Entry extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.moveToNextPage = this.moveToNextPage.bind(this);
        this.state ={
            availableNames:'',
            userInput:'',
            userName:''
        }
    }
    handleChange(evt){
        let val = evt.target.value;
        if(val.length > 2){
            this.setState({
               userName:val
            },this.props.getAvailableNames(val) )
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            availableNames:nextProps.availableNamesFromReducer
        })
    }
    moveToNextPage(evt){
        this.props.userNameUpdated(this.state.userName)
    }

    render(){
        let dropDownAvailable = (this.state.availableNames.length > 0) ? true : false;
         return(
            <div>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4} style={{"textAlign":"center","marginTop":"250px"}}>
                        <div id="entryDisplayPage">
                            <form className="form-inline" id="entryDisplaypageForm">
                                <FormControl list="names" type="text" name="name" style={{"width":"75%"}} placeholder="Enter Name" onChange={this.handleChange}/>
                                {dropDownAvailable &&
                                     (<datalist id="names">
                                         {this.state.availableNames.map((item,idx) => <option key={idx}>{item}</option>)}
                                       </datalist>)
                                }
                                <Button onClick={this.moveToNextPage}>-></Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        availableNamesFromReducer: state.checkUserName.matchedNames
    }
}
const mapDispatchToProps = (dispatch)=>{
        return{
            getAvailableNames: (userInput) => dispatch(checkForMatchInAvailableName(userInput)),
            userNameUpdated: (userName) => dispatch(userNameUpdate(userName))
        }
}

export default connect(mapStateToProps,mapDispatchToProps) (Entry);