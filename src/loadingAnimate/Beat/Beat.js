import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Circle = (props) => {
  const { fill, diameter, gap } = props;
  return (
    <div
      className={styles.circle}
      style={{
        background: fill,
        width: diameter,
        height: diameter,
        margin: gap,
      }}
    />
  );
};

Circle.propTypes = {
  fill: PropTypes.string,
  diameter: PropTypes.number,
  gap: PropTypes.number,
};

Circle.defaultProps = {
  fill: '#4b9cdb',
  diameter: 15,
  gap: 4,
};

const Beat = (props) => {
  const circleCount = 3;
  return (
    <>
      {
        [...Array(circleCount)].map((v, i) => {
          const key = i;
          return <Circle key={key} {...props} />;
        })
      }
    </>
  );
};

export default Beat;
