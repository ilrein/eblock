import React from 'react';
import cx from 'classnames';

import fonts from '../../../fonts/fonts.scss';
import styles from './styles.scss';

const Minibid = props =>
  <div className={cx(styles.bid, props.favoured ? styles.favoured : null)}>
    <div className={cx(styles.top, fonts['promixanova-semibold'])}>
      {props.top}
    </div>
    <div className={cx(styles.middle, fonts['promixanova'])}>
      {props.middle}
    </div>
    <div className={cx(styles.middle, fonts['promixanova'])}>
      <span className={styles.green}>$4,900</span> - {props.bottom}
    </div>
  </div>;

export default Minibid;
