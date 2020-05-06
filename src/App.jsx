import React from 'react';
import { ContactList } from './ContactList';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import store from './store';
import './common/common.module.scss';
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ContactList />
    </ThemeProvider>
  </Provider>
);

export default App;
