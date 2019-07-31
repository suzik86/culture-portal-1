import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Architector from './architector/Architector';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Architector />
        <Footer />
      </div>
    );
  }
}

export default App;
