import React from 'react';
import { Image, Button } from 'semantic-ui-react';

import styles from './styles.scss';
import car from './car.png';
import verified from './verified.png';
import numcopy from './numcopy.png';
import iconscopy from './iconscopy.png';

const Lane = props =>
  <div className={styles.lane}>
    {props.verified ? <img className={styles.verified} src={verified} alt="" /> : null}
    {props.numcopy ? <img className={styles.numcopy} src={numcopy} alt="" /> : null}
    {props.iconscopy ? <img className={styles.iconscopy} src={iconscopy} alt="" /> : null}
    <div className={styles.car}>
      <Image shape="rounded" src={car} />
    </div>
    <div className={styles.bid}>
      <Button circular inverted color="green">
        Bid $16, 000
      </Button>
    </div>
  </div>;

export default Lane;
