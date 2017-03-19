import React from 'react';
import { render } from 'react-dom';

import './normalize.css';

class App extends React.Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

render(<App />, document.getElementById('root'));
