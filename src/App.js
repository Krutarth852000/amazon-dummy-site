import { Domain, Reorder } from '@material-ui/icons';
import React from 'react';
import reactDom from 'react-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        {/* <h1>hello kpzone</h1> */}
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* header */}
      {/* home */}

      </div>
      </Router>
  );
}

export default App;
