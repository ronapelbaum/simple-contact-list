import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';

import * as Actions from '../actions';
import { Contact } from '../proptypes/Contact';
import styles from './ContactCard.module.scss';

const ContactCard = ({ name, phone }) => (
  <Card className={styles.card}>
    <CardContent>
      <div>{name}</div>
      <div>{phone}</div>
    </CardContent>
  </Card>
);

ContactCard.propTypes = Contact;

export default ContactCard;
