import React from 'react';
import cx from 'classnames';

import fonts from '../../../fonts/fonts.scss';
import styles from './styles.scss';

const Bid = props =>
  <div>
    <div className={cx(styles.top, fonts['promixanova-semibold'])}>
      {props.top}
    </div>
    <div className={cx(styles.middle, fonts['promixanova'])}>
      {props.middle}
    </div>
    <div className={cx(styles.middle, fonts['promixanova'])}>
      {props.bottom}
    </div>
  </div>;

export default Bid;
