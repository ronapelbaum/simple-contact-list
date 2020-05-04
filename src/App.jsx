import React from 'react';
import { ContactList } from './ContactList';
import { Provider } from 'react-redux';
import store from './store';
import './common/common.module.scss';

const App = () => (
  <Provider store={store}>
      <ContactList />
  </Provider>
);

export default App;
