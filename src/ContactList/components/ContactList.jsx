import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { Contact } from '../proptypes/Contact';
import ContactCard from './ContactCard';
import * as Actions from '../actions';

const ContactList = ({
  contactList,
  loading,
  getContacts,
}) => {
  useEffect(() => {
    // componentDidMount
    getContacts()
  }, [getContacts]);
  return (
    <Container>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {loading ? Array.from(new Array(3)).map((item, index) => (
          <Grid key={index} item>
            <Skeleton variant="rect" width={210} height={118} />
          </Grid>
          
        )) : contactList.map(item => (
          <Grid key={item.id} item>
            <ContactCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(Contact),
};

const mapStateToProps = state => console.log('mapStateToProps',state)||({
  loading: state.ContactListReducer.loading,
  contactList: state.ContactListReducer.contactList,
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(Actions.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
