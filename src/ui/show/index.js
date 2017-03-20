import React, { Component } from 'react';

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
      </div>
    );
  }
}
