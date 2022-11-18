import React from 'react';
import styles from './App.module.css';
import WelcomeComponent from "../Welcome/WelcomeComponent";
import WhoIAmComponent from "../WhoIAm/WhoIAmComponent";

function App() {
  return (
    <div className={styles.App}>
      <WelcomeComponent/>
      <WhoIAmComponent/>
    </div>
  );
}

export default App;
