import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Avatar from './Avatar';
import { Contact } from '../prop-types';
import styles from './ContactCard.module.scss';

const DEFAULT_IMAGE = 'http://caillouetland.com/wp-content/uploads/2017/07/avatar-blank.png';
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
      <CardContent className={styles.content}>
        <div className={styles.image}>
          <CardMedia component="img" image={contact.profile_image || DEFAULT_IMAGE} />
        </div>
        <div>
          <Avatar
            type={contact.driverType}
            className={styles.avatar}
          />
          <Typography variant="h5" component="h2">
            {contact.name}
          </Typography>
          <Rating
            value={Number(contact.driverRank)}
            size="small"
            readOnly
          />
          { showMore &&
            <React.Fragment>
              <Field label="phone number" val={contact.phone} />
              <Field label="email" val={contact.email} />
            </React.Fragment>
          }
        </div>
        
      </CardContent>
    </Card>
  );
};

ContactCard.propTypes = {
  contact: Contact.isRequired,
};

export default ContactCard;
