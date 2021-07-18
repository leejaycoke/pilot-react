import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LoginPage, ProfilePage } from "pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
