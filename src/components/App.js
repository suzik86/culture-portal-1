import React, { Component } from 'react';

import '../styles/App.css';

import Architector from './architector/Architector';
import MainPage from './mainPage/MainPage';
import Header from './Header';
import Footer from './Footer';
import Architector from './architector/Architector';

import '../styles/App.css';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
import Ru from '../json/ru';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Ru,
      team: 'Наша команда',
      targetArch: 0,
      // isLoading: true,
    };
  }

  render() {
    const { data, team, targetArch } = this.state;
    const listLength = data.author.length;
    return (
      <div>
        <Header />
        <MainPage team={team} data={data} />
        <Architector data={data.author[targetArch]} />
        <Footer />
      </div>
    );
  }
}

export default App;
