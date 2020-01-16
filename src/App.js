import React from 'react';
import './App.css';
import { Switch, withRouter, Route } from 'react-router-dom'
import Login from './components/Login';
import Form_ikebana from './components/form_ikebana'
import Nav from './components/nav'
import Form from './components/form';
import DisData from './components/disData';
import Payments from './components/Payments';

function App() {
  return (

    <div style={{ marginTop: '20px', marginBottom: '20px' }} className="container">
      <Nav />
      <Switch>
        <Route exact path="/Language-Proficiency-Application" component={withRouter(Form)} />
        <Route exact path="/admision-details" component={withRouter(DisData)} />
        <Route exact path="/login" component={withRouter(Login)} />
        <Route exact path="/ikebana" component={withRouter(Form_ikebana)} />
        <Route exact path="/payments" component={withRouter(Payments)} />
      </Switch>
    </div>

  );
}

export default App;
