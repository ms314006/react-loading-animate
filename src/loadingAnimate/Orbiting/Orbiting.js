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

Ring.propTypes = {
  fill: PropTypes.string,
  diameter: PropTypes.number,
};

Ring.defaultProps = {
  fill: '#4b9cdb',
  diameter: 45,
};

const Orbiting = props => <Ring {...props} />;

export default Orbiting;
