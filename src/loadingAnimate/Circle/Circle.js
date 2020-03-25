import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Circle = (props) => {
  const { fill, diameter } = props;
  return (
    <div
      className={styles.ring}
      style={{
        borderColor: fill,
        height: diameter,
        width: diameter,
      }}
    />
  );
};

Circle.propTypes = {
  fill: PropTypes.string,
  diameter: PropTypes.number,
};

Circle.defaultProps = {
  fill: '#4b9cdb',
  diameter: 15,
};

export default Circle;
