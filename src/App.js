import React, { Component } from 'react';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import Entry from './components/userEntryPage'
import {Col,Row} from 'react-bootstrap';
import Header from './components/Header'
import './App.css';
import {connect} from 'react-redux'
import {userNameUpdate} from './redux/actions/userNameAction'

class App extends Component {
      constructor(props){
            super(props);
            this.state={
                name:''
            }
      }

      componentWillReceiveProps(nextProps){
          console.log(nextProps)
            if(nextProps.username != this.state.name){
                this.setState ({
                    name:nextProps.username
                })
           }
      }

      render() {
        let isUserAvailable = (this.state.name.length == 0) ? false : true;
        return (
          <div className="App">
              <Header  name={this.state.name}/>
              {isUserAvailable ? (
                  <div>
                      <Row>
                          <AddTodo />
                      </Row>
                      <Row>
                      <TodoList/>
                      </Row>
                  </div>
              ) :(
                  <Entry/>
              )}

          </div>
        );
      }
}

const mapStateToProps = (state)=>{
    return {
        username:state.checkUserName.username
    }
}

export default connect(mapStateToProps,null) (App);
