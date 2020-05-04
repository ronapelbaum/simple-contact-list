import React from 'react';
import { connect } from 'react-redux';
import { InputBase, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import * as Actions from '../actions';
import styles from './SearchContacts.module.scss';

const SearchContacts = ({ searchContacts }) => (
  <div className={styles.search}>
    <InputBase
      placeholder="Search..."
      onChange={e => searchContacts(e.target.value)}
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon />
    </IconButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  searchContacts: prefix => dispatch(Actions.searchContacts(prefix)),
});

export default connect(null, mapDispatchToProps)(SearchContacts);
