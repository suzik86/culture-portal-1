import React, { Component } from 'react';

import MainPage from './mainPage/MainPage';
import Header from './Header';
import Footer from './Footer';
import Architector from './architector/Architector';

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
        <Header />
        <MainPage team={team} data={data} />
        <Architector />
        <Footer />
      </div>
    );
  }
}

export default App;
