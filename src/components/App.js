import React, { Component } from 'react';

import Architector from './architector/architector';

import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Culture Portal!</h1>

        <Architector />

      </div>
    );
  }
}

export default App;
