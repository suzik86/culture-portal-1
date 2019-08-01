import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../../node_modules/react-modal-video/css/modal-video.min.css';

import '../styles/App.css';

import Architector from './architector/Architector';
import MainPage from './mainPage/MainPage';
import ArchitectsList from './architectsList/ArchitectsList';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetArch: 0,
    };
  }

  render() {
    const { t, i18n } = this.props;
    const architects = t('architects', { returnObjects: true });
    const listLength = architects.length;
    const { targetArch } = this.state;

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
        <Architector data={architects[targetArch]} />
        <ArchitectsList />
        <Footer />
      </div>
    );
  }
}

export default withTranslation()(App);
