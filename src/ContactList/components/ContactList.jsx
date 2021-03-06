import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Contact } from '../prop-types';
import ContactCard from './ContactCard';
import { displayedContactList } from '../model';

const ContactList = ({
  contactList,
  prefix,
  loading,
}) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    spacing={2}
  >
    {contactList.map(item => (
      <Grid item key={item.id}>
        { item.loading ?
          <Skeleton variant="rect" width={210} height={118} />
          :
          <ContactCard contact={item} />
        }
      </Grid>
    ))}
  </Grid>
);
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(Contact),
  prefix: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: state.ContactListReducer.loading,
  contactList: displayedContactList(state),
});

export default connect(mapStateToProps)(ContactList);
