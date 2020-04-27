import React from 'react';
import { Header } from './components';
import styles from './App.module.scss'

const App = () => (
  <div className={styles.app}>
    <Header title="Contact List" />
  </div>
);

export default App;
