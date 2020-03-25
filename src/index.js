import React from 'react';
import PropTypes from 'prop-types';
import * as loadingAnimateSource from './loadingAnimate';
import styles from './index.scss';

const Loading = (props) => {
  const { type, zIndex } = props;
  return (
    <div
      className={styles.wrapp}
      style={{ zIndex }}
    >
      {loadingAnimateSource[type](props)}
    </div>
  );
};

Loading.propTypes = {
  type: PropTypes.string,
  zIndex: PropTypes.number,
};

Loading.defaultProps = {
  type: 'beat',
  zIndex: 10,
};

export default Loading;
