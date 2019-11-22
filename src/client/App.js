import React from 'react';
import Navbar from './components/Navbar/index';
import Home from './components/Home/index';
import About from './components/About/About';
import YouthCorner from './components/youthCorner/youthCorner';
import Events from './components/Events/Events';
import './app.css';
import './card.css';
import Footer from './components/Footer/Footer';

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
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
