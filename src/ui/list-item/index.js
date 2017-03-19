import React from 'react';

import styles from './styles.scss';
import ellp from './ellp.png';

const ListItem = props =>
  <div className={styles.item}>
    <div className={styles.top}>
      <div className={styles.lane}>
        lane {props.lane}
      </div>
      <img className={styles.ellp} src={ellp} alt="" />
      <div className={styles.place}>
        place {props.place}
      </div>
    </div>
    <div className={styles.middle}>
      {props.middle}
    </div>
  </div>;

export default ListItem;
