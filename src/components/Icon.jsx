import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
  return (
    <i className={`icon icon-${props.type}`} />
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
