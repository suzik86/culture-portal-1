import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../styles/App.css';

import Architector from './Architector/Architector';
import MainPage from './MainPage/MainPage';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const architects = t('architects', { returnObjects: true });
    const listLength = architects.length;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div>
        <button type="button" onClick={() => changeLanguage('en')}>en</button>
        <button type="button" onClick={() => changeLanguage('ru')}>ru</button>
        <button type="button" onClick={() => changeLanguage('by')}>by</button>
        <Header />
        <MainPage architects={architects} listLength={listLength} />
        <Architector />
        <Footer />
      </div>
    );
  }
}

export default withTranslation()(App);
