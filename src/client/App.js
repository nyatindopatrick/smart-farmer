import React from 'react';
import Navbar from './components/Navbar/index';
import Home from './components/Home/index';
import About from './components/About/About';
import YouthCorner from './components/youthCorner/youthCorner';
import Events from './components/Events/Events';
import Contact from "./components/Contact/Contact";
import Services from './components/Services/Services';
import Tracking from './components/Tracking/Tracking';
import Maps from './components/Maps/Maps'
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
        <Route path='/youthcorner' exact component={YouthCorner} />
        <Route path='/events' exact component={Events} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/services' exact component={Services} />
        <Route path='/services/tracking' exact component={Tracking} />
        <Route path='/services/maps' exact component={Maps} />

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
