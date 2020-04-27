import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../actions';
import { Contact } from '../proptypes/Contact';

const ContactCard = ({ name, phone }) => (
  <div>
    <div>{name}</div>
    <div>{phone}</div>
  </div>
);

ContactCard.propTypes = Contact;

export default ContactCard;
