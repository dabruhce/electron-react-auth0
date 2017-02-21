import './styles/app.scss'

import { Config } from '../config'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import AuthService from './utils/AuthService'

import Layout from './Layout'
import Home from './components/pages/Home'
import Login from './components/pages/auth/Login'


console.log(Config);
console.log(Config.clientID);
console.log(Config.domain);
console.log(Config.auth[0].clientID);
console.log(Config.auth[0].domain);


const auth = new AuthService(Config.auth[0].clientID, Config.auth[0].domain)

render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout} auth={auth}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'));
