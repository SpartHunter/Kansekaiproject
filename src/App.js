import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
/** Redux gestions import **/


/** Import All Components to app **/
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/createAccount/createAccount';
import ForgetPass from './components/forgetPass/forgetPass';
import Services from './components/services/main/main';
import BestAnime from "./components/services/bestAnime/bestAnime";
import AllAnime from "./components/services/allAnime/allAnime";
import Forum from "./components/services/forum/forum";
import ReadTrailer from "./components/services/readTrailer/readTrailer";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/home#contact">
            <Home/>
          </Route>
          <Route exact path="/home#about">
            <Home/>
          </Route>

          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/newAnime">
            <Services/>
          </Route>
          <Route exact path="/bestAnime">
            <BestAnime/>
          </Route>
          <Route exact path="/allAnime">
            <AllAnime/>
          </Route>

          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/newAnime#newAnime">
            <Services/>
          </Route>
          <Route exact path="/bestAnime#bestAnime">
            <BestAnime/>
          </Route>
          <Route exact path="/allAnime#allAnime">
            <AllAnime/>
          </Route>

          <Route exact path="/readTrailer">
            <ReadTrailer/>
          </Route>
          <Route exact path="/readTrailer#readTrailer">
            <ReadTrailer/>
          </Route>

          <Route exact path="/forum">
            <Forum/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/register">
            <Register/>
          </Route>

          <Route exact path="/forgetPass">
            <ForgetPass/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
