import React, { Component } from 'react';
import './App.css';
import Register from '../src/components/register/Register'
import Login from '../src/components/login/Login';
import ListAds from '../src/components/listAds/ListAds'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/listAds" component={props => <ListAds {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
