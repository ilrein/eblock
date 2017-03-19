import React from 'react';

import styles from './styles.scss';
import Lane from './lane';

const Lanes = () =>
  <div className={styles.lanes}>
    <div className={styles.wrapper}>
      <Lane verified numcopy iconscopy />
      <Lane numcopy iconscopy />
      <Lane numcopy iconscopy />
      <Lane numcopy iconscopy />
    </div>
  </div>;

export default Lanes;
