import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Contact } from '../prop-types';
import styles from './ContactCard.module.scss';

const Field = ({ label, val }) => val ? 
  <div>
    <span className={styles.label}>{label}:</span>
    {val}
  </div>
  :
  null
;

const ContactCard = ({ contact }) => (
  <Card className={styles.card}>
    <CardContent>
      <CardMedia
        component="img"
        className={styles.image}
        image={contact.profile_image}
      />
      <Typography variant="h5" component="h2">
        {contact.name}
      </Typography>
      <Field label="phone number" val={contact.phone} />
      <Field label="email" val={contact.email} />
    </CardContent>
  </Card>
);

ContactCard.propTypes = {
  contact: Contact.isRequired,
};

export default ContactCard;
