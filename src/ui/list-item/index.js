import React from 'react';
import cx from 'classnames';

import fonts from '../../fonts/fonts.scss';
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
        {props.place}
      </div>
    </div>
    <div className={cx(styles.middle, fonts['promixanova-semibold'])}>
      {props.middle}
    </div>
    <div className={cx(styles.sameline, fonts['promixanova'])}>
      <div>{props.bottom} items remaining</div>
      <div className={styles.watchlist}>
        {props.watchList ? `, ${props.watchList} are on your watchlist` : null}
      </div>
    </div>
  </div>;

export default ListItem;
