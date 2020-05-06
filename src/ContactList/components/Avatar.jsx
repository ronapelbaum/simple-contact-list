import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as CitizenIcon} from '../../common/images/citizen.svg';
import {ReactComponent as ProfessionalIcon} from '../../common/images/professional.svg';

const Avatar = ({ type = '', className}) => {
  switch (type.trim().toLowerCase()) {
    case 'citizen':
      return <CitizenIcon className={className} />
    case 'professional':
      return <ProfessionalIcon className={className} />
    default:
      return null;
  }
};

Avatar.propType = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Avatar;
