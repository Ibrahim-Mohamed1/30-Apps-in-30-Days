import React from 'react';
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Home from './Home'
import Contact from "./Contact"
import Skills from "./Skills"
import FancyBackground from './App2/FancyBackground';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills" component={Skills} />
        <Route path="/fancy background" component={FancyBackground}/>
      </Switch>
    </div>
  );
};

export default App;