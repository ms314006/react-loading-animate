import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Line = (props) => {
  const { fill, width, gap } = props;
  return (
    <div
      className={styles.line}
      style={{
        background: fill,
        width,
        margin: gap,
      }}
    />
  );
};

Line.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  gap: PropTypes.number,
};

Line.defaultProps = {
  fill: '#4b9cdb',
  width: 15,
  gap: 4,
};

const Bar = (props) => {
  const circleCount = 3;
  return (
    <>
      {
        [...Array(circleCount)].map((v, i) => {
          const key = i;
          return <Line key={key} {...props} />;
        })
      }
    </>
  );
};

export default Bar;
