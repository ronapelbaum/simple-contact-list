import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Contact } from '../prop-types';
import ContactCard from './ContactCard';

const List = ({
  contactList,
  loading,
}) => (
  <Container>
    <Grid
      container
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      {loading ? Array.from(new Array(7)).map((item, index) => (
        <Grid key={index} item>
          {/* TODO consider extracting this logic to a "GridWithSkeleton" component */}
          <Skeleton variant="rect" width={210} height={118} />
        </Grid>
        
      )) : contactList.map(contact => (
        <Grid key={contact.name} item>
          <ContactCard contact={contact} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
List.propTypes = {
  contactList: PropTypes.arrayOf(Contact),
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: state.ContactListReducer.loading,
  contactList: state.ContactListReducer.contactList,
});

export default connect(mapStateToProps)(List);
