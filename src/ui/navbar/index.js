import React from 'react';
import cx from 'classnames';

import styles from './style.scss';
import fonts from '../../fonts/fonts.scss';

import logo from './logo-eblock.png';
import bars from './bars.png';

const Navbar = () =>
  <div className={cx(styles.header, styles.black)}>
    <img src={logo} alt="eBlock" className={styles.logo} />
    <div className={cx(styles.grey, styles.body)}>
      <img src={bars} alt="eBlock" />
      <div className={fonts['promixanova-semibold']}>BUY</div>
    </div>
  </div>;

export default Navbar;
