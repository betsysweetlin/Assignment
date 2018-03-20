import React, { Component } from 'react';
import Signup from "./components/signup";
import './App.css';
import { Route} from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
 import { connect } from "react-redux";
 import { bindActionCreators } from "redux";
 import * as signupActions from "./actionCreators/signup";
 import { withRouter } from "react-router-dom";
// import { dosignup,signup } from './actionCreators/signup';

class App extends Component {
constructor(props){
  super(props);
}
  componentWillMount() {
    this.props.actions.signup();
  }

  handleAddUser=(users) =>{
    console.log(users);
    this.props.actions.dosignup(users);
  }
  
  componentDidMount() {
    this.props.actions.signup(this.props.dosignup);
  }
//  componentWillUpdate(){
//    console.log("componentwillupdate");
//    this.props.actions.signupSuccess();
//  }
 
  render() {
   return (
      <div>
          <Route exact
            path="/"
            render={props =>(
              <Signup
                {...props}
                // dosignup={this.props.dosignup}
                addUser = {this.handleAddUser}
                users={this.props.users}
              />
            )}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.signup);
  return {
 users:state.users,
 signup: state.signup,
 dosignup:state.dosignup
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signupActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

