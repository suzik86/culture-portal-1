import React, { Component } from 'react';
import Ru from '../json/ru';
import MainPage from './mainPage/MainPage';
import Header from './Header';
import Footer from './Footer';
import Architector from './architector/Architector';

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Ru,
      team: 'Наша команда',
      // isLoading: true,
    };
  }

  render() {
    const { data, team } = this.state;
    const listLength = data.author.length;
    console.log(Ru);
    return (
      <div>
        <Header />
        <MainPage team={team} data={data} listLength={listLength} />
        <Architector />
        <Footer />
      </div>
    );
  }
}

export default App;
