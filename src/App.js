import './style.css';
import CreateAccount from './pages/CreateAccount';
import LoginToAccount from './pages/LoginToAccount';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <CreateAccount/>
        </Route>
        <Route exact path='/LogIn'>
          <LoginToAccount/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;