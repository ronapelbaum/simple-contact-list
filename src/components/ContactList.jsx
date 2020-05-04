import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import * as Actions from '../actions';
import { Contact } from '../proptypes/Contact';
import ContactCard from './ContactCard';

const ContactList = ({ contactList }) => (
  <Container>
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
    >
      {contactList.map(item => (
        <Grid key={item.name + item.phone} item>
          <ContactCard {...item} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(Contact),
};

const mapStateToProps = state => ({
  contactList: state.contactList,
});

export default connect(mapStateToProps)(ContactList);
