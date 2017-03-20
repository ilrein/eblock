import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import cx from 'classnames';

import fonts from '../../fonts/fonts.scss';
import styles from './styles.scss';

import SearchBar from '../searchbar';
import Lanes from '../lanes';
import Show from '../show';

class TabView extends Component {
  handleSelect = (index, last) => {};

  render() {
    Tabs.setUseDefaultStyles(false);
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={3}
      >
        {/*
          <TabList/> is a composite component and is the container for the <Tab/>s.
        */}

        <TabList className={styles.wrapper}>

          {/*
            <Tab/> is the actual tab component that users will interact with.

            Selecting a tab can be done by either clicking with the mouse,
            or by using the keyboard tab to give focus then navigating with
            the arrow keys (right/down to select tab to the right of selected,
            left/up to select tab to the left of selected).

            The content of the <Tab/> (this.props.children) will be shown as the label.
          */}

          <Tab className={cx(styles.tab, fonts['promixanova-semibold'])}>upcoming</Tab>
          <Tab className={cx(styles.tab, fonts['promixanova-semibold'])}>live appraisals</Tab>
          <Tab className={cx(styles.tab, fonts['promixanova-semibold'])}>live 24h auctions</Tab>
          <Tab className={cx(styles.tab, fonts['promixanova-semibold'])}>live lanes</Tab>
        </TabList>

        {/*
          <TabPanel/> is the content for the tab.

          There should be an equal number of <Tab/> and <TabPanel/> components.
          <Tab/> and <TabPanel/> components are tied together by the order in
          which they appear. The first (index 0) <Tab/> will be associated with
          the <TabPanel/> of the same index. When you run this example with
          `selectedIndex` equal to 0, the tab with the label "Foo" will be selected
          and the content shown will be "Hello from Foo".

          As with <Tab/> the content of <TabPanel/> will be shown as the content.
        */}

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
          <div className={styles.container}>
            <div className={styles.searchbox}>
              <SearchBar />
            </div>
            <div className={styles.lanes}>
              <Lanes />
            </div>
            <div className={styles.show}>
              <Show />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    )
  }
}

export default TabView;
