import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error404 from "./Components/Error404/Error404";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register/:taskID">
          <Register />
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
