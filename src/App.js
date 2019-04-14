import React from 'react';
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Home from './Home'
import Contact from "./Contact"
import Resume from "./Resume"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
};

export default App;