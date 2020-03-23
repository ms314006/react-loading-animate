import React from 'react';
import PropTypes from 'prop-types';
import * as loadingAnimateSource from './loadingAnimate';
import styles from './index.scss';

const Loading = (props) => {
  const { type } = props;
  return (
    <div className={styles.wrapp}>
      {loadingAnimateSource[type](props)}
    </div>
  );
};

Loading.propTypes = {
  type: PropTypes.string,
};

Loading.defaultProps = {
  type: 'beat',
};

export default Loading;
