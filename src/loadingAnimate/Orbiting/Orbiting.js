import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Orbiting = (props) => {
  const { fill, diameter } = props;
  return (
    <div
      className={styles.ring}
      style={{
        border: `4px solid ${fill}`,
      }}
    >
      <div className={styles.ballHolder}>
        <div
          className={styles.ball}
          style={{
            background: fill,
          }}
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
  diameter: 15,
};

export default Orbiting;
