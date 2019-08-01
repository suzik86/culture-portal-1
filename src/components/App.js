import React, { Component } from 'react';

import Architector from './architector/Architector';
import MainPage from './mainPage/MainPage';
import Header from './Header';
import Footer from './Footer';
import Ru from '../i18n/ru';
import '../styles/App.css';
import '../../node_modules/react-modal-video/css/modal-video.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Ru,
      targetArch: 0,
      // isLoading: true,
    };
  }

  render() {
    const { data, targetArch } = this.state;
    const listLength = data.translation.author.length;
    return (
      <div>
        <Header />
        <MainPage listLength={listLength} data={data} />
        <Architector data={data.translation.author[targetArch]} />
        <Footer />
      </div>
    );
  }
}

export default App;
