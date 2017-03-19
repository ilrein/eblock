import React from 'react';
import cx from 'classnames';

import styles from './style.scss';
import fonts from '../../fonts/fonts.scss';

import logo from './logo-eblock.png';
import bars from './bars.png';

const Navbar = () =>
  <div className={cx(styles.header, styles.black)}>
    <img src={logo} alt="eBlock" className={styles.logo} />

    <div className={cx(styles.buttons)}>
      <div className={cx(styles.grey, styles.body)}>
        <img className={styles.icon} src={bars} alt="eBlock" />
        <div className={cx(fonts['promixanova-semibold'], styles.content)}>BUY</div>
      </div>

      <div className={cx(styles.grey, styles.body)}>
        <img className={styles.icon} src={bars} alt="eBlock" />
        <div className={cx(fonts['promixanova-semibold'], styles.content)}>SELL</div>
      </div>

      <div className={cx(styles.grey, styles.body)}>
        <img className={styles.icon} src={bars} alt="eBlock" />
        <div className={cx(fonts['promixanova-semibold'], styles.content)}>PENDING</div>
      </div>

      <div className={cx(styles.grey, styles.body)}>
        <img className={styles.icon} src={bars} alt="eBlock" />
        <div className={cx(fonts['promixanova-semibold'], styles.content)}>FINISHED</div>
      </div>
    </div>

  </div>;

export default Navbar;
