import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import RecipesContainer from "./components/RecipesContainer"
import GroceriesContainer from "./components/GroceriesContainer"
import Home from "./components/Home"

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="nav">
        <h2><Link to="/">Home</Link></h2>
        <h2><Link to="/recipes">Recipes</Link></h2>
        <h2><Link to="/groceries">Grocery List</Link></h2>    
      </nav>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/recipes">
            <RecipesContainer />
        </Route>
        <Route path="/groceries">
            <GroceriesContainer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
