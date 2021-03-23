import React from 'react';
import Home from "../src/Components/Home/Home";
import "./app.scss";
import {BrowserRouter as Router, Route, Switch, Redirect} from  "react-router-dom";
import Level1 from './Components/Level1/Level1';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/level1" component={Level1}/>
        {/* <Route path="/404" component={NotFoundPage}/> */}
        {/* <Redirect to="/404"/> */}
      </Switch>
    </Router>
  );
}

export default App;
