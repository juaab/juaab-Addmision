import React from 'react';
import './App.css';
import {Switch,withRouter, Route} from 'react-router-dom'
import Login from './components/Login';
import Form_ikebana from './components/form_ikebana'
import Nav from './components/nav'
import Form from './components/form';
import DisData from './components/disData';

function App() {
  return (

    <div style={{ marginTop: '40px' }}>
      <Nav />
      <Switch>
        <Route exact path="/Language-Proficiency-Application" component={withRouter(Form)}/>
        <Route exact path="/admision-details" component={withRouter(DisData)}/>
        <Route exact path="/login" component={withRouter(Login)}/>
        <Route exact path="/ikebana" component={withRouter(Form_ikebana)}/>
      </Switch>
    </div>

  );
}

export default App;
