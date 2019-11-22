import React from 'react';
import Navbar from './components/Navbar/index';
import Home from './components/Home/index';
import About from './components/About/About';
import './app.css';
import './card.css';
import Footer from './components/Footer/Footer';
import Resources from './components/Resources/resources';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile'
import Sms from './components/Profile/Sms'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/resources' exact component={Resources} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/sms' exact component={Sms} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
