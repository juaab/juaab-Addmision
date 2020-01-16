import React from 'react';
import './App.css';
import {Switch,withRouter, Route} from 'react-router-dom'
import Main from './components/main';
import Detailes from './components/Detailes';
import Login from './components/Login';

function App() {
  return (

      <div  style={{marginTop:'40px'}}>
      <Switch>
        <Route exact path="/" component={withRouter(Main)}/>
        <Route exact path="/admision-details" component={withRouter(Detailes)}/>
        <Route exact path="/login" component={withRouter(Login)}/>
      </Switch>

    </div>
    
  );
}

export default App;
