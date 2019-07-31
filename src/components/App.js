import React, { Component } from 'react';

import Architector from './architector/architector';
import MainPage from './mainPage/MainPage';

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      team: [],
    };
  }

  render() {
    const { data, team } = this.state;
    return (
      <div>
        <h1>Culture Portal!</h1>
        <MainPage team={team} data={data} />
        <Architector />
      </div>
    );
  }
}

export default App;
