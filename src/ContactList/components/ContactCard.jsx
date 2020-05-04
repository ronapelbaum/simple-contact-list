import React, { useState } from 'react';
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

const ContactCard = ({ contact }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card
      className={styles.card}
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
    >
      <CardContent>
        <CardMedia
          component="img"
          className={styles.image}
          image={contact.profile_image}
        />
        <Typography variant="h5" component="h2">
          {contact.name}
        </Typography>
        { showMore &&
          <React.Fragment>
            <Field label="phone number" val={contact.phone} />
            <Field label="email" val={contact.email} />
          </React.Fragment>
        }
      </CardContent>
    </Card>
  );
};

ContactCard.propTypes = {
  contact: Contact.isRequired,
};

export default ContactCard;
