import React from "react";
import CreateAccount from "./components/CreateAccount";
import LoginToAccount from "./components/LoginToAccount";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/creat_an_account'>CREATE AN ACCOUNT</Link>
          </li>
          <li>
            <Link to='login_to_your_ccount'>LOGIN TO YOUR ACCOUNT</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/creat_an_account'>
          <CreateAccount />
        </Route>
        <Route path='/login_to_your_ccount'>
          <LoginToAccount/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}





export default App;