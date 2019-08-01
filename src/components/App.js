import React, { Component } from 'react';

import '../styles/App.css';

import Architector from './Architector/Architector';
import MainPage from './MainPage/MainPage';
import Header from './Header';
import Footer from './Footer';
import Ru from '../json/ru';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Ru,
      team: 'Наша команда',
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
