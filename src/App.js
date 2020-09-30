//import { Home } from '@material-ui/icons';
import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home' ;
import { BrowserRouter as Route, Switch, Router } 
from "react-router-dom" ;

function App() {
  return (
    <Router>
    {/* //BEM convention  */}
    <div className="app">
      <Switch>
     <Route path="/">
      <Header />
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
