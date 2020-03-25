import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Orbiting = (props) => {
  const { fill, diameter } = props;
  console.log('props', props);
  return (
    <div
      className={styles.ring}
      style={{
        borderColor: fill,
        height: diameter,
        width: diameter,
      }}
    >
      <div
        className={styles.ballHolder}
        style={{
          height: diameter,
          left: diameter * 43 / 100,
        }}
      >
        <div
          className={styles.ball}
          style={{ background: fill }}
        />
      </div>
    </div>
  );
};

Orbiting.propTypes = {
  fill: PropTypes.string,
  diameter: PropTypes.number,
};

Orbiting.defaultProps = {
  fill: '#4b9cdb',
  diameter: 45,
};

export default Orbiting;
