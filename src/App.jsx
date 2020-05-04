import React from 'react';
import { Header } from './components';
import { ContactList } from './ContactList';
import { Provider } from 'react-redux';
import store from './store';
import styles from './App.module.scss'

const App = () => (
  <Provider store={store}>
    <div className={styles.app}>
      <Header title="Contact List" />
      <ContactList />
    </div>
  </Provider>
);

export default App;
