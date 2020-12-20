import React, { Component } from 'react'
import Axios from 'axios';
import Appbar from './components/Appbar'
import './App.css';
import Landing from './screens/Landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




const App = () => {

  Axios.defaults.baseURL = 'http://localhost:5000/api/v1/todo';

  return(
    <Router>
      <Appbar/>
      <Switch>
        <Route render={({ location }) => {
              let params = new URLSearchParams(location.search);
              return <Landing existingItemId={params.get("item_id")} />;
            }}/>
      </Switch>
    </Router>
  )
}

export default App ;