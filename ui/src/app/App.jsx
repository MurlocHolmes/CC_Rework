import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Slider from './components/slider';
import Home from './components/home';
import { addUserName } from './redux/actions.js';
import Header from './components/general/header';


export class App extends Component {

  render() {
    this.props.onUserNameInput("Taylor");
    const pages = ['Slider'];
    return(
      <Router>
        <div>
          <Header pages={pages} userName={this.props.userName} />

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/slider" component={Slider} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.user_info.userName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserNameInput: user => {
      dispatch(addUserName(user))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
