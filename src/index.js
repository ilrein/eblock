import React from 'react';
import { render } from 'react-dom';

import Navbar from './ui/navbar';

import './normalize.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        App
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
