import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Header from './Header';
import ContactList from './ContactList';

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
      <ContactList />
    </React.Fragment>
  );
};
Main.propTypes = {
  getContacts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(Actions.getContacts()),
});

export default connect(() => ({}), mapDispatchToProps)(Main);
