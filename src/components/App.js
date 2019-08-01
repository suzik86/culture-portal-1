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
      // isLoading: true,
    };
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <Header />
        <MainPage data={data} />
        <Architector />
        <Footer />
      </div>
    );
  }
}

export default App;
