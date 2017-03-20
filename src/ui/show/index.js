import React, { Component } from 'react';
import cx from 'classnames';
import { Button, Message, Label, Header, Image, Table  } from 'semantic-ui-react';

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
        <div className={styles.data}>
          <Message color="green">
            <b className={cx(styles.black, fonts['promixanova-semibold'])}>73/100</b>
            <span className={styles.grey}> VEHICLE SCORE</span>
          </Message>
          <Message color="red">
            <b className={cx(styles.black, fonts['promixanova-semibold'])}>$3,000</b>
            <span className={styles.grey}> IN DAMAGE</span>
          </Message>

          <div>
            <div className={cx(styles.caption, fonts['promixanova-semibold'])}>vehicle details</div>
            <div className={styles.labels}>
              <Label color="green">AM/FM</Label>
              <Label>CONSOLE</Label>
              <Label>ALLOW WEELS</Label>
              <Label color="green">CD PLAYER</Label>
              <Label color="green">DUAL AIRBAG</Label>
              <Label color="green">ABS</Label>
              <Label>CRUISE CONTROL</Label>
            </div>
          </div>

          <Table basic='very' collapsing style={{ width: '100%' }}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Year
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  2015
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Make
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  BMW
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Model
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  X3
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Trim
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  AWD 4dr
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      VIN
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  JKDMFKDFIJ1212
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Stock #
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  C88S9A
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Vehicle Mileage
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  164,838km
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Doors
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  4
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Passengers
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  5
                </Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
