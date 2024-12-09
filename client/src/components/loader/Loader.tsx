import React from 'react';

import * as styles from './styles.module.css'

const Loader: React.FC = () => {
  return (
    <div className={styles['loader']}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  );
};

export { Loader };
