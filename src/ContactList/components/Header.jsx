import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchContacts from './SearchContacts';
import styles from './Header.module.scss';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography className={styles.title} variant="h6" noWrap>
        Contact List
      </Typography>
      <SearchContacts />
    </Toolbar>
  </AppBar>
);

export default Header;
