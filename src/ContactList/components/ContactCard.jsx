import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import { Contact } from '../prop-types';
import styles from './ContactCard.module.scss';

const ContactCard = ({ contact }) => (
  <Card className={styles.card}>
    <CardContent>
      <div>{contact.name}</div>
      <div>{contact.phone}</div>
    </CardContent>
  </Card>
);

ContactCard.propTypes = {
  contact: Contact.isRequired,
};

export default ContactCard;
