import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import UserInfo from "./components/UserInfo/UserInfo";
import { HttpClientProps } from "./model/interfaces";

const App: React.FC<HttpClientProps> = ({ httpClient }: HttpClientProps) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className={styles.container}>
            <Login httpClient={httpClient} />
          </div>
        </Route>
        <Route exact path="/user">
        <div className={styles.container}> 
          <UserInfo httpClient={httpClient}/>
        </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
