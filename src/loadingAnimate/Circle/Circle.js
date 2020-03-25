import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Ring = (props) => {
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

Ring.propTypes = {
  fill: PropTypes.string,
  diameter: PropTypes.number,
};

Ring.defaultProps = {
  fill: '#4b9cdb',
  diameter: 15,
};

const Circle = props => <Ring {...props} />;

export default Circle;
