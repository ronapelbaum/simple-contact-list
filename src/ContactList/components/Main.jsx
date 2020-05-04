import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import * as Actions from '../actions';
import Header from './Header';
import ContactList from './ContactList';
import styles from './Main.module.scss';

const Main = ({
  getContacts,
}) => {
  useEffect(() => {
    // componentDidMount
    getContacts()
  }, [getContacts]);
  return (
    <React.Fragment>
      <Header />
      <Container className={styles.container}>
        <ContactList />
      </Container>
    </React.Fragment>
  );
};
Main.propTypes = {
  getContacts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(Actions.getContacts()),
});

export default connect(null, mapDispatchToProps)(Main);
