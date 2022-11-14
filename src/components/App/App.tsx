import React from 'react';
import styles from './App.module.css';
import WelcomeComponent from "../Welcome/WelcomeComponent";

function App() {
  return (
    <div className={styles.App}>
      <WelcomeComponent/>
    </div>
  );
}

export default App;
