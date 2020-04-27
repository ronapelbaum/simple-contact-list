import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { Contact } from '../proptypes/Contact';
import ContactCard from './ContactCard';

const ContactList = ({ contactList }) => (
  <div >
    {contactList.map(item => (
      <ContactCard key={item.name + item.phone} {...item} />
    ))}
  </div>
);

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(Contact),
};

const mapStateToProps = state => ({
  contactList: state.contactList,
});

export default connect(mapStateToProps)(ContactList);
