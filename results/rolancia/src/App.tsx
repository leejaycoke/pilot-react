import React from "react";
import styles from "./App.module.css";
import Login from "./components/Login/Login";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};

export default App;
