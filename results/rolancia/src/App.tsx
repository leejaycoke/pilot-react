import React from "react";
import styles from "./App.module.css";
import Login from "./components/Login/Login";
import { HttpClientProps } from './model/interfaces';

const App: React.FC<HttpClientProps> = ({httpClient}: HttpClientProps) => {
  return (
    <div className={styles.container}>
      <Login httpClient={httpClient}/>
    </div>
  );
};

export default App;
