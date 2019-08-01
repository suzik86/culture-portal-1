import React, { Component } from 'react';

import '../styles/App.css';

import Architector from './architector/Architector';
import MainPage from './mainPage/MainPage';
import Header from './Header';
import Footer from './Footer';
import Ru from '../json/ru';

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
    const listLength = data.author.length;
    return (
      <div>
        <Header />
        <MainPage data={data} listLength={listLength} />
        <Architector />
        <Footer />
      </div>
    );
  }
}

export default App;
