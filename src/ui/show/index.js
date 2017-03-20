import React, { Component } from 'react';
import cx from 'classnames';
import { Button } from 'semantic-ui-react';

import fonts from '../../fonts/fonts.scss';
import styles from './styles.scss';
import car from '../lanes/car.png';
import verified from '../lanes/verified.png';
import numcopy from '../lanes/numcopy.png';
import iconscopy from '../lanes/iconscopy.png';
import miles from './miles.png';

export default class Show extends Component {
  render() {
    return (
      <div className={styles.show}>
        <div className={styles.avatar}>
          <img className={styles.car} src={car} alt="" />
          <img className={styles.verified} src={verified} alt="" />
          <img className={styles.numcopy} src={numcopy} alt="" />
          <img className={styles.iconscopy} src={iconscopy} alt="" />
          <img className={styles.miles} src={miles} alt="" />
        </div>
        <div className={styles.details}>
          <div className={styles.left}>
            <div className={cx(styles.top, fonts['promixanova-semibold'])}>
              #291 - 2004 Ford F-150 Supercab 145" FX4 4WD
            </div>
            <div className={cx(styles.bottom, fonts['promixanova'])}>
              Pars Auto, Ottawa, ON
            </div>
          </div>
          <div className={styles.right}>
            <Button inverted color="green">Bid $13,000</Button>
          </div>
        </div>
      </div>
    );
  }
}
