import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error404 from "./Components/Error404/Error404";
import Register from "./Pages/Register";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [volunteer, setVolunteer] = useState([]);
  return (
    <UserContext.Provider
      value={{ loggedInUser, setLoggedInUser, volunteer, setVolunteer }}
    >
      <Router>
        <Switch>
          <PrivateRoute path="/register/:name">
            <Register />
          </PrivateRoute>
          <Route path="/login">
            <Login />
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
    </UserContext.Provider>
  );
}

export default App;
