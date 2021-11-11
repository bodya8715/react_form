import React, { useState } from "react";
import './style.css';
import Header from "./components/Header";
import CreateAccount from "./components/CreateAccount";
import LoginToAccount from "./components/LoginToAccount";

function App() {
  const [isLoggedIn, changePage] = useState(false);
  let page;

  if(isLoggedIn) {
    page = <LoginToAccount/>;
  } else {
    page = <CreateAccount/>;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} changePage={changePage}/>
      {page}
    </>
  );
}

export default App;