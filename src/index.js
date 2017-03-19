import React from 'react';
import { render } from 'react-dom';
import { WindowResizeListener } from 'react-window-resize-listener';

import Navbar from './ui/navbar';

import './normalize.css';

class App extends React.Component {
  state = { minWidthReached: false }

  handleResize = (windowSize) => {
    console.log(windowSize);
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
            App
          </div>
          :
          <div>Min width not reached</div>
        }
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
