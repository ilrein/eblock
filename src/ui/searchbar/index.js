import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './styles.scss';

export default class SearchBar extends Component {
  render() {
    Tabs.setUseDefaultStyles(false);
    return (
      <div className={styles.wrapper}>
        <Input focus placeholder="Search Live Lanes..." />

        <Tabs onSelect={this.handleSelect}>
          <TabList className={styles.tablist}>
            <Tab className={styles.tab}>all</Tab>
            <Tab className={styles.tab}>outbid</Tab>
            <Tab className={styles.tab}>watching</Tab>
            <Tab className={styles.tab}>winning</Tab>
          </TabList>
          <TabPanel>
            <h2>1</h2>
          </TabPanel>
          <TabPanel>
            <h2>2</h2>
          </TabPanel>
          <TabPanel>
            <h2>3</h2>
          </TabPanel>
          <TabPanel>
            <h2>4</h2>
          </TabPanel>
        </Tabs>

      </div>
    );
  }
}