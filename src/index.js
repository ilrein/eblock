import React from 'react';
import { render } from 'react-dom';
import { WindowResizeListener } from 'react-window-resize-listener';

import Navbar from './ui/navbar';
import TabView from './ui/tabview';

import './normalize.css';

class App extends React.Component {
  state = { minWidthReached: false }

  handleResize = (windowSize) => {
    if (windowSize.windowWidth < 1200) {
      this.setState({ minWidthReached: false })
    } else {
      this.setState({ minWidthReached: true })
    }
  }

  render() {
    return (
      <div>
        <WindowResizeListener onResize={windowSize => this.handleResize(windowSize)} />
        {this.state.minWidthReached ?
          <div>
            <Navbar />
            <TabView />
          </div>
          :
          <div>Min width not reached</div>
        }
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
