import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {RouterView,route} from './Routers'
class App extends Component {
  render() {
    return (
      <Router>
        <RouterView route={route}></RouterView>
      </Router>
    );
  }
}

export default App;