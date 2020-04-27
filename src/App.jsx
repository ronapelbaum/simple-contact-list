import React from 'react';
import { Header, ContactList } from './components';
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
